import { useEffect } from "react"
import { useState } from "react"

export const CardsCityComponent = (props) => {


    const [cityInformation, setPokemonInformation] = useState(null)
    const [isInformationLoaded,setIsInformationLoaded] = useState(false)

    useEffect(() => {
        fetch(props.url).then((response) => {
            response.json().then((data) => {
    
                setPokemonInformation(data)
                setIsInformationLoaded(true)
            })
        })
    },[])


    return( 
        <>
        <article>
        <h4>{props.name}</h4>
        <a href={props.url}>More Information</a>
        </article>
        </>
    )
}