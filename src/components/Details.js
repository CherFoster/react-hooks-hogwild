import React from "react";

function Details({hog}){
    return (
        <div className="ui-eight-wide-column">
            <div>Specialty: {hog.specialty}</div>
            <div>Greased: {hog.greased ? 'True' : 'False'}</div>
            <div>Weight: {hog.weight}</div>
            <div>Hightest Medal Achieved: {hog['highest medal achieved']}</div>
        </div>
    )
}

export default Details;