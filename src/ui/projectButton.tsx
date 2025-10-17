
import React, { useState } from "react";

interface ProjectButtonProps {
    children : React.ReactNode,
    colorFrom : string,
    colorTo : string,
    stateSet : string,
    className : string,
    SetState : (state:string) => void,
    isSelected? : boolean

}

export default function ProjectButton ({children,colorFrom,colorTo,stateSet,SetState,className, isSelected = false} : ProjectButtonProps) {
    
    const [hovered,SetHovered] = useState(false);

    // Create gradient classes with proper Tailwind classes
    const getGradientClass = () => {
        const gradientMap: { [key: string]: string } = {
            'blue-purple': 'bg-gradient-to-r from-blue-500 to-purple-500',
            'blue-green': 'bg-gradient-to-r from-blue-600 to-green-600',
            'green-blue': 'bg-gradient-to-r from-green-600 to-blue-600',
            'yellow-red': 'bg-gradient-to-r from-yellow-600 to-red-600',
            'purple-pink': 'bg-gradient-to-r from-purple-600 to-pink-600',
            'orange-red': 'bg-gradient-to-r from-orange-600 to-red-600',
        };
        return gradientMap[`${colorFrom}-${colorTo}`] || `bg-gradient-to-r from-${colorFrom}-600 to-${colorTo}-600`;
    };

    const gradientClass = getGradientClass();
    const isActive = isSelected;

    return (
        <button 
            className = {`
                ${className} 
                transition-all duration-300 ease-in-out
                transform hover:scale-105 active:scale-95
                ${isActive 
                    ? `${gradientClass} text-white` 
                    : 'bg-gray-200 text-gray-700'
                }
                ${hovered && !isActive 
                    ? `${gradientClass} text-white shadow-md` 
                    : ''
                }
                
                
            `} 
            onClick = {()=>{
                SetState(stateSet);
            }}
            onMouseEnter={()=>SetHovered(true)}
            onMouseLeave={()=>SetHovered(false)}
            >
            {children}
        </button>
    )

}