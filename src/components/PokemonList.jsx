import React from 'react'
import { Link } from 'react-router-dom'

const PokemonList = (props) => {
	return (
		<div className="">
			<h2 className="text-3xl font-extrabold mb-10">Pokemon</h2>
			<div className="flex gap-8 items-center justify-between">
				{props.pokemon.map((currentPokemon) => (
					<div
						key={currentPokemon.name}
						className="w-full flex flex-col gap-1 bg-slate-900 p-3 rounded-2xl bg-clip-padding bg-opacity-60 border border-gray-100 
											border-opacity-[8%] transition ease-in-out delay-[50ms] hover:-translate-y-1 hover:scale-[102%] hover:shadow-lg"
					>
						<Link to={`/pokemon/${currentPokemon._id}`} className="">
							<div className="flex flex-col items-center justify-center gap-4 p-6">
								<img src={currentPokemon.img} alt="" className="w-32" />
								<h2 className="text-xl font-semibold">{currentPokemon.name}</h2>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default PokemonList
