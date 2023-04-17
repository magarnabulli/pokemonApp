import {create} from 'zustand';



export const UsePokemon = create((set)=>(
    {
        pokemonData : [],
       setData: (data) => set((state) => state.pokemonData, data)   
    }));
    
    //    async (url) => {
    //         const response = await fetch(url);
    //         const result = await response.json();
    //         set({pokemonData, result});
    //     },
