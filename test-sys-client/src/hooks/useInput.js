import { useState } from "react";

const useInput = (initialValue = '') => {
    const [value, setValue] = useState(initialValue);
    const valueChangedHandler = (e) => {
        setValue(e.target.value);
    }
    return { value: value, onChange: valueChangedHandler, setValue }
}

export default useInput;