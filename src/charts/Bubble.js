import React from 'react'
import {CChart} from "@coreui/react-chartjs"
import { Link } from 'react-router-dom'

function bobble() {
  return (
    <div className='containe'>
<CChart
  type="bubble"
  data={{
    datasets: [{
      label: 'First Dataset',
      data: [{
        x: 20,
        y: 30,
        r: 15
      }, {
        x: 40,
        y: 10,
        r: 10
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }]
  }}
/>
<Link to={"/"}><button className='btn btn-outline-primary '>Back</button></Link>
    </div>
  )
}

export default bobble
