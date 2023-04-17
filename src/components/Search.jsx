
// import { useState } from 'react'

//  export function GetPokemon(){
//     const [pokemon, setPokemon] = useState("pikachu");
//   const [pokemonData, setPokemonData] = useState([]);
//   const [pokemonType, setPokemonType] = useState("");
//   const [abilities, setAbilities] = useState([]);
//   const [moves, setMoves] = useState([]);
//   const [heldItems, setHeldItems] = useState([]);
//   const [stats, setStats] = useState([]);

// const getPokemon = async () => {
//   const toArray = [];
//   try{
//     const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
//     const response = await fetch(url);
//     const result = await response.json();
//     console.log(result);
//     toArray.push(result);
//     setPokemonType(result.types[0].type.name);
//     setPokemonData(toArray);
//     setAbilities(result.abilities);
//     setMoves(result.moves);
//     setHeldItems(result.held_items);
//     setStats(result.stats);
//   }catch(e){
//     console.log(e);
//   }
// };
// const handleSubmit =(e) =>{
//   e.preventDefault();
//   getPokemon();
// }
// const handleChange = (e) =>{
//   setPokemon(e.target.value.toLowerCase())
// }
//   return (
//     <div className='App'>

//     <div className="Pokemon">
//       <section className='searchbar'>
//      <form className='inputPokemon' onSubmit={handleSubmit}>
//       <input type="text" onChange={handleChange}
//       placeholder='enter pokemon'></input>
//      </form>

//       </section>
//      {pokemonData.map((data)=> {
//       return (
//         <div className='pokemonCard'>
//           <section className='profile'>
//           <img id="sprite" src={data.sprites["front_default"]}></img>
//           <h5>{data.name.toUpperCase()}</h5>
//           <h5>Type: {pokemonType}</h5>
//           </section>
//           <div className='info'>
//             <ul className='list'>
//               <h4>Abilities</h4>
//             {abilities.map((ab) => {
//               return (
//                 <li>{ab.ability["name"]}</li>
//               )
//             })}           
//             </ul>
//             <ul className='listMoves'>
//             <h4>Moves</h4>
//             {moves.map((moves) => {
//               return (
//                 <li>{moves.move["name"]}</li>
//               )
//             })}           
//             </ul>
//             <ul className='list'>
//             <h4>Held Items</h4>
//             {heldItems.map((items) => {
//               return (
//                 <li>{items.item["name"]}</li>
//               )
//             })}           
//             </ul>
//             <ul className='stats'>
//             <h4>Stats</h4>
//             {stats.map((stat) => {
//               return (
//                 <h5>{stat.stat["name"]}: {stat.base_stat}</h5>
//               )
//             })}           
//             </ul>
//           </div>
//         </div>
//       )
//      })}
//     </div>
//     </div>
//   )
// }

