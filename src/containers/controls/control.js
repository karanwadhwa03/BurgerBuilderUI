import React from 'react'

function Control(props){
    return (
        <div className="container mt-2">
        <div className="row align-items-center">

            <div className="col-8">
                <h5>{props.type}</h5>
            </div>
            <div className="col-2 p-1" >
                <button className="btn btn-secondary" onClick={props.Added}>
                    More
                </button>
            </div>
            <div className="col-2 p-1">
                <button className="btn btn-danger" onClick={props.Subtract}>
                    Less
                </button>
            </div>
        </div>
        </div>
    )


}
export default Control