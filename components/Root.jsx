
class Root extends React.Component {
    state = {
        options: {
            lineNumbers: true,
            lineWrapping: true,
            autofocus: false,
            spellcheck: true,
            fullScreen: false,
            theme: "dracula",
            mode: "javascript",
            value: "function myScript(){\n\treturn 100;\n}\n"
        },
        hideLoad: false
    };
    render() {
        return (
            <>
                <NavBar />
                <ControlBar />
                <CodeBar options={this.state.options} />
                <IOBar>
                    <LoadingBar hidden={this.state.hideLoad} />
                </IOBar>
                <button
                    onClick={() => this.setState({ hideLoad: !this.state.hideLoad })}
                >
                    click me
                </button>
            </>
        );
    }
}
export default Root;  