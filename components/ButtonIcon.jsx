import Image from "next/image";

const ButtonIcon = ({ iconUrl, listener }) => {
    return (
        <span className={"close-icon float-end"} onClick={listener}>
            <img src={iconUrl} />
        </span>
    );
};

export default ButtonIcon;