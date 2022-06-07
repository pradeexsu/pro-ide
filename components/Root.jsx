import React from "react";
import NavBar from "./NavBar";
import IOBar from "./IOBar";
import CodeBar from "./CodeBar";
import ControlBar from "./ControlBar";
import LoadingBar from "./LoadingBar";
import useStore from "../useStore";
import Head from "next/head";
const Root = () => {

    const isLoading = useStore(state => state.isLoading)
    const setLoading = useStore(state => state.setLoading)

    return (
        <>
        
            <NavBar />
            <ControlBar />
            <CodeBar />
            <IOBar>
                <LoadingBar hidden={isLoading} />
            </IOBar >
            <button
                onClick={() => setLoading(!isLoading)}
            >
                click me
            </button>
        </>
    );
}
export default Root;  