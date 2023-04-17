import { UsePokemon } from "../hooks/UsePokemon";
import { useState } from "react";


export default function SearchBar({ fromChild }) {
    const [search, setSearch] = useState("");
    const [fetchResults, setResult] = useState([]);

    const getData = async () =>{
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
            const result = await response.json();
            setResult(result);
            console.log(result);
        }catch(e){
            console.log(e);
        }
    }
    const searchHandle = (event)=>{
        setSearch(event.target.value);
    }
    const searchSubmit = (event) =>{
        event.preventDefault();
        getData();
        fromChild(fetchResults)
    }

    return(
        <div className="Pokemon">
        <section className='searchbar'>
       <form className='inputPokemon' onSubmit={(event) => searchSubmit(event) }>
        <input type="text"  onChange={(event) => searchHandle(event)}
        placeholder='enter pokemon'></input>
       </form>
        </section>
        </div>
    )
}