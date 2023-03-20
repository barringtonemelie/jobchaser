import * as React from 'react'
import { JobItemm, SearchBar } from './components/index.jsx';

function App() {

  const [jobData, setJobData] = React.useState([]);

  React.useEffect(() => {

      async function getData() {
        const response = await fetch("./src/data/data.json")
        .then((response) => {
        return response.json()
      })
      .catch((error) => {
        console.error(error); 
      })

      setJobData(response); 
    }

    getData(); 
    
  }, [])

  // console.log("Job data: ", jobData); 
  
  return (

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

export default App
