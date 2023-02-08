import React from 'react'

import { CChart } from "@coreui/react-chartjs"
import { Link } from 'react-router-dom'

function Pie() {
  return (
    <div className='containe' style={{width:"40vw"}}>
      <CChart
        type="doughnut"
        data={{
          labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
          datasets: [
            {
              backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
              data: [40, 20, 80, 10],
            },
          ],
        }}

      />
      <Link to={"/"}><button className='btn btn-outline-primary '>Back</button></Link>

    </div>
  )
}

export default Pie
