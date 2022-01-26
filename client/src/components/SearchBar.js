// Ady made searchbar component
import React, { useState } from "react";

function SearchBar(props) {
    const [searchBarContent, setSearchBarContent] = useState("")
    return (
        <input 
            onChange={
                (synthEvent)=>{
                console.log("synthEvent Value: ", synthEvent.target.value)
                props.invDataFlow(synthEvent.target.value)
                setSearchBarContent(synthEvent.target.value)
                }

            }
            value={searchBarContent}

        />
    )
}

export default SearchBar;