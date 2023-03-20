import * as React from 'react'
import './css/App.css'
import { JobItemm, SearchBar } from './components/index.jsx';

function App() {

  const [jobData, setJobData] = React.useState([]);

  React.useEffect(() => {

      async function getData() {
        const response = await fetch("./src/data/data.json")
        .then((response) => {
        return response.json()
        // let data = response.json()
        // console.log(data); 
        // setJobData(data);
      })
      .catch((error) => {
        console.error(error); 
      })

      setJobData(response); 
    }

    getData(); 
    
  }, [])

  console.log("Job data: ", jobData); 
  

  return (
  //   <div className="App">
  //     <h1 className="text-3xl font-bold underline">Jobchaser</h1>
  //     { <JobList /> }
      
  //  </div>
    

    // <ul>
    //   {jobData.map((data) => <JobItemm data={data} key={data.id}/>)}
    // </ul>
  
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '65%'}}>     
        <SearchBar />
        <ul>
          {jobData.map((data) => <JobItemm data={data} key={data.id}/>)}
        </ul>
      </div>
    </div>
  )
}



//Complete list of jobs
// function JobList() {  

//   const [jobData, setJobData] = React.useState([]);

//   React.useEffect(() => {

//       async function getData() {
//         const response = await fetch("./src/data/data.json")
//         .then((response) => {
//         return response.json()
//         // let data = response.json()
//         // console.log(data); 
//         // setJobData(data);
//       })
//       .catch((error) => {
//         console.error(error); 
//       })

//       setJobData(response); 
//     }

//     getData(); 
    
//   }, [])

//   console.log("Job data: ", jobData); 
//   return(
//     <ul>
//       {jobData.map((data) => <JobItemm data={data} />)}
      
//     </ul>
//   )
// }


//Separate job list items 
// function JobItem(props) {
//   return(
//     <li>
//       {console.log(props.data)}
//       <h2 className="" >{props.data.company}</h2>
//       <p>{props.data.description}</p>
//       <p>{props.data.tags}</p>
//     </li>
//   )
// }

export default App
