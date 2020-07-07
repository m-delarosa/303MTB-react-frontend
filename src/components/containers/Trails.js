import React, { useState, useEffect } from 'react'
import { useTrailsFetch } from '../hooks/useTrailsFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FavoriteTrails from './FavoriteTrails'
import TrailListing from '../elements/TrailListing'
import Iframe from 'react-iframe'
import LegendModal from '../elements/LegendModal'
import TrailModal from '../elements/TrailModal'
import TrailCard from '../elements/TrailCard'
import MobileFavorites from './MobileFavorites'

import { StyledSearchBar, StyledSearchBarContent } from '../styles/StyledSearchBar'

const Trails = () => {
    const [{ trails }, fetchTrails] = useTrailsFetch()
    const [legendModalIsOpen, setLegendModalIsOpen] = useState(false)
    const [trailModalIsOpen, setTrailModalIsOpen] = useState(false)
    const [trailId, setTrailId] = useState(0)
    const [userLocation, setUserLocation] = useState({})
    const [favoriteTrails, setFavoriteTrails] = useState([])
    const [filteredTrails, setFilteredTrails] = useState([])
    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        fetch(`https://www.mtbproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=100&maxResults=10&key=${api_key}`)
            .then(response => response.json())
            .then(result => setFilteredTrails(result.trails))
            .then(console.log("Trails Fetched!", filteredTrails))
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    }, [])

    const successCallback = (position) => {
        console.log(position)
        setUserLocation({ lat: position.coords.latitude, long: position.coords.longitude })
    }

    const errorCallback = (error) => {
        console.error(error)
    }

    const addTrailToFavorites = (trail) => {
        const newCollection = filteredTrails.filter(listing => listing.id !== trail.id)
        setFavoriteTrails([...favoriteTrails, trail])
        setFilteredTrails(newCollection)

        // fetch("http://localhost:3000/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(loginBody),
        // })
        //     .then((response) => response.json())
        //     .then((result) => {
        //         // console.log(result.token)
        //         // localStorage.setItem("token", result.token)
        //         handleLoginUserResponse(result, $loginForm)
        //     })

    }

    const removeTrailFromFavorites = (trail) => {
        const newFavorites = favoriteTrails.filter(listing => listing.id !== trail.id)
        setFavoriteTrails(newFavorites)
        setFilteredTrails([...filteredTrails, trail])
    }

    const showTrailListings = () => {
        return filteredTrails.map(trail => (
            <TrailListing
                key={trail.id}
                trail={trail}
                id={trail.id}
                image={trail.imgMedium}
                name={trail.name}
                status={trail.conditionStatus}
                details={trail.conditionDetails}
                date={trail.conditionDate}
                toggleTrailModal={toggleTrailModal}
                showTrailPreview={showTrailPreview}
                userLocation={userLocation}
                trailLat={trail.latitude}
                trailLong={trail.longitude}
                action={addTrailToFavorites}
                favoriteTrails={favoriteTrails}
            />
        ))
    }

    const showTrailCards = () => {
        return filteredTrails.map(trail => (
            <TrailCard
                key={trail.id}
                trail={trail}
                toggleTrailModal={toggleTrailModal}
                showTrailPreview={showTrailPreview}
                userLocation={userLocation}
                action={addTrailToFavorites}
                favoriteTrails={favoriteTrails}
            />
        ))
    }

    const toggleLegendModal = () => {
        legendModalIsOpen
            ? setLegendModalIsOpen(false)
            : setLegendModalIsOpen(true)
    }

    const toggleTrailModal = () => {
        trailModalIsOpen
            ? setTrailModalIsOpen(false)
            : setTrailModalIsOpen(true)
    }

    const showTrailPreview = (id) => {
        setTrailId(id)
        toggleTrailModal()
    }

    const renderTrailModal = () => {
        return (
            trailModalIsOpen
                ? (<TrailModal
                    trailModalIsOpen={trailModalIsOpen}
                    toggleTrailModal={toggleTrailModal}
                    id={trailId}
                />)
                : null
        )
    }

    return (
        <div>
            <LegendModal
                legendModalIsOpen={legendModalIsOpen}
                toggleLegendModal={toggleLegendModal} />
            {renderTrailModal()}
            <h1 className="title">Trail Reports</h1>
            <section className="trails-card">
                {/* <StyledSearchBar>
                    <StyledSearchBarContent>
                        <FontAwesomeIcon icon="search" className="fa-search" name="search" size="2x" />
                        <input type="text" placeholder="Find a Trail" />
                    </StyledSearchBarContent>
                </StyledSearchBar> */}
                <Iframe
                    url="https://www.mtbproject.com/widget/map?favs=0&location=ip&x=-11699455&y=4828592&z=8.5&h=500"
                    className="trail-map"
                    width="100%"
                    height="500px"
                    allow="geolocation"
                    frameBorder="0"
                    scrolling="no"
                />
                <p className="trailcard-blurb">
                    {/* When we ride mud in Colorado, we ruin
                    trails. Most of the trails listed below are not maintained by municipal
                    staff, instead they rely on volunteers to repair them. One day's worth
                    of damage can often take six months to a year before it is repaired. */}
                    We do our best to maintain trail reports, but we can’t be
                    everywhere all the time, so please contribute <FontAwesomeIcon
                        icon={['far', 'edit']}
                        color="#ff8f00"
                        className="" /> your own intel on the
                    state of trails you’ve just ridden.
                </p>
                <table id="trails-table">
                    <tr>
                        <th></th>
                        <th>Trail</th>
                        <th onClick={toggleLegendModal} className="legend-link">Status*</th>
                        <th>Details</th>
                        <th>Last Report</th>
                        <th>Actions</th>
                    </tr>
                    <FavoriteTrails
                        trails={favoriteTrails}
                        toggleTrailModal={toggleTrailModal}
                        showTrailPreview={showTrailPreview}
                        userLocation={userLocation}
                        favoriteTrails={favoriteTrails}
                        removeTrailFromFavorites={removeTrailFromFavorites} />
                    {showTrailListings()}
                </table>
            </section>
            <MobileFavorites
                trails={favoriteTrails}
                toggleTrailModal={toggleTrailModal}
                showTrailPreview={showTrailPreview}
                userLocation={userLocation}
                favoriteTrails={favoriteTrails}
                removeTrailFromFavorites={removeTrailFromFavorites} />
            <section className="trailcard-container">
                {showTrailCards()}
            </section>
        </div>
    )
}

export default Trails
