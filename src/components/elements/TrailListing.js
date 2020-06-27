import React from 'react'
import Forbidden from '../images/forbidden.png'
import Checked from '../images/checked.png'
import Warning from '../images/warning.png'
import Help from '../images/help.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TrailListing = (props) => {

    const addStatusImage = (status) => {
        if (status === "Bad / Closed") {
            return <FontAwesomeIcon icon="times-circle" color="crimson" size="lg" />
        }
        else if (status === "Minor Issues") {
            return <FontAwesomeIcon icon="exclamation-circle" color="#E1AD01" size="lg" />
        }
        else if (status === "Unknown") {
            return <FontAwesomeIcon icon="question-circle" size="lg" />
        }
        else { return <FontAwesomeIcon icon="check-circle" color="green" size="lg" /> }
    }

    const addDate = (date) => {
        if (date === "1970-01-01 00:00:00")
            return "Report Needed"
        else return date
    }

    return (
        <tr>
            <td>
                <a href="#preview">{props.name}</a>
            </td>
            <td id={`${props.id}-status`}>
                {addStatusImage(props.status)}
            </td>
            <td id={`${props.id}-details`}>
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
