import * as React from 'react'
import './css/App.css'

function App() {

  const [jobData, setJobData] = React.useState("");

  let job = {
    fetchJSON: function () {
      fetch("./src/data/data.json")
        .then((response) => response.json())
        .then((data) => console.log(data))
    },
    handleJSON: function (data) {
      console.log(data)
    }
  }

  
  job.fetchJSON();

  setJobData((prevData) => {
    return job.fetchJSON();
  })


  return (
    <div className="App">
      <h1>Jobchaser</h1>
      <JobList />
      {
        // async function getJobData () {
        //   fetch("./src/data/data.json")
        //   .then((response) => response.json())
        //   .then((data) => {
        //     <JobList data={data}/>
        //   })
        //   .catch((err) => console.error(err))
        // }
      }
    </div>
  )
}

// Importing JSON

// testing

//



//Complete list of jobs
function JobList() {
  //Test
  

  React.useEffect(() => {
    
  })

  return(
    <ul>
      
      <JobItem />
    </ul>
  )
}


//Separate job list items 
function JobItem() {
  return(
    <li></li>
  )
}

export default App
