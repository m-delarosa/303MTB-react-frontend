import React, { useState } from 'react'
import { useTrailsFetch } from '../hooks/useTrailsFetch'
import TrailListing from '../elements/TrailListing'
import Iframe from 'react-iframe'
import LegendModal from '../elements/LegendModal'
import TrailModal from '../elements/TrailModal'
// import TrailCard from '../elements/TrailCard'

const Trails = () => {
    const [{ trails }, fetchTrails] = useTrailsFetch()
    const [legendModalIsOpen, setLegendModalIsOpen] = useState(false)
    const [trailModalIsOpen, setTrailModalIsOpen] = useState(false)
    const [trailId, setTrailId] = useState(0)
    // const $iFrame = document.querySelector(".trail-iframe")

    // console.log($iFrame)

    const showTrails = () => {
        return trails.map(trail => (
            <TrailListing
                key={trail.id}
                id={trail.id}
                image={trail.imgMedium}
                name={trail.name}
                status={trail.conditionStatus}
                details={trail.conditionDetails}
                date={trail.conditionDate}
                toggleTrailModal={toggleTrailModal}
                showTrailPreview={showTrailPreview}
            />
        ))
    }

    const toggleLegendModal = () => {
        legendModalIsOpen
            ? setLegendModalIsOpen(false)
            : setLegendModalIsOpen(true)
    }

    const toggleTrailModal = () => {
        trailModalIsOpen
            ? setTrailModalIsOpen(false)
            : setTrailModalIsOpen(true)
    }

    const showTrailPreview = (id) => {
        setTrailId(id)
        toggleTrailModal()
    }

    const renderTrailModal = () => {
        return (
            trailModalIsOpen
                ? (<TrailModal
                    trailModalIsOpen={trailModalIsOpen}
                    toggleTrailModal={toggleTrailModal}
                    id={trailId}
                />)
                : null
        )
    }

    return (
        <div>
            <LegendModal
                legendModalIsOpen={legendModalIsOpen}
                toggleLegendModal={toggleLegendModal} />
            {renderTrailModal()}
            {/* <TrailCard /> */}
            <h1 className="title">Trail Reports</h1>
            <section className="trails-card">
                <Iframe
                    url="https://www.mtbproject.com/widget/map?favs=0&location=ip&x=-11699455&y=4828592&z=8.5&h=500"
                    className="trail-map"
                    width="100%"
                    height="500px"
                    allow="geolocation"
                    frameBorder="0"
                />
                {/* <iframe style="width:100%; max-width:1200px; height:500px;" frameborder="0" scrolling="no" src="https://www.mtbproject.com/widget/map?favs=1&location=ip&x=-11699455&y=4828592&z=8.5&h=500"></iframe> */}
                <p>
                    When we ride mud in Colorado, we ruin
                    trails. Most of the trails listed below are not maintained by municipal
                    staff, instead they rely on volunteers to repair them. One day's worth
                    of damage can often take six months to a year before it is repaired.
                    We do our best to maintain trail reports, but we can’t be
                    everywhere all the time, so please contribute your own intel on the
                    state of trails you’ve just ridden.
                </p>
                <table id="trails-table">
                    <tr>
                        <th></th>
                        <th>Trail</th>
                        <th onClick={toggleLegendModal} className="legend-link">Status*</th>
                        <th>Details</th>
                        <th>Reported</th>
                        <th>Actions</th>
                    </tr>
                    {showTrails()}
                </table>
            </section>
        </div>
    )
}

export default Trails
