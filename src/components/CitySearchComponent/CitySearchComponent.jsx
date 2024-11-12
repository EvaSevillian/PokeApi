import "./CitySearch.css";

export const CitySearchComponent = (props) => {


    const clickButtonCityNames = () => {
        let allCityNames = props.dataCity.results.map((PokémonCity,index) => {
    
          return PokémonCity.name
        })
    
        const inputPoke = document.getElementById("inputPoke")
    
        const searchCity = allCityNames.filter(CityName => {
          return CityName === inputPoke.value
        })
    
      }

    return(
        <>
        <section className="sectionsearch">
            <h3 className="citys">Search cities</h3>
            <input className="inputcity" id="inputPoke" type="text" placeholder="Search Pokémon"/>
            <button className="buttonciy" type="submit"  onClick={clickButtonCityNames}>Search</button>
        </section>
        </>
    )
}