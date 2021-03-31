import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {

	const [loading,setLoading] = useState(true);
	const [tours,setTours] = useState([]);

	const fetchTours = async () => {
 setLoading(true)
		try{
			const response = await fetch(url);
		const data = await response.json();
		console.log(data)
		setLoading(false)
		setTours(data)
		}catch(error){
			setLoading(false);
			console.log(error)
		}
		

	}

	const removeTour = id => {
		const newTours = tours.filter(tour => tour.id !== id);
		setTours(newTours)
	}

	useEffect(() => {
		fetchTours();
	},[])


  return (
		<>

		{loading ? <Loading /> : tours.length > 0 ? <Tours tours={tours} removeTour={removeTour} /> : (
			<main>
				<div className="title">
					<h2> no tours left </h2>
					<button  className="btn" onClick={fetchTours }>refresh</button>
				</div>
			</main>
		)}
		</>
	)
}

export default App
