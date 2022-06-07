import useStore from "../useStore";

const DropDown = ({ arr, listener }) => {
    return (
        <>
            <select className="bg-dark text-light drop-down" onChange={(e)=>listener(e.target.value)}>
                {Object.keys(arr).map((key) => {
                    return (
                        <option className="drop-down-item" key={key} value={key} >
                            {arr[key]}
                        </option>
                    );
                })}
            </select>
        </>
    );
};

export default DropDown;