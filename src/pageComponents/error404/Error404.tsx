import { Link } from "react-router-dom";
import "./Error404.scss";

export const Error404:React.FC = () => {

    return(

        <div className="mainDiv">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={{pathname:"/"}}>Retourner sur la page d’accueil</Link>
        </div>
    )
}