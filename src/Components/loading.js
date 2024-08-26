import React from 'react'
import loading from "./loading.gif"

export default function Loading() {
  return (
    <div className="text-center my-2">
      <img src={loading} alt="Loading..." style={{height:"50px",width:"50px"}}></img>
    </div>
  )
}
