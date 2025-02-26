import React ,{useState}from 'react'

//useState is the type of hook in react
//States make site dynamic

export default function Form(props) {
    const [text,setText]=useState("")
    const handleonchange =(event)=>{
        //console.log("text changed")
        setText(event.target.value)
    }
   const handleonclick1 =()=>{
    let newtext=text.toUpperCase();
        setText(newtext)
   }

   const handleonclick2 =()=>{
    let newtext=text.toLowerCase();
    //text="newtext" wrong way to change state
        setText(newtext)//correct way to change the state
   }
  return (
    <><div style={{color : props.mode==="light"?"black":"white"}}> 
    <h1>{props.heading}</h1>
    <div className=" mb-3"   >
    <textarea className="form-control " value={text} style={{backgroundColor : props.mode==="dark"?"grey":"white",
        color: props.mode==="dark"?"white":"black"}}onChange={handleonchange} id="exampleFormControlTextarea1" rows="6" cols="15" ></textarea>
    <button disabled={text.length===0} type="submit" className="btn btn-primary my-3"  onClick={handleonclick1}>UpperCase</button>
    <button disabled={text.length===0} type="submit" className="btn btn-primary mx-3"  onClick={handleonclick2}>LowerCase</button>
    </div>

    <div>
        <h2 >Text Summary</h2>
        <p>{text.split(" ").filter((element )=>{return element.length!==0}).length} word and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element )=>{return element.length!==0}).length} minutes read</p>

    </div>
</div>
   

   
   
    </>
    
  )
}
