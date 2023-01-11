import React, {useCallback, useEffect, useRef, useState} from 'react';
import Quill from "quill"
import 'quill/dist/quill.snow.css'
import {useParams} from "react-router-dom";
import ImageResize from 'quill-image-resize-module-react';
import '../common/Editor.css'
import {TitleEditor} from "../../styled/Editor.styled";
import {AdminButton} from "../../styled/Common.styled";
import DashboardNavigation from "../../components/DashboardNavigation";
import {DashboardContent, DashboardWrapper} from "../../styled/Dashboard.styled";
import {sendMarkerApi} from "../../api/contentApiCall";
import {websocketURL} from "../../api/api";

Quill.register('modules/imageResize', ImageResize);

function Editor__chief() {
    const titleRef = useRef();

    const AUTOSAVE_INTERVAL = 2000
    const toolbarOptions = [[{'header': 2}, {'header': false}], ['image']]

    const {id} = useParams()
    const token = sessionStorage.getItem('req_token')
    const [socket, setSocket] = useState();
    const [quill, setQuill] = useState();
    const [statusArt, setStatusArt] = useState("redaction");

    useEffect(() => {
        const s = new WebSocket(websocketURL + "update/" + id + "/" + token + "/")
        setSocket(s)
    }, []);

    useEffect(() => {
        if (socket == null || quill == null || titleRef == null) return

        const handler = (delta, oldDelta, source) => {
            if (source !== 'user') return
            const title = titleRef.current.value
            socket.send(JSON.stringify({'type': 'update', 'changes': delta, 'title': title}))
        }
        quill.on('text-change', handler)

        return () => {
            quill.off('text-change', handler)
        }
    }, [socket, quill, titleRef]);

    useEffect(() => {
        if (socket == null || quill == null || titleRef == null) return

        socket.onmessage = (e) => {
            const data = JSON.parse(e.data)
            if (data.type == 'updated') {
                if (data.trigger.toString() == token.toString()) return
                quill.updateContents(data.content)
                titleRef.current.value = data.title
            } else if (data.type == 'connected') {
                const json = JSON.parse(data.content)
                quill.setContents(json)
                quill.enable()
                titleRef.current.value = data.title
                setStatusArt(data.status[0])
            }
        }
    }, [socket, quill, titleRef]);

    useEffect(() => {
        if (socket == null || quill == null || titleRef == null) return
        const handler = () => {
            const data = quill.getContents()
            const title = titleRef.current.value
            socket.send(JSON.stringify({'type': 'save', 'changes': data, 'title': title}))
        }
        const interval = setInterval(handler, AUTOSAVE_INTERVAL)

        return () => {
            clearInterval(interval)
        }
    }, [socket, quill], titleRef);

    const wrapperRef = useCallback(
        (wrapper) => {
            if (wrapper == null) return

            wrapper.innerHTML = ""
            const editor = document.createElement('div')
            wrapper.append(editor)
            const q = new Quill(editor, {
                theme: "snow", modules: {
                    imageResize: {parchment: Quill.import('parchment')},
                    toolbar: toolbarOptions
                }
            })
            q.disable()
            q.setText("Loading...")
            setQuill(q)
        },
        [],
    );

    async function sendMarker() {
        const response = sendMarkerApi(id)
        if (response) {
            document.getElementById("marker").remove()
        } else {
            console.log("error")
        }
    }

    return (
        <DashboardWrapper>
            <DashboardNavigation active={"home"}/>
            <DashboardContent>
                <TitleEditor ref={titleRef} type={"text"}/>
                <div id={"container"} ref={wrapperRef}>

                </div>
                {statusArt == "redaction" &&
                    <AdminButton id={"marker"} onClick={sendMarker}>Envoyer à la correction</AdminButton>}
            </DashboardContent>
        </DashboardWrapper>

    );
}

export default Editor__chief;