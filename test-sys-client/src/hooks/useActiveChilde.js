import { useEffect, useState } from "react";

const useActiveChild = (childs) => {
    const pathes = childs.map(item => item.props.to) ;
    const [hasActive, setHasActive] = useState(false);
    const [location] = useState(window.location.pathname)
    useEffect(() => {
        setHasActive(pathes.indexOf(location)!== -1)   
    }, [...childs, ...pathes, setHasActive,window.location.pathname , location] );
    return hasActive;
}
export default useActiveChild;

//popstate
// const onPopstate = (event) => {
//     setLocation(window.location.pathname);
//     console.log('popstate called');
// }
// useEffect(()=>{
//     window.addEventListener('popstate',onPopstate);
//     return () =>{ window.removeEventListener('popstate',onPopstate);}
// },[] );
//end popstate
// function isClassComponent(component) {
//     return (
//         typeof component === 'function' &&
//         !!component.prototype.isReactComponent
//     )
// }

// function isFunctionComponent(component) {
//     return (
//         typeof component === 'function' &&
//         String(component).includes('return React.createElement')
//     )
// }

// function isReactComponent(component) {
//     return (
//         isClassComponent(component) ||
//         isFunctionComponent(component)
//     )
// }

// function isElement(element) {
//     return React.isValidElement(element);
// }

// function isDOMTypeElement(element) {
//     return isElement(element) && typeof element.type === 'string';
// }

// function isCompositeTypeElement(element) {
//     return isElement(element) && typeof element.type === 'function';
// }