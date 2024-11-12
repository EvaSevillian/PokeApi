import { useEffect } from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

/*
props que necesito

name: string que corresponde con el nombre del pokemon
url: string que corresponde con la url de la api para ese pokemon

¿Qué información puede manejar mi componente?

*/
export const PokemonCardComponent = (props) => {

    console.log(props)
    const [pokemonInformation, setPokemonInformation] = useState(null)
    const [isInformationLoaded, setIsInformationLoaded] = useState(false)

    useEffect(() => {

        fetch(props.url).then((response) => {

            response.json().then((data) => {
                console.log(data)

                setPokemonInformation(data)
                setIsInformationLoaded(true)
            })
        })
    },[props])

    console.log(pokemonInformation)
    return <article>
        {isInformationLoaded === true ? <>

            <img src={pokemonInformation.sprites.back_default} />
            <img src={pokemonInformation.sprites.front_default} />
            <h4>{props.name}</h4>
            <NavLink to={`/pokemon/${pokemonInformation.id}`}>Más información</NavLink></> : <p>Loading</p>}

    </article>

}