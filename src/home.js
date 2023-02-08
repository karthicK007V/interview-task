import React from 'react'
import Card from "./card"
import Footer from './Footer'

function home() {
  return (
    <>

        <div className='homepage'>
             <Card 
             title="Line Chart"
             text="A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets. "
             footer="View Chart"
             path="/line"
             
             />
        <Card 
          title="Bar Chart"
          text="A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison.  "
          footer="View Chart"
          path="/Bar"
        />

       
        <Card
          title="Pie Chart"
          text="Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional. "
          footer="View Chart"
          path="/pie"/>

        </div>
        <div className='homepage'>
             <Card 
               title="Polar Chart"
               text="Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value."
               footer="View Chart"
               path="/Polar"/>
        <Card
          title="Rader Chart"
          text="A radar chart is a way of showing multiple data points and the variation between them. They are often useful for comparing the points of two or more different data sets. "
          footer="View Chart"
          path="/Rader"/>
       
        <Card
          title="Bubble Chart"
          text="A bubble chart is used to display tdetermined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented. "
          footer="View Chart"
          path="/Bubble"/>

        </div>
        <Footer/>
       
        
      
    </>
  )
}

export default home
