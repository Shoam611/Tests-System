import {  useState }  from "react";

const useDropdown = (sourceList) =>{
    const [selected,setValueId]=useState();
    const [value,setValue] = useState();
    const onChange = (newValueId)=>{
        setValueId(newValueId);
        const getValue = sourceList.find(item=>item.id===newValueId);

        setValue(getValue ? getValue.value : null );
    }
    return {selected,onChange,value,list:sourceList}
 }
 export default useDropdown;