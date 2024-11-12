import { useEffect } from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"


export const RegionComponent = ({ name, url }) => {
    const [regionInformation, setRegionInformation] = useState(null);
    const [isInformationLoaded, setIsInformationLoaded] = useState(false);

    useEffect(() => {
        if (url) {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setRegionInformation(data);
                    setIsInformationLoaded(true);
                })
                .catch((error) => {
                    console.error("Error fetching region data:", error);
                });
        }
    }, [url]);

    return (
        <article>
            <h2>{name}</h2>
            {isInformationLoaded && regionInformation ? (
                <>
                    <h4>Locations:</h4>
                    <ul>
                        {regionInformation.locations?.map((location, index) => (
                            <li key={index}>{location.name}</li>
                        )) || <li>No locations available</li>}
                    </ul>
                </>
            ) : (
                <p>Loading region details...</p>
            )}
        </article>
    );
};