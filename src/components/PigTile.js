import React, { useState } from "react";
import Details from "./Details";

function PigTile({hog}){
    const [seeDetails, setAllDetails] = useState(false)

    function handleClick(){
        setAllDetails(!seeDetails)
    }

    return(
        <div className="pigTile">
            <h3>{hog.name}</h3>
            <img onClick={handleClick} src={hog.image} alt="hog" />
            { seeDetails ? <Details hog={hog}/> : "" }

        </div>
    )
}

export default PigTile;