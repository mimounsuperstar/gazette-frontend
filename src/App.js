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

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<TEMP_Homepage/>}/>
                <Route path={"/admin"} element={<Login/>}/>
                <Route path={"/admin/password/:token"} element={<Login password={true}/>}/>
                <Route path={"/admin/dashboard"} element={<Dashboard/>}/>
                <Route path={"/admin/manage"} element={<Manage/>}/>
                <Route path={"/admin/editions/:id"} element={<Editions/>}/>
                <Route path={"/admin/editor/:id"} element={<Editor/>}/>
                <Route path={"/admin/editor/:id/:token"} element={<Editor__redirect/>}/>
                <Route path={"/article/:id/"} element={<Article/>}/>
                <Route path={"*"} element={<Error404/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
