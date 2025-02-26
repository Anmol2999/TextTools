import React from 'react'

export default function About(props) {
    // const [setStyle,newStyle]=useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })

    let mystyle={
       color:props.mode==="dark"?"white":"black",
       backgroundColor:props.mode==="dark"?"#182349":"white"
    }
  return (
    <>
    <div className="container "  >
    <div className="accordion" id="accordionExample" style={mystyle}>
    <h2 style={{backgroundColor:props.mode==="dark"?"rgb(15 25 55)":"white"}}> About us</h2>
        <div className="accordion-item">
            
        <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           A
            </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
            
            </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         B
            </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
            
            </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                C
            </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
           
            </div>
        </div>
        </div>
       
  </div>

    </div>
    </>
  )
}
