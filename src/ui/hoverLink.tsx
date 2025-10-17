import { useState } from "react";
import { Link } from "react-router-dom";

interface HoverLinkProps {
    to : string,
    className : string,
    children : React.ReactNode

}
export default function HoverLink({to,className,children} : HoverLinkProps){
    const [isHovered , setIsHovered] = useState(false);
    
    const hoverClasses = isHovered 
        ? "bg-gradient-to-r rounded-lg from-blue-600 to-purple-600" 
        : "";
    
    return (
        <Link 
            className={`${className} ${hoverClasses} rounded-lg transition-colors duration-200 p-2`}
            to={to}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </Link>
    )

}
