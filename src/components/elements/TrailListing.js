import React from 'react'
import Forbidden from '../images/forbidden.png'
import Checked from '../images/checked.png'
import Warning from '../images/warning.png'
import Help from '../images/help.png'

const TrailListing = (props) => {

    const addStatusImage = (status) => {
        if (status === "Bad / Closed") {
            return <img src={Forbidden} alt="Closed. Do not ride." />
        }
        else if (status === "Minor Issues") {
            return <img src={Warning} alt="Caution, variable conditions present." />
        }
        else if (status === "Unknown") {
            return <img src={Help} alt="Condition unknown, please report trail condition." />
        }
        else { return < img src={Checked} alt="Green, trail is good to ride." /> }
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
