import { useEffect, useState } from "react";;

const useWindow = () => {

const [windowWidth,setWindowWidth] =   useState(window.innerWidth);
const [windowHeight,setWindowHeight] = useState(window.innerHeight);

const onWindowResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    console.log(window.innerWidth);
}

useEffect(()=>{
    window.addEventListener('resize',onWindowResize);
    return () =>
    { 
        window.removeEventListener('resize',onWindowResize);
    }
}
,[]
)
return {
    width:windowWidth,
    height:windowHeight
}
}

export default useWindow;