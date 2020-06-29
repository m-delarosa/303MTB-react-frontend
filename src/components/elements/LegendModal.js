import React from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LegendModal = (props) => {
    const { legendModalIsOpen, toggleLegendModal } = props

    return (
        <Modal
            isOpen={legendModalIsOpen}
            className="legend-modal"
            overlayClassName="modal-overlay"
            onRequestClose={toggleLegendModal}>
            <ul id="legend">
                <li>
                    <FontAwesomeIcon icon="check-circle" color="green" size="2x" className="legend-icons" />
                    Trails are dry and good to go!
                </li>
                <li>
                    <FontAwesomeIcon icon="exclamation-circle" color="#E1AD01" size="2x" className="legend-icons" />
                    Variable conditions present.
                </li>
                <li>
                    <FontAwesomeIcon icon="times-circle" color="crimson" size="2x" className="legend-icons" />
                    Trails are closed until further notice.
                </li>
                <li>
                    <FontAwesomeIcon icon="question-circle" size="2x" className="legend-icons" />
                    Trail report needed!
                </li>
            </ul>
        </Modal >
    )
}

export default LegendModal
