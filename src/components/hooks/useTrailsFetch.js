import { useState, useEffect } from 'react'

export const useTrailsFetch = () => {
    const [trails, setTrails] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const api_key = process.env.REACT_APP_API_KEY

    const fetchTrails = async endpoint => {
        setError(false)
        setLoading(true)

        try {
            const result = await (await fetch(endpoint)).json()
            console.log(result)
            setTrails(result.trails)
        } catch (error) {
            setError(true)
            console.log("There has been an error with this fetch.")
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchTrails(`https://www.mtbproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=100&maxResults=50&key=${api_key}`)
    }, [])

    return [{ trails }, fetchTrails]
}