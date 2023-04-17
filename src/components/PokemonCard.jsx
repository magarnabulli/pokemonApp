import {Link} from "react-router-dom"
import {UsePokemon} from "../hooks/UsePokemon"
import { useEffect } from "react";


export default function PokemonCard (props){
   
    const stats = Array.from(props.stats);
    return(     
    <>
    <article className="pokemon_card">
        <Link to="/pokemon" props={props.data}>
    <p>{props.name}</p>
    <img id="sprite" src={props.sprite}></img>
    {stats.map((x)=> {
        if(stats.length != 0){
            
            return(
                <ul>
                    <li>{x.stat.base_value} {x.stat.name}</li>
                    </ul>
                )
        }
        })}
        {stats.map((stat)=> {
        return(
            <ul>
                <li>{stat.base_stat} {stat.stat.name}</li>
                </ul>
            )
        })}

        </Link>
    </article>
    </>
    )
} 