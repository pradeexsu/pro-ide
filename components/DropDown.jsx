const DropDown = ({ arr }) => {
    return (
        <>
            <select className="bg-dark text-light drop-down">
                {Object.keys(arr).map((key) => {
                    return (
                        <option className="drop-down-item" value={key}>
                            {arr[key]}
                        </option>
                    );
                })}
            </select>
        </>
    );
};

export default DropDown;