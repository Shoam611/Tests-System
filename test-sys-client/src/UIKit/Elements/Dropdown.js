import { useState, useEffect, useRef } from 'react';
import { Line, Icon } from 'UIKit';
import "./Dropdown.css";

const Dropdown = (props) => {
    //state
    const [isOpen, setIsOpen] = useState(false);
    const wrapTag = useRef();

    //cycle 
    useEffect(() => {
        window.addEventListener('click', closeList);

        return () => {
            //clean up
            window.removeEventListener('click', closeList);
        }
    }, [])

    //handlers
    const closeList = (e) => {
        if (!wrapTag.current) { return; }
        if (wrapTag.current.contains(e.target)) { return; }

        setIsOpen(false);
    }

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
    
    const handleItemSelect = (item) => {
        if (props.onChange) {
            props.onChange(item.id);
            handleToggle();
        }
    }

    //render
    const renderListItems = () => {
        return props.list.map(i => {
            return <li key={i.id} onClick={() => handleItemSelect(i)}>{i.value}</li>
        })
    }

    const renderList = () => {
        if (isOpen) {
            return (
                <ul className="list">
                    {renderListItems()}
                </ul>
            )
        }
        return null;
    }

    const renderTrigger = () => {
        if (props.selected) {
            const item = props.list.find(i => i.id === props.selected);
            if (item) {
                return item.value;
            }
        }
        return 'please select';
    }

    return (
        <div className="Dropdown" ref={wrapTag}>
            <div className="trigger" onClick={handleToggle}>
                <Line justify="between">
                    <div>{renderTrigger()}</div>
                    <Icon i="chevron-down" />
                </Line>
            </div>
            {renderList()}
        </div>
    )
}

export default Dropdown;