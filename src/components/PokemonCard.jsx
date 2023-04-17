import {Link} from "react-router-dom"
import {UsePokemon} from "../hooks/UsePokemon"
import { useEffect } from "react";


export default function PokemonCard (props){
    const moves = Array.from(props.moves);
    const stats= Array.from(props.stats);
    console.log(pokemon);
    return <>
    <p>{props.name}</p>
    <img id="sprite" src={props.sprite}></img>
    {moves.map((x)=> {
        return(
            <ul>
                <li>{x.move.name}</li>
                </ul>
            )
    })}
        {stats.map((stat)=> {
        return(
            <ul>
                <li>{stat.base_stat} {stat.stat.name}</li>
                </ul>
            )
    })}
</>
}