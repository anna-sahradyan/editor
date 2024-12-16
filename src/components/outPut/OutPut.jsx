import React, {useState} from 'react';
import {Box, CircularProgress, Typography} from "@mui/material";
import style from './outPut.module.scss';
import {useEditorContext} from "../../context/EditorContext.jsx";
import {executeCode} from "../api/index.js";
import toast from "react-hot-toast";
import LoadingButton from '@mui/lab/LoadingButton';

export const OutPut = () => {
    const {language, editorRef} = useEditorContext();
    const [output, setOutput] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const runCode = async () => {
        const sourceCode = editorRef.current ? editorRef.current.getValue() : '';
        if (!sourceCode) return;

        try {
            setLoading(true);
            const res = await executeCode(language, sourceCode, true);
            if (res && res.run && res.run.output) {
                setOutput(res.run.output.split("\n"));
                setIsError(res.run.code !== 0);
            } else {
                toast.error('No output returned from server');
            }
        } catch (err) {
            toast.error(err.message || 'Unable to run code');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className={style.wrapper}>
            <LoadingButton
                loading={loading}
                variant="outlined"
                loadingIndicator={<CircularProgress size={16}/>}
                onClick={runCode}
                disabled={loading}
            >
                {loading ? 'Running...' : 'Run Code'}
            </LoadingButton>

            <Box
                display="flex"
                flexDirection="column"
                height={'70%'}
                minHeight="425px"
                boxShadow="var(--shadow-01)"
                padding={'5px 0px 0px 10px'}
                color={isError ? 'var(--brown-300)' : 'var(--blue-200)'}
                bgcolor={isError ? "rgba(255, 0, 0, 0.1)" : "inherit"}

            >
                {output && output.length > 0
                    ? output.map((line, index) => <Typography key={index}>{line}</Typography>)
                    : 'Click "Run Code" to see the output here'}
            </Box>
        </div>
    );
};

