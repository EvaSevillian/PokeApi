import { useState } from "react"

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

    if (!isInformationLoaded) { //!false cuando comienza mi componente, es decir, cuando se monta
        fetch(props.url).then((response) => {

            response.json().then((data) => {
                console.log(data)
                // Como aqui uso los set del useState mi componente se actualiza para poder mostrar la nueva informacion
                setPokemonInformation(data)
                setIsInformationLoaded(true)
            })
        })
    }

    console.log(pokemonInformation)
    return <article>
        {isInformationLoaded === true ? <>

            <img src={pokemonInformation.sprites.back_default} />
            <img src={pokemonInformation.sprites.front_default} />
            <h4>{props.name}</h4>
            <a href={props.url}>Más información</a></> : <p>Loading</p>}

    </article>

}