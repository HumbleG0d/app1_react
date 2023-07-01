import React from 'react'
import imgEmma from '../images/testimonio-emma.png'
import '../stylesheets/Testimonio.css'

export function Testimonio(){
	return(
		<div className='contenedor-testimononio'>
			<img className='imagen-testimonio'
				src={imgEmma}
				alt = 'Foto de Emma'/>
			<div className='texto__contenedor-testimonio'>
				<p className='nombre-testimonio'>Emma Bostian en Suecia</p>
				<p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
				<p className='texto-testimonio'>
        &#34;I ve always struggled with learning JavaScript. I ve taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.&#34;
				</p>
			</div>
		</div>
	)  
}