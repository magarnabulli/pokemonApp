import PokemonCard from "./PokemonCard";

export default function ResultContainer(props){

    const data = props.data;
    console.log(data);
    return(
        <section className="result_container">
            <div className="search_results_container">
       
        <PokemonCard name={data.name} stats={data.stats} moves={data.moves}></PokemonCard>
            
            </div>
        </section>
    )
}