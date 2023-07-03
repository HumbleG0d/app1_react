import './normalize.css'
import './App.css'
import { Testimonio } from './components/Testimonio'
import { PEOPLE } from './people/people'


function App() {
	return (
		<div className="App">
			<div className='contenedor-principal'>
				<h1 className='title_contenedor'>Esto es lo que dicen nuestros alumnos de freeCodeCamp:</h1>
				{
					PEOPLE.map((person , index) => (
						<Testimonio
							key = {index} 
							name = {person.name}
							country = {person.country}
							company = {person.company}
							cargo = {person.cargo}
							img = {person.img}
							testimony = {person.testimony}
						/>
					))
				}        
			</div>
		</div>
	)
}

export default App
