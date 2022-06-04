import React from 'react'

export default function Dropdown(props) {
    return (
        <div>
            <div className="accordion accordion-flush" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`heading${props.count}`}>
                        <button className={`accordion-button ${props.count==='One'?'':'collapsed'}`} style={{width:"31rem"}}type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.count}`} aria-expanded={`${props.count==='One'?'true':'false'}`} aria-controls={`collapse${props.count}`}>
                            {props.head}
                        </button>
                    </h2>
                    <div id={`collapse${props.count}`} className={`accordion-collapse collapse ${props.count==='One'?'show':''}`} aria-labelledby={`heading${props.count}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{width:"31rem"}}>
                            {props.text}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
