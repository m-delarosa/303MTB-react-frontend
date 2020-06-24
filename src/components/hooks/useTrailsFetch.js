import { useState, useEffect } from 'react'

export const useTrailsFetch = () => {
    const [trails, setTrails] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchTrails = async endpoint => {
        setError(false)
        setLoading(true)

        try {
            const result = await (await fetch(endpoint)).json()
            setTrails(result)
        } catch (error) {
            setError(true)
            console.log("There has been an error with this fetch.")
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchTrails('http://localhost:3000/trails')
    }, [])

    return [{ trails }, fetchTrails]
}