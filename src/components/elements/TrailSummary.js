import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TrailSummary = (props) => {
    const { trail } = props

    const addStatusImage = (status) => {
        if (trail.conditionStatus === "Bad / Closed") {
            return <FontAwesomeIcon icon="times-circle" color="crimson" size="2x" />
        }
        else if (trail.conditionStatus === "Minor Issues") {
            return <FontAwesomeIcon icon="exclamation-circle" color="#E1AD01" size="2x" />
        }
        else if (trail.conditionStatus === "Unknown") {
            return <FontAwesomeIcon icon="question-circle" size="2x" />
        }
        else { return <FontAwesomeIcon icon="check-circle" color="green" size="2x" /> }
    }

    return (
        <div className="trail-summary">
            <div className="summary-symbol center">
                {addStatusImage()}
            </div>
            <p className="center summary-name">{trail.name}</p>
        </div>
    )
}

export default TrailSummary
