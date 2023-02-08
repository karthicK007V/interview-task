import React from 'react'
import {CChart} from "@coreui/react-chartjs"
import { Link } from 'react-router-dom'

function Line() {
  return (
    <div className='containe'>
      <CChart
  type="line" 
  data={{
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        borderColor: "rgba(220, 220, 0, 1)",
        pointBackgroundColor: "rgba(220, 0, 220, 1)",
        pointBorderColor: "#fff",
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(151, 187, 205, 0.2)",
        borderColor: "rgba(151, 187, 205, 1)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
        data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
      },
      {
        label: "My Third dataset",
        backgroundColor: "black",
        borderColor: "black",
        pointBackgroundColor: "black",
        pointBorderColor: "black",
        data: [40, 22, 15, 55, 5, 49, 12, 30, 40]
      },
    ],
  }}
/>
<Link to={"/"}><button className='btn btn-outline-primary '>Back</button></Link>
    </div>
  )
}

export default Line
