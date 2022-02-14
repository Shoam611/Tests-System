import { useState } from "react"
import {Line,Rows} from 'UIKit'
import Icon from "./Icon"
import './Accordion.css';
const Accordion  = props=> {

const [accordionSelectedId,setAccordionSelectedId]=useState(undefined);
    const accordionChangeHandler =(selectedId) =>{
        if(accordionSelectedId === selectedId)
        setAccordionSelectedId(undefined);
        else
        setAccordionSelectedId(selectedId);
    }


const renderAccordion = ()=>{
    return props.list.map(
        item => <Rows key={item.id} >
                    <div onClick={() =>{accordionChangeHandler(item.id)}} className={accordionSelectedId === item.id ? "header isselected":"header" }>
                        <Line justify="between">
                           <Line justify="start">
                            
                            <Icon i={accordionSelectedId === item.id ? "minus-circle": "plus-circle"} />
                            <h4>{item.title}</h4>
                           </Line>
                            <Icon i={accordionSelectedId === item.id ? "sort-up": "sort-down"}/>
                        </Line>
                    </div>
                    {accordionSelectedId === item.id &&
                    <div  className={accordionSelectedId === item.id ? "content isselected":"content" }>
                        <p>{item.content}</p>
                    </div> 
                    }
        </Rows>
    )
}
return <div className="accordion">
        {renderAccordion()}
    </div>
}   

export default Accordion