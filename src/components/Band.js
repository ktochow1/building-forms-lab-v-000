import React from 'react'

const Band = (props) => {

   

    // function returnBand(props){
    //     props.bands.map((band) => {return  <li>{band}</li> })
    // }
    return(
        <div>
            {props.bands.map((band) => <li key={props.length}>{band.name}</li>)}
        </div>
    )
}

export default Band