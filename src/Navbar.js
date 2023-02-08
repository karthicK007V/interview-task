
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (<div class="container-fluid  ">
  <nav class="navbar navbar-expand-lg bg-body-tertiary navber bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <Link to={"/"} class="navbar-brand " style={{color:"white"}} href="#">CHARTS</Link>
      <ul class="nav justify-content-end">
  <li class="nav-item">
    <button class="btn btn-outline-info btn-sm"><Link to={"/"} class="nav-link active " aria-current="page" href="#">HOME</Link></button>
  </li>
 
 
</ul>
    </div>
  </nav>
</div>
    
  )
}

export default Navbar

