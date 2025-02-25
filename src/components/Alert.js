import React from 'react'

export default function Alert(props) {
  const capitalize =(word)=>{
    let lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1)

  }
  return (
    //if the props.type is null then further will not be printed
        props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
        </div>
    
  )
}
