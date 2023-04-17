import PokemonCard from "./PokemonCard";

export default function ResultContainer(props){
    const data = Array.from(props);
    return(
        <section className="result_container">
            <div className="search_results_container">
                {data.map((pokemon)=>{
                    return <PokemonCard name={pokemon.name}></PokemonCard>
                })}
            </div>
        </section>
    )
}