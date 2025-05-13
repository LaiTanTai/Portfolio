import { ReactNode } from "react";
import "./Embed.css"

interface EmbedProps {
    children: ReactNode
}

const Embed = (props: EmbedProps) => {
    return (
        <div className="background">
            <div className="overlay">
                {props.children}            
            </div>
        </div>
    );
}
export default Embed