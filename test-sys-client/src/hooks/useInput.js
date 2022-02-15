import { useState } from "react";

const useInput = () => {
    const [value, setValue] = useState('');    
    const valueChangedHandler = (e) => {
        setValue(e.target.value);
    }
    return{ value:value,onChange:valueChangedHandler,setInputValue:setValue}
}

export default useInput;