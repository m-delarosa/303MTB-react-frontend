import React, { useEffect, useState } from 'react'
import { useTrailsFetch } from '../hooks/useTrailsFetch'
import TrailSummary from '../elements/TrailSummary'

const Home = () => {
    const [{ trails }, fetchTrails] = useTrailsFetch()
    // const [trails, setTrails] = useState([])
    // const api_key = process.env.REACT_APP_API_KEY

    // useEffect(() => {
    //     // fetch(`https://www.mtbproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=100&maxResults=10&key=4790190-4582a5581cccc3d3274321dca72ea4b1`)
    //     //     .then(response => response.json())
    //     //     .then(result => setTrails(result.trails))
    //     //     .then(console.log("Trails Fetched!", trails))

    // }, [])
    console.log(trails)
    const displaySummary = () => {
        return trails.slice(0, 11).map(trail => (
            < TrailSummary trail={trail} />
        ))
    }

    return (
        <div>
            <h1 className="title">News</h1>
            <div className="home-container">
                <div className="trails-container">
                    <section className="trail-summary-card">
                        <h2 className="article-title summary-title center">Trails Near You</h2>
                        {displaySummary()}
                    </section>
                </div>
                <div className="news-container">
                    <article className="article-card">
                        <h2 className="article-title">Trestle Bike Park Announces June 27th Opening Date</h2>
                        <address>By <a className="link">Trestle Bike Park</a>, June 20th, 2020</address>
                        <img
                            className="news-image"
                            alt="rider manualing down backside of jump"
                            src="https://ep1.pinkbike.org/p5pb18814293/p5pb18814293.jpg"></img>
                        <p className="news-text">
                            Trestle Bike Park will open June 27th!
                            <br /><br />
                            Bike park operations will be 7 days a week, 10am to 5pm. We are working hard to adjust operating procedures to provide you with a safer experience, and we will share details as we finalize them.
                            <br /><br />
                            Riders will be able to snag a season pass within the next week at TrestleBikePark.com. Passes will be available ONLINE ONLY and must be purchased 24 HOURS IN ADVANCE
                            <br /><br />
                            Bike rentals and lessons will be offered, and must also be booked 24 hours in advance.
                            <br /><br />
                            More specifics on operations, lift and trail info coming soon.
                            We can say, Mother Nature has been very good to us with warm weather, wind, and mild night temps. As a result, we are expecting to have a significant amount of the bike park running on opening day. Things are looking really good out there and every day the meltout accelerates.
                            <br /><br />
                            We can't wait for wheels on dirt! <b>#TrestleBikePark #RideYourDamnBike</b>
                        </p>
                    </article>
                    <article className="article-card">
                        <h2 className="article-title">Jeffco Open Space Completes Draft of Trails Plan</h2>
                        <address>By <a className="link">Jefferson Coounty Open Space</a>, June 18th, 2020</address>
                        <img
                            className="news-image"
                            alt="picturesque JeffCo Trail"
                            src="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/106184749_10158395615408077_4460779978035833081_o.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=fDXiWhWyPycAX_1uIhK&_nc_ht=scontent.fapa1-2.fna&oh=1eca633e730076e4dd47b160c350b440&oe=5F28F219"></img>
                        <p className="news-text">
                            Jeffco Open Space (JCOS) has completed a draft of the county-wide Jeffco Trails Plan envisioning a healthier, engaged community connected by trails. This draft is a result of a collaborative effort among JCOS, local, state and federal agencies, park and recreation districts, and non-profit partners to identify trail opportunities and implementation strategies that increase safety, access, and connectivity of Jeffco residents to outdoor recreation opportunities.
                        <br /><br />
                        Please review the Draft Jeffco Trails Plan and the Draft Jeffco Trails Plan Implementation Resources documents. Public comments associated with the draft plan can be sent to JTP@jeffco.us between July 1 - July 30.
                        <br /><br />
                            <a className="link" href="https://www.jeffco.us/1585/Plans-Projects ">https://www.jeffco.us/1585/Plans-Projects </a>
                        </p>
                    </article>
                </div>
                <div className="weather-container">
                    <section className="weather-card">
                        <h2 className="article-title center weather-header">Weather</h2>
                        <a
                            className="weatherwidget-io"
                            href="https://forecast7.com/en/39d69n105d10/80232/?unit=us"
                            data-label_1="DENVER"
                            data-font="Roboto"
                            data-theme="pure"
                            data-basecolor="#fafafa"
                            data-textcolor="#303030" >
                            DENVER
                        </a>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home
