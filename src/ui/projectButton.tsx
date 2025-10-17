
import React, { useState } from "react";

interface ProjectButtonProps {
    children : React.ReactNode,
    colorFrom : string,
    colorTo : string,
    stateSet : string,
    className : string,
    SetState : (state:string) => void

}

export default function ProjectButton ({children,colorFrom,colorTo,stateSet,SetState,className} : ProjectButtonProps) {
    
    const [selected,SetSelected] = useState(false);
    const [hovered,SetHovered] = useState(false);

    const selectedClass = selected ? `bg-gradient-to-r from-${colorFrom}-600 to-${colorTo}-600` : ''
    const hoveredClass = hovered? `bg-gradient-to-r from-${colorFrom}-600 to-${colorTo}-600` : ''

    return (
        <button 
            className = {`${className} ${selected ? selectedClass : ''} ${hovered ? hoveredClass : ''}`} 
            onClick = {()=>{
                SetSelected(true);
                SetState(stateSet);
            }}
            onMouseEnter={()=>SetHovered(true)}
            onMouseLeave={()=>SetHovered(false)}
            >

        </button>
    )

}