import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PokemonDetail.css";

export const PokemonDetailPage = () => {
    const { id } = useParams()
    const [pokemonInformation, setPokemonInformation] = useState(null)
    const [isInformationLoaded, setIsInformationLoaded] = useState(false)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
            response.json().then((data) => {
                console.log(data)
                setPokemonInformation(data)
                setIsInformationLoaded(true)
            })
        })
    }, [])

    return (
        <article>
            {isInformationLoaded === true ? (
                <>
                    <h4>{pokemonInformation.name}</h4>
                    <div className="pokemon-sprites">
                        <img src={pokemonInformation.sprites.back_default} alt="Back sprite" />
                        <img src={pokemonInformation.sprites.front_default} alt="Front sprite" />
                    </div>
                </>
            ) : (
                <p className="loading">Loading...</p>
            )}
        </article>
    )
}
