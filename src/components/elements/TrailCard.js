import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TrailUpdateModal from '../elements/TrailUpdateModal'
import moment from 'moment'

const TrailCard = (props) => {
    const { trail, toggleTrailModal, showTrailPreview, userLocation,
        addTrailToFavorites, action, favoriteTrails } = props

    const [trailUpdateModalIsOpen, setTrailUpdateModalIsOpen] = useState(false)
    const [status, setStatus] = useState('')
    const [description, setDescription] = useState('')

    const handlePreview = () => {
        props.showTrailPreview(props.id)
    }

    const handleFavorite = () => {
        action(trail)
    }

    const handleUpdate = () => {
        toggleTrailUpdateModal()
    }

    const toggleTrailUpdateModal = () => {
        trailUpdateModalIsOpen
            ? setTrailUpdateModalIsOpen(false)
            : setTrailUpdateModalIsOpen(true)
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

    const addDate = (date) => {
        if (date === "1970-01-01 00:00:00")
            return "Report Needed"
        else if (description)
            return "just now"
        else return moment(date, "YYYYMMDD").fromNow()
    }

    return (
        <>
            <article className="trails-card">
                <section className="mobile-card-header">
                    <h2 className="trail-name center">
                        <a href="#preview" onClick={handlePreview}>{trail.name} </a>
                    </h2>
                </section>
                <div className="mobile-image-container">
                    <img
                        className="trail-card-img center"
                        src={trail.imgSmall}
                        alt={props.name}
                        onClick={handlePreview} />
                    <div id={`${trail.id}-status`} className="mobile-status-symbol">
                        {status ? addStatusImage(status) : addStatusImage(trail.conditionStatus)}
                    </div>
                </div>
                <section className="trails-card-summary center">
                    <div id={`${props.id}-details`} className="condition-details">
                        <p className="mobile-report">{description ? description : trail.conditionDetails}</p>
                        <p className="mobile-report-date"><b>Last Report:</b> {addDate(trail.conditionDate)}.</p>
                    </div>
                </section>
                <section className="mobile-trail-actions">
                    {favoriteTrails.find(trail => trail.id === trail.id)
                        ? <FontAwesomeIcon icon={['fas', 'heart']} color="#ff8f00" className="trail-listing-action center" onClick={handleFavorite} />
                        : <FontAwesomeIcon icon={['far', 'heart']} color="#ff8f00" className="trail-listing-action center" onClick={handleFavorite} />}
                    <FontAwesomeIcon
                        icon={['far', 'edit']}
                        color="#ff8f00"
                        className="trail-listing-action center trail-edit-icon"
                        onClick={handleUpdate} />
                    <a
                        href={`https://www.google.com/maps/dir/?api=1&origin=${props.userLocation.lat},${props.userLocation.long}&destination=${props.trailLat},${props.trailLong}`}
                        rel="noopener noreferrer"
                        target="_blank">
                        <FontAwesomeIcon icon={['fas', 'directions']} color="#ff8f00" className="trail-listing-action center" />
                    </a>
                </section>
            </article>
        </>
    )
}

export default TrailCard

