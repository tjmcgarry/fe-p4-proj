// Ady made searchbar component
import React, { useState } from "react";

function SearchBar(props) {
    const [searchBarContent, setSearchBarContent] = useState("")
    return (
        <>
        <button className="searchButton" onClick={props.display}>Search Books </button>
        {props.displaySearch ?  <input  className="searchBar"
            onChange={
                (synthEvent)=>{
                console.log("synthEvent Value: ", synthEvent.target.value)
                props.invDataFlow(synthEvent.target.value)
                setSearchBarContent(synthEvent.target.value)
                }

            }
            value={searchBarContent}
        
        />
        : <div></div> 
    }
        </>
    )
}

export default SearchBar;