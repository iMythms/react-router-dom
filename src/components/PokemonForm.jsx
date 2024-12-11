import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
	name: '',
	weight: '',
	height: '',
}

const PokemonForm = ({ addPokemon }) => {
	const [formData, setFormData] = useState(initialState)
	const navigate = useNavigate()
	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		// update the pokemon state
		addPokemon(formData)
		setFormData(initialState)
		// navigate to /pokemon
		navigate('/pokemon')
	}

	return (
		<main>
			<h2>New Pokemon</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
				/>
				<label htmlFor="weight">Weight:</label>
				<input
					type="number"
					id="weight"
					name="weight"
					value={formData.weight}
					onChange={handleChange}
				/>
				<label htmlFor="height">Height:</label>
				<input
					type="number"
					id="height"
					name="height"
					value={formData.height}
					onChange={handleChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</main>
	)
}

export default PokemonForm
