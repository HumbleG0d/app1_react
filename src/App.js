import './normalize.css'
import './App.css'
import { Testimonio } from './components/Testimonio'

function App() {
	return (
		<div className="App">
			<div className='contenedor-principal'>
				<h1 className='title_contenedor'>Esto es lo que dicen nuestros alumnos de freeCodeCamp:</h1>
				<Testimonio />
			</div>
		</div>
	)
}

export default App
