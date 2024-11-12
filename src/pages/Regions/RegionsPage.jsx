import { useEffect, useState } from "react";
import { RegionComponent } from "../../components/RegionsComponent";
import "./regions.css";

export const RegionsPage = () => {
    const [regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    
        fetch("https://pokeapi.co/api/v2/region/")
            .then((response) => response.json())
            .then((data) => {
                setRegions(data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching regions:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="regions-page">
            <h2>Pokémon Regions</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="regions-list">
                    {regions.map((region, index) => (
                        <RegionComponent key={index} name={region.name} url={region.url} />
                    ))}
                </div>
            )}
        </div>
    );
};
