import { useCallback, useState } from "react";
import "./styles.css";

function debounceFn(func, timeout = 3000) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

const useDebounceHook = (inputValue) => {
    const [debonunce, setDebounce] = useState(inputValue);
    const debFun = useCallback(
        debounceFn((value) => {
            setDebounce(value);
        }), []);
    debFun(inputValue);
    return { debonunce };
};

export default function Childdir() {
    const [value, setValue] = useState("");
    const { debonunce } = useDebounceHook(value);
    const handleChange = (e) => {
        const value = e.target.value;
        setValue(value);
    };

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <p>{debonunce}</p>
            <input type="text" value={value} onChange={handleChange} />
        </div>
    );
}
