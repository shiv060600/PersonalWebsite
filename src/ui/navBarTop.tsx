import { GraduationCap } from "lucide-react"
import HoverLink from "./hoverLink"
import { FolderKanban } from "lucide-react"
import { Info } from "lucide-react"

export default function NavBar(){
    return (
        <div className="fixed top-0 left-0 w-full h-16 bg-black shadow-md z-50">
            <div className="flex items-center justify-between px-6 h-full">
                <div className="text-xl text-white font-bold">
                    Shiv Vinny Bhutani
                </div>
                <div className="flex space-x-5">
                    <HoverLink className="flex items-center space-x-2" to = '/education'>
                        <GraduationCap size={20} color="white"/>
                        <span className="text-sm text-white font-bold">Education</span>
                    </HoverLink>

                    <HoverLink className="flex items-center space-x-2" to = '/projects'>
                        <FolderKanban size={20} color="white"/>
                        <span className="text-sm text-white font-bold">Projects</span>
                    </HoverLink>

                    <HoverLink className="flex items-center space-x-2" to = '/projects'>
                        <Info size={20} color="white"/>
                        <span className="text-sm text-white font-bold">About</span>
                    </HoverLink>
                </div>
            </div>
        </div>
    )
}

