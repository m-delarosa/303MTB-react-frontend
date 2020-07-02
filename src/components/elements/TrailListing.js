import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'


const TrailListing = (props) => {

    const addStatusImage = (status) => {
        if (status === "Bad / Closed") {
            return <FontAwesomeIcon icon="times-circle" color="crimson" size="2x" />
        }
        else if (status === "Minor Issues") {
            return <FontAwesomeIcon icon="exclamation-circle" color="#E1AD01" size="2x" />
        }
        else if (status === "Unknown") {
            return <FontAwesomeIcon icon="question-circle" size="2x" />
        }
        else { return <FontAwesomeIcon icon="check-circle" color="green" size="2x" /> }
    }

    const addDate = (date) => {
        if (date === "1970-01-01 00:00:00")
            return "Report Needed"
        else return moment(date, "YYYYMMDD").fromNow()
    }

    const handlePreview = () => {
        props.showTrailPreview(props.id)
    }

    const handleFavorite = () => {
        props.action(props.trail)
    }

    const handleUpdate = () => {
        props.showTrailUpdateModal(props.id)
    }

    return (
        <tr>
            <td>
                <img
                    className="trail-img"
                    src={props.image}
                    alt="Example"
                    onClick={handlePreview} />
            </td>
            <td className="trail-name">
                <a href="#preview" onClick={handlePreview}>{props.name} </a>
            </td>
            <td id={`${props.id}-status`}>
                {addStatusImage(props.status)}
            </td>
            <td id={`${props.id}-details`} className="condition-details">
                {props.details}
            </td>
            <td>
                {addDate(props.date)}
            </td>
            <td className="trail-actions">
                {props.favoriteTrails.find(trail => props.id === trail.id)
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
            </td>
        </tr >
    )
}

export default TrailListing
