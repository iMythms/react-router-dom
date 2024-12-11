import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails'
import NavBar from './components/NavBar'
import PokemonForm from './components/PokemonForm'
import './App.css'

const initialState = [
	{
		_id: 1,
		name: 'Bulbasaur',
		weight: 69,
		height: 7,
		img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//001.png',
	},
	{
		_id: 2,
		name: 'Ivysaur',
		weight: 130,
		height: 10,
		img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//002.png',
	},
	{
		_id: 3,
		name: 'Venusaur',
		weight: 1000,
		height: 20,
		img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//003.png',
	},
	{
		_id: 4,
		name: 'Charmander',
		weight: 85,
		height: 6,
		img: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png',
	},
	{
		_id: 5,
		name: 'Charmeleon',
		weight: 190,
		height: 11,
		img: 'https://archives.bulbagarden.net/media/upload/thumb/0/05/0005Charmeleon.png/800px-0005Charmeleon.png',
	},
]

const App = () => {
	const [pokemon, setPokemon] = useState(initialState)
	const addPokemon = (newPokemon) => {
		newPokemon._id = Math.floor(Math.random() * 100000)
		setPokemon([...pokemon, newPokemon])
	}
	const deletePokemon = (id) => {
		setPokemon(pokemon.filter((poke) => poke._id !== id))
	}
	return (
		<div>
			<NavBar />
			<section className="container mx-auto my-24 text-white">
				<Routes>
					<Route
						path="/"
						element={<h2 className="text-3xl font-extrabold">Home Page</h2>}
					/>
					<Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
					<Route
						path="/pokemon/new"
						element={<PokemonForm addPokemon={addPokemon} />}
					/>
					<Route
						path="/pokemon/:pokemonId"
						element={<PokemonDetails pokemon={pokemon} />}
					/>
					<Route
						path="*"
						element={
							<p className="text-3xl font-extrabold text-center mb-10">
								Page not found
							</p>
						}
					/>
				</Routes>
			</section>
		</div>
	)
}

export default App
