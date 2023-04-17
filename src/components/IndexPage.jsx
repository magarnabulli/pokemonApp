import ResultContainer from './ResultContainer';
import SearchBar from './SearchBar';
import React, {useState} from "react";

export default function IndexPage(){
    const [data, setData] = useState([]);

    const fromChild = (childData) => {
        setData(childData);

    };
    
    return(
        <>
        <section>
            <SearchBar fromChild={fromChild}></SearchBar>
        </section>
        <ResultContainer data={data}></ResultContainer>
        </>
    );
}