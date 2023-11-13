import { createBrowserRouter } from "react-router-dom";
import AllProblems from "../components/AllProblems";
import CodeEditor from "../components/CodeEditor";

export default createBrowserRouter([
     {
        path: "/",
        element: <AllProblems/>
     },

     {
        path: "/problems/:problemName",
        element: <CodeEditor/>
     }
])