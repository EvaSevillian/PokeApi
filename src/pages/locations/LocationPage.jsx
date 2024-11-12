import { useEffect, useState } from "react";
import "./locations.css";
import { CitySearchComponent } from "../../components/CitySearchComponent/CitySearchComponent";
import { CardsCityComponent } from "../../components/CardsCityComponent";



export const LocationPage = () => {

const [apiData, setApiData] = useState(null)
const [apiUrlPage, setApiUrlPage] = useState("https://pokeapi.co/api/v2/location/")
const [nextUrlPage, setNextUrlPage] = useState(null)
const [backUrlPage, setBackUrlPage] = useState(null)

    useEffect(() => {
    fetch(apiUrlPage).then((response) => {
        response.json().then((data) => {

        setApiData(data)
        setNextUrlPage(data.next)
        setBackUrlPage(data.previous)
        })
    })
    }, [apiUrlPage])


    const NextPage = () => {
    setApiUrlPage(nextUrlPage)
    }

    const BackPage = () => {
    setApiUrlPage(backUrlPage)
    }

    return (
    <>
    <header className="header">
        <section className="header__section">
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Pokeapi" />
            <h2 className="titledate">La nueva API de Pokémon</h2>
            <p className="date">Descubre todos los datos del mundo Pokémon</p>
        </section>
    </header>
        <section>
        <CitySearchComponent apiData={apiData} />
        </section>
        <section>
            <button onClick={BackPage}>Previous</button>
            <button onClick={NextPage}>Next</button>
        </section>
        <section>
        {apiData != null ? <> {
        apiData.results.map((city, index) => {
            return <CardsCityComponent key={index} name={city.name} url={city.url} />
        })
        } </> : <p>Loading...</p>}
        </section>
    </>
    )
}
