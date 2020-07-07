import React from 'react'
import TrailCard from '../elements/TrailCard'

const MobileFavorites = (props) => {
    const { trails, toggleTrailModal, showTrailPreview, userLocation,
        action, favoriteTrails, removeTrailFromFavorites } = props

    const displayFavoriteTrails = favoriteTrails.map(trail => {
        return <TrailCard
            key={trail.id}
            trail={trail}
            toggleTrailModal={toggleTrailModal}
            showTrailPreview={showTrailPreview}
            userLocation={userLocation}
            action={removeTrailFromFavorites}
            favoriteTrails={favoriteTrails} />
    })

    return (
        <div className="mobile-favorites-container">
            {displayFavoriteTrails}
        </div>
    )
}

export default MobileFavorites
