import React from "react";
import Head from "next/head";
import useStore from "../useStore";

import { oneDark } from '@codemirror/theme-one-dark';
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';

class CodeBar extends React.Component {

    render() {
        const theme = useStore.getState().theme
        const mode = useStore.getState().mode
        const code = useStore.getState().code

        const options = {
            lineNumbers: true,
            lineWrapping: true,
            autofocus: true,
            spellcheck: false,
            fullScreen: false,
            value: code,
            theme: theme,
            mode: mode
        };

        return (
            <>
                <Head>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
                </Head>

                <CodeMirror
                    value={code}
                    height="80vh"
                    theme={oneDark}
                    extensions={[javascript({ jsx: true })]}
                />
            </>
        );
    }
}
export default CodeBar;  