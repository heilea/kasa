import { ReactNode, useRef, useState } from "react";
import "./Collapse.scss";

export interface CollapseProps { 
    title:string; 
    content:ReactNode;

}

export const Collapse:React.FC<CollapseProps> = ({title,content}) => {
        const [isActive, setIsActive] = useState (false)
        const [divHeight, setDivHeight] = useState (5.5)
        const pRef = useRef<HTMLParagraphElement | null>(null)
        

        const toggleCollapse = () => {
            setIsActive(!isActive)
            if (!isActive){
                setDivHeight(((pRef.current?.offsetHeight || 0) /window.innerHeight)*100 + 5.5)
            } else {
                setDivHeight(5.5)
            }
        }



    return ( 
        
        <div className={`serie ${isActive? "active" : ""}`} style={{ height:`${divHeight}vh`}}>   
        <h3>{title}
        <i onClick={toggleCollapse} className="fa-solid fa-chevron-up"></i>
        </h3>
        <p ref={pRef}>{content}</p>
        
        </div>)
       

    
}

