import {createRoot} from 'react-dom/client'
import './assets/style/main.scss'
import {App} from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {EditorProvider} from "./context/EditorContext.jsx";
createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <EditorProvider>
    <App/>
        </EditorProvider>
    </BrowserRouter>

)
