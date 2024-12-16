import React, {createContext, useContext, useRef, useState} from "react";
import {CODE_SNIPPETS} from "../constants/index.js";

const EditorContext = createContext();


export const useEditorContext = () => {
    return useContext(EditorContext);
};

export const EditorProvider = ({children}) => {
    const [value, setValue] = useState(CODE_SNIPPETS['javascript']);
    const [language, setLanguage] = useState('javascript');
    const editorRef = useRef();

    const valueContext = {
        language,
        setLanguage,
        value,
        setValue,
        editorRef
    };

    return (
        <EditorContext.Provider value={valueContext}>
            {children}
        </EditorContext.Provider>
    );
};
