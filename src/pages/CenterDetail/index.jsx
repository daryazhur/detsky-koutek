import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const CenterDetail = () => {
    const { id } = useParams();
    const [center, setCenter] = useState(null); 

    useEffect(() => {
        const fetchCenter = async () => {
            const response = await fetch(`http://localhost:4000/api/centers/${id}`);
            const data = await response.json();
            setCenter(data);
        };
        fetchCenter();
    }, [id]);

    if (!center) return <p>Načítání...</p>;

    return (
        <div>
            <h2>{center.name}</h2>
            <p><strong>Adresa: </strong>{center.address}</p>
            <p><strong>Kapacita: </strong>{center.capacity} osob</p>
            <h3>Otevírací hodiny:</h3>
            <p>{center.open}</p>
            
            <p><strong>Info: </strong>{center.info}</p>
        </div>
    );
};
