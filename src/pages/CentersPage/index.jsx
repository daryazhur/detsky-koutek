import { useState, useEffect } from "react"
import { Link, Outlet } from "react-router-dom"

export const CentersPage = () => {
    const [centers, setCenters] = useState([])

    useEffect(() => {
        const fetchCenters = async () => {
            const response = await fetch('http://localhost:4000/api/centers')
            const data = await response.json()
            setCenters(data.data)
        }
        fetchCenters()
    }, [])

    return(
        <div>
            <h2>Seznam poboček</h2>
            <ul>
                {centers.map((center) => (
                    <li key={center.id}>
                        <Link to={`/pobocky/${center.id}`}>
                            <h3>{center.name}</h3>
                            <p>{center.address}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    )
}