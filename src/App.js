import { useState, useEffect } from 'react';
import './App.css';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id)=>{
    const newTours = tours.filter((tour)=>tour.id!==id  ) 
    setTours(newTours)
  }
  const fetchTours = async () => {
    setLoading(true);
    try {
      const data = await fetch(url);
      const tour = await data.json();
      setLoading(false);
      setTours(tour);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if(tours.length === 0){
    return <div>
      <h1>No tours left</h1>
    </div>
  }
  return (<Tours removeTour={removeTour} tours={tours}/>);
}

export default App;
