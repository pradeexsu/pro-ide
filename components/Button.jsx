import Image from "next/image";

const Button = ({ iconUrl, text, bgColor, isPrimary,listener }) => {
    return (
        <>
            <button className={isPrimary ? "btn-run" : "btn-fun"} onClick={listener}>
                <img src={iconUrl} height="20" />
                {text ? ` ${text}` : ""}
            </button>
        </>
    );
};

export default Button;