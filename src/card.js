import React from 'react'
import { Link } from 'react-router-dom'

function card({title,text,footer,path}) {
  return (
    <div>
        <div class="card border-success mb-3" style={{"max-width": "24rem",}}>
  <div class="card-header bg-transparent border-success">{title}</div>
  <div class="card-body text-success">
   
    <p class="card-text">{text}</p>
  </div>
  <div class="card-footer bg-transparent border-success text-center"><Link to={`${path}`}><button className='btn btn-outline-primary '>{footer}</button></Link></div>
</div>
      
    </div>
  )
}

export default card
