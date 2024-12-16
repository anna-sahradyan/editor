import React from 'react';
import {Editor} from '@monaco-editor/react';
import {LangSelect} from '../langSelect/LangSelect.jsx';
import {CODE_SNIPPETS} from "../../constants/index.js";
import {Box} from "@mui/material";
import {useEditorContext} from "../../context/EditorContext.jsx";

export const EditorContent = () => {
    const {
        language,
        setLanguage,
        value,
        setValue,
        editorRef
    } = useEditorContext()

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const onSelect = (language) => {
        setLanguage(language);
        setValue(CODE_SNIPPETS[language]);
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            width="50%"
            height="100%"
            sx={{
                '@media (max-width: 774px)': {
                    width: '90%',
                }
            }}
        >
            <div>
                <LangSelect language={language} onSelect={onSelect}/>
                <Editor
                    onMount={onMount}
                    language={language}
                    height="75vh"
                    theme="vs-dark"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                />
            </div>

        </Box>
    );
};
