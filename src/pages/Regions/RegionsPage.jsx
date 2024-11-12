import { useEffect, useState } from "react";
import "./regions.css";

export const RegionsPage = () => {
    const [regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/region/")
            .then((response) => response.json())
            .then((data) => {
                const regionPromises = data.results.map((region) =>
                    fetch(region.url)
                        .then((response) => response.json())
                        .then((regionData) => ({
                            name: region.name,
                            locations: regionData.locations
                        }))
                );

                Promise.all(regionPromises)
                    .then((detailedRegions) => {
                        setRegions(detailedRegions);
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error("Error fetching regions:", error);
                        setLoading(false);
                    });
            })
            .catch((error) => {
                console.error("Error fetching regions list:", error);
                setLoading(false);
            });
    }, []);

    const PreviousButtonHandler = () => {
        console.log("Previous button clicked");
    };

    const NextButtonHandler = () => {
        console.log("Next button clicked");
    };

    return (
        <> {/* React.Fragment or Fragment shorthand */}
            <header className="header">
                <div className="regions-page">
                    <img className="header-img" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeAPI logo" />
                    <h1>Pokémon Regions</h1>
                </div>
            </header>

            <div className="button-container">
                <button onClick={PreviousButtonHandler}>Anterior</button>
                <button onClick={NextButtonHandler}>Siguiente</button>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="regions-list">
                    {regions.map((region, index) => (
                        <article key={index}>
                            <h2>{region.name}</h2>
                            {region.locations && region.locations.length > 0 ? (
                                <>
                                    <h4>Locations:</h4>
                                    <ul>
                                        {region.locations.map((location, idx) => (
                                            <li key={idx}>{location.name}</li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <p>No locations available</p>
                            )}
                        </article>
                    ))}
                </div>
            )}
        </>
    );
};
