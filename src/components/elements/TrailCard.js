import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TrailUpdateModal from '../elements/TrailUpdateModal'
import moment from 'moment'

const TrailCard = (props) => {
    const { trail, toggleTrailModal, showTrailPreview, userLocation,
        addTrailToFavorites, favoriteTrails } = props

    const [trailUpdateModalIsOpen, setTrailUpdateModalIsOpen] = useState(false)
    const [status, setStatus] = useState('')
    const [description, setDescription] = useState('')

    const handlePreview = () => {
        showTrailPreview(trail.id)
    }

    const addStatusImage = (status) => {
        if (status === "Bad / Closed") {
            return <FontAwesomeIcon icon="times-circle" color="crimson" size="2x" className="mobile-status-icon" />
        }
        else if (status === "Minor Issues") {
            return <FontAwesomeIcon icon="exclamation-circle" color="#E1AD01" size="2x" className="mobile-status-icon" />
        }
        else if (status === "Unknown") {
            return <FontAwesomeIcon icon="question-circle" size="2x" className="mobile-status-icon" />
        }
        else { return <FontAwesomeIcon icon="check-circle" color="green" size="2x" className="mobile-status-icon" /> }
    }

    return (
        <article className="trails-card">
            <section className="mobile-card-header">
                <div id={`${trail.id}-status`} className="condition-status">
                    {status ? addStatusImage(status) : addStatusImage(trail.conditionStatus)}
                </div>
                <h2 className="trail-name center">
                    <a href="#preview" onClick={handlePreview}>{trail.name} </a>
                </h2>
            </section>
            <img
                className="trail-card-img center"
                src={trail.imgSmall}
                alt={props.name}
                onClick={handlePreview} />
            <section className="trails-card-summary center">
                <div id={`${props.id}-details`} className="condition-details">
                    <p>{description ? description : trail.conditionDetails}</p>
                </div>
            </section>
        </article>
    )
}

export default TrailCard
