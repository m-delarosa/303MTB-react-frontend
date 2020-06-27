import React from 'react'
import { useTrailsFetch } from '../hooks/useTrailsFetch'
import TrailListing from '../elements/TrailListing'
import Iframe from 'react-iframe'

const Trails = () => {
    const [{ trails }, fetchTrails] = useTrailsFetch()

    const showTrails = () => {
        return trails.map(trail => (
            <TrailListing
                key={trail.id}
                id={trail.id}
                name={trail.name}
                status={trail.condition_status}
                details={trail.condition_details}
                date={trail.condition_date}
            />
        ))
    }

    // console.log(trails)
    return (
        <div>
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
                <ul className="center" id="legend">
                    <li id="green">Trails are dry and good to go!</li>
                    <li id="yellow">Variable conditions present.</li>
                    <li id="red">Trails are closed until further notice.</li>
                </ul>
                <table id="trails-table">
                    <tr>
                        <th>Trail</th>
                        <th>Status</th>
                        <th>Details</th>
                        <th>Reported</th>
                        <th>Add</th>
                    </tr>
                    {showTrails()}
                </table>
            </section>
        </div>
    )
}

export default Trails
