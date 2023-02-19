import "bootstrap-icons/font/bootstrap-icons.css"
import Login from "./admin/pages/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "./admin/pages/Dashboard";
import {Editions} from "./admin/pages/Editions";
import {Manage} from "./admin/pages/Manage";
import {Editor} from "./admin/pages/Editor";
import {Editor__redirect} from "./admin/pages/marker/Editor__redirect";
import Error404 from "./admin/pages/Error404";
import Editor__chief from "./admin/pages/chief/Editor__chief";
import Article from "./reader/pages/Article";
import TEMP_Homepage from "./reader/pages/TEMP_Homepage";
import { pdfjs } from 'react-pdf';
import CupideonHome from "./cupideon/pages/CupideonHome";
import CupideonClasse from "./cupideon/pages/CupideonClasse";
import CupideonGender from "./cupideon/pages/CupideonGender";
import CupideonQuestions__redirect from "./cupideon/pages/CupideonQuestions__redirect";
import {GoogleOAuthProvider} from "@react-oauth/google";
import CupideonDone from "./cupideon/pages/CupideonDone";
import Homepage from "./reader/pages/Homepage";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
function App() {
    return (
        <GoogleOAuthProvider clientId="833415929921-j0hqggikienlrfm2f7p4nnq095t7vn4e.apps.googleusercontent.com">
            <BrowserRouter>
                <Routes>
                    <Route path={"/admin"} element={<Login/>}/>
                    <Route path={"/admin/password/:token"} element={<Login password={true}/>}/>
                    <Route path={"/admin/dashboard"} element={<Dashboard/>}/>
                    <Route path={"/admin/manage"} element={<Manage/>}/>
                    <Route path={"/admin/editions/:id"} element={<Editions/>}/>
                    <Route path={"/admin/editor/:id"} element={<Editor/>}/>
                    <Route path={"/admin/editor/:id/:token"} element={<Editor__redirect/>}/>
                    <Route path={"/article/:id/"} element={<Article/>}/>
                    <Route path={"/"} element={<Homepage/>}/>
                </Routes>
            </BrowserRouter>
        </GoogleOAuthProvider>
    );
}

export default App;
