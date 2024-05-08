import React from 'react';
import mainBanner from "../../assets/mainBanner.png";
import "./Gallery.scss";
import cards_data from "../logements.json";
import { Link } from "react-router-dom";

export interface CardData {
   id: string
   title: string
    cover: string
    pictures: string[]
    description:string
    host:{
        name:string
        picture:string
     }
     rating:string
     location:string
     equipments:string[]
     tags:string[]

}



export const Gallery: React.FC = () => {
    return (
        <div className="PrincipalPage">
            <div className="mainBanner">
                <img src={mainBanner} alt="Photo de mer" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="cards-container">
              {cards_data.map((cardData:CardData)=>(
                <Link key={cardData.id} to={{pathname:`card/${cardData.id}`}}>
                    <div className="card">
                    <img src={cardData.cover} alt="Cover" />
                    <h2>{cardData.title}</h2>
                    </div>
                </Link>
              ))
                
              }  

            </div>
        </div>
    )
}