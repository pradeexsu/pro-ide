const ButtonIcon = ({ iconUrl }) => {
    return (
        <span className={"close-icon float-end"}>
            <img src={iconUrl} />
        </span>
    );
};

export default ButtonIcon;