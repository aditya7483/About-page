import React from 'react'

export default function Boxes1(props) {
    return (
        <>
            <div className="card mycard mx-1 my-1">
                <img src={props.img} className="box-img my-3" alt="..." />
                <div className="card-body d-flex align-items-center">
                    <p className="card-text mytxt">{props.txt}</p>
                </div>
            </div>
        </>
    )
}
