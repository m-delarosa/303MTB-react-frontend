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
        // else return date
        else return moment(date, "YYYYMMDD").fromNow()
    }

    const handlePreview = () => {
        props.showTrailPreview(props.id)
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
            <td>
                <a href="#edit" className="edit-button">Edit</a>
            </td>
        </tr >
    )
}

export default TrailListing
