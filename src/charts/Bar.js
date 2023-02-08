import React from 'react'
import {CChart} from "@coreui/react-chartjs"
import { Link } from 'react-router-dom'

function Bar() {
  return (
    <div className='containe'>
   <CChart
  type="bar"
  data={{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
      },
    ],
  }}
  labels="months"
/>
<Link to={"/"}><button className='btn btn-outline-primary '>Back</button></Link>
    </div>
  )
}

export default Bar
