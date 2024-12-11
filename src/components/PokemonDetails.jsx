import { useParams } from 'react-router-dom'

const PokemonDetails = ({ pokemon }) => {
	const { pokemonId } = useParams()
	const onePokemon = pokemon.find((poke) => poke._id == pokemonId)
	if (!onePokemon) {
		return (
			<p className="text-3xl font-extrabold text-center mb-10">
				Pokemon not found!
			</p>
		)
	}
	const handleClick = () => {
		deletePokemon(+pokemonId)
		navigate('/pokemon')
	}
	return (
		<div>
			<h2 className="text-3xl font-extrabold text-center">Pokemon Details</h2>
			<div className="flex justify-center items-center mt-28">
				<dl
					className="w-fit flex flex-col items-center justify-center gap-3 bg-slate-900 rounded-2xl bg-clip-padding bg-opacity-60 border border-gray-100 p-6
                    border-opacity-[8%] transition ease-in-out delay-[50ms] hover:-translate-y-1 hover:scale-[101%] hover:shadow-lg"
				>
					<dt>
						<img src={onePokemon.img} alt="" className="w-64" />
					</dt>
					<dt className="text-xl font-semibold">{onePokemon.name}</dt>
					<dt className="text-lg font-medium">Weight</dt>
					<dd className="text-3xl font-extrabold">{onePokemon.weight}</dd>
					<dt className="text-lg font-medium">Height</dt>
					<dd className="text-3xl font-extrabold">{onePokemon.height}</dd>
					<button
						className="mt-4 w-full text-base font-medium bg-red-600 px-3 py-1 rounded-lg hover:bg-red-900 transition ease-in-out"
						onClick={handleClick}
					>
						Delete
					</button>
				</dl>
			</div>
		</div>
	)
}

export default PokemonDetails
