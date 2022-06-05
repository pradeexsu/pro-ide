const Button = ({ iconUrl, text, bgColor, isPrimary }) => {
    return (
        <>
            <button className={isPrimary ? "btn-run" : "btn-fun"}>
                <img src={iconUrl} height="20" />
                {text ? ` ${text}` : ""}
            </button>
        </>
    );
};
export default Button;