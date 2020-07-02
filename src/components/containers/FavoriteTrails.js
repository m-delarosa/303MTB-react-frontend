import React from 'react'
import TrailListing from '../elements/TrailListing'

const FavoriteTrails = (props) => {
    const { trails, toggleTrailModal, toggleTrailUpdateModal, showTrailPreview, userLocation, favoriteTrails, removeTrailFromFavorites } = props

    const displayFavoriteTrails = trails.map(trail => {
        return <TrailListing
            key={trail.id}
            id={trail.id}
            trail={trail}
            image={trail.imgMedium}
            name={trail.name}
            status={trail.conditionStatus}
            details={trail.conditionDetails}
            date={trail.conditionDate}
            toggleTrailModal={toggleTrailModal}
            toggleTrailUpdateModal={toggleTrailUpdateModal}
            showTrailPreview={showTrailPreview}
            userLocation={userLocation}
            trailLat={trail.latitude}
            trailLong={trail.longitude}
            favoriteTrails={favoriteTrails}
            action={removeTrailFromFavorites} />
    })
    return (
        <>
            {displayFavoriteTrails}
        </>
    )
}

export default FavoriteTrails
