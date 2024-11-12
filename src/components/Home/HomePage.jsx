import { useState } from "react";
import "./app.css";
import { PokemonCardComponent } from "../../components/PokemonCardComponent";
import { PokemonSearchComponent } from "../PokemonSearchComponent";
import { useEffect } from "react";
import background from "../../assets/PokeballBG.png";

export const HomePage = () => {

  const [apiData, setApiData] = useState(null)
  const [apiUrlPage, setApiUrlPage] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextApiUrlPage,setNextApiUrlPage] = useState(null)
  const [prevApiUrlPage,setPrevApiUrlPage] = useState(null)


  useEffect(() => {
    fetch(apiUrlPage).then((response) => {

      response.json().then((data) => {
          console.log(data)
          setApiData(data)
          setNextApiUrlPage(data.next)
          setPrevApiUrlPage(data.previous)
      })
    })
  },[apiUrlPage])

  const PreviousButtonHandler = () => {
    console.log("-")
    setApiUrlPage(prevApiUrlPage)
  }
  const NextButtonHandler = () => {
    console.log("+")
    setApiUrlPage(nextApiUrlPage)
  }

  return (
    <> {/* React.Fragment  o Fragment */}
      <header className="header">
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
        <h1>The RESTful Pokémon API</h1>
        <h2> Serving over 2.5 billion API calls each month!</h2>
        <p>All the Pokémon data you'll ever need in one place,
          easily accessible through a modern free open-source RESTful API.</p>
      </header>
      <div>
        <button onClick={PreviousButtonHandler}>Anterior</button>
        <button onClick={NextButtonHandler}>Siguiente</button>
        <img src={background}/>

      </div>
      <section>
        {apiData != null ? <>{
          apiData.results.map((pokemon, index) => {
            return <PokemonCardComponent key={index} name={pokemon.name} url={pokemon.url} />
          })
        }</> : <p>Loading</p>}
      </section>
      <section>
        <h4>Search Pokemon</h4>
        <PokemonSearchComponent apiInformation={apiData} />
      </section>
    </>
  )
}
