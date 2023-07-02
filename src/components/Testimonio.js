import React from 'react'
import '../stylesheets/Testimonio.css'

export function Testimonio(props){
	return(
		<div className='contenedor-testimononio'>
			<img className='imagen-testimonio'
				src={props.img}
				alt = {`Foto de ${props.name}`}/>
			<div className='texto__contenedor-testimonio'>
				<p className='nombre-testimonio'><strong>{props.name}</strong> in {props.country}</p>
				<p className='cargo-testimonio'>{props.cargo} at <strong>{props.company}</strong></p>
				<p className='texto-testimonio'>&#34;{props.testimony}&#34;</p>
			</div>
		</div>
	)  
}