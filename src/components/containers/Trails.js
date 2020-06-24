import React from 'react'

const Trails = () => {
    return (
        <div>
            <h1 class="title">Trail Reports</h1>
            <section id="trail-reports-card">
                {/* <h2>Trail Reports</h2> */}
                <p>
                    There's no way around it. When we ride mud in Colorado, we ruin
                    trails. Most of the trails below are not maintained by municipal
                    staff, instead they rely on volunteers to repair them. One day's worth
                    of damage can often take six months to a year before it is repaired.
                    We do our best to maintain open/closed statuses, but we can’t be
                    everywhere all the time, so please contribute your own intel on the
                    state of trails you’ve just ridden.
                </p>
                <ul class="center" id="legend">
                    <li id="green">Trails are dry and good to go!</li>
                    <li id="yellow">Variable conditions present.</li>
                    <li id="red">Trails are closed until further notice.</li>
                </ul>
                <table id="trails-table">
                    <tr>
                        <th>Trail</th>
                        <th>Status</th>
                        <th>Details</th>
                        <th>Last Reported</th>
                        <th>Add Report</th>
                    </tr>
                </table>
            </section>
        </div>
    )
}

export default Trails
