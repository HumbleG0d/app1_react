import './normalize.css'
import './App.css'
import { Testimonio } from './components/Testimonio'
import imgEmma from './images/testimonio-emma.png'
import imgSarah from './images/testimonio-sarah.png'
import imgShawn from './images/testimonio-shawn.png'

function App() {
	return (
		<div className="App">
			<div className='contenedor-principal'>
				<h1 className='title_contenedor'>Esto es lo que dicen nuestros alumnos de freeCodeCamp:</h1>
				<Testimonio 
					name = 'Shawn Wang'
					img = {imgShawn}
					country = 'Singapore'
					cargo = 'Software Engineer'
					company = 'Amazon'
					testimony = {
						<> It&#39;s scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. <strong>freeCodeCamp changed my life</strong>.</>
					} />
          

				<Testimonio 
					name = 'Sarah Chima'
					img = {imgSarah}
					country = 'Nigeria'
					cargo = 'Software Engineer'
					company = 'ChatDesk'
					testimony = {
						<> <strong>freeCodeCamp was the gateway to my career</strong> as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.</>
					}/>
          
				<Testimonio 
					name = 'Emma Bostian'
					img = {imgEmma}
					country = 'Suecia'
					cargo = 'Software Engineer'
					company = 'Spotify'
					testimony = {
						<>I&#39;ve always struggled with learning JavaScript. I ve taken many courses but freeCodeCamp&#39;s course was the one which stuck. Studying JavaScript as well as data structures and algorithms on <strong>freeCodeCamp gave me the skills</strong> and confidence I needed to land my dream job as a software engineer at Spotify</>
					}/>

			</div>
		</div>
	)
}

export default App
