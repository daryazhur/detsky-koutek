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
            <h2>{center.data.name}</h2>
            <p><strong>Adresa: </strong>{center.data.address}</p>
            <p><strong>Kapacita: </strong>{center.data.capacity} osob</p>
            <h3>Otevírací hodiny:</h3>
            <table>
                <tr>
                    <td>Pondělí: </td>
                    <td>{center.data.open.mon}</td>
                </tr>
                <tr>
                    <td>Úterý: </td>
                    <td>{center.data.open.tue}</td>
                </tr>
                <tr>
                    <td>Středa: </td>
                    <td>{center.data.open.wed}</td>
                </tr>
                <tr>
                    <td>Čtvrtek: </td>
                    <td>{center.data.open.thu}</td>
                </tr>
                <tr>
                    <td>Pátek: </td>
                    <td>{center.data.open.fri}</td>
                </tr>
                <tr>
                    <td>Sobota: </td>
                    <td>{center.data.open.sat || "Zavřeno"}</td>
                </tr>
                <tr>
                    <td>Neděle: </td>
                    <td>{center.data.open.sun || "Zavřeno"}</td>
                </tr>
            </table>
            
            <p><strong>Info: </strong>{center.data.info}</p>
        </div>
    );
};
