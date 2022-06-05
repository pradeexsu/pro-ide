class CodeBar extends React.Component {
    componentDidMount() {
        var codeArea = document.getElementById("code");
        const myCodeMirror = CodeMirror.fromTextArea(codeArea, this.props.options);
        myCodeMirror.setValue(this.props.options.value);
        myCodeMirror.setSize(null, "80vh");
    }

    render() {
        return (
            <>
                <textarea id="code" hidden />
            </>
        );
    }
}
export default CodeBar;  