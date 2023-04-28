import React, { useState } from "react";
import PigTile from "./PigTile";

function PigContainer({hogs}){
    const [allHogs, setHogs] = useState(hogs)
    const [greasedFilter, setGreased] = useState(false)


    function handleGreasedFilter(e) {
        setGreased(!greasedFilter)
    
        if (e.target.checked) {
          const greasedHogs = allHogs.filter((hog) => {
            return hog.greased === true 
          })
          setHogs(greasedHogs)
        } 
        else 
          setHogs(hogs)
      }

    return (
        <div className="ui-grid-container">
         <div>Sort by: 
            <input name="name" type="checkbox" id="name"/> Name</div>
         <div>Sort by: 
            <input name="weight" type="checkbox" id="weight"/> Weight</div>
         <div>Sort by: 
            <input onClick={handleGreasedFilter} type="checkbox" id="greased"/> Greased
         </div>
         {allHogs.map(hog => <PigTile key={hog.name} hog={hog} />) }
        </div>
    )

}

export default PigContainer;