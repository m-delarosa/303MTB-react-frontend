import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'

const TrailCard = (props) => {
    return (
        <div className="trail-card">
            <FontAwesomeIcon icon={['far', 'heart']} color="crimson" className="favorite-icon" />
            <img className="trail-card-img"
                src="https://cdn2.apstatic.com/photos/mtb/7015131_smallMed_1554912288.jpg"
                alt="Example Alt" />
            <div className="trail-content">
                <h4 className="trail-card-name">Dirty Bismarck</h4>
            </div>
        </div>
    )
}

export default TrailCard

// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import Card from '@material-ui/core/Card'
// import CardActionArea from '@material-ui/core/CardActionArea'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
// import Button from '@material-ui/core/Button'
// import Typography from '@material-ui/core/Typography'

// const useStyles = makeStyles({
//     root: {
//         width: 1500,
//         height: "45%",
//         margin: 100
//     },
//     media: {
//         width: 1500,
//         height: 200,
//     },
// })

// export default function TrailCard() {
//     const classes = useStyles()

//     return (
//         <Card className={classes.root}>
//             <CardActionArea>
//                 <CardMedia
//                     className={classes.media}
//                     image="https://cdn2.apstatic.com/photos/mtb/7002944_medium_1554403854.jpg"
//                     title="Dirty Bismarck"
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="h2">
//                         Lizard
//           </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//                         across all continents except Antarctica
//           </Typography>
//                 </CardContent>
//             </CardActionArea>
//             <CardActions>
//                 <Button size="small" color="primary">
//                     Share
//         </Button>
//                 <Button size="small" color="primary">
//                     Learn More
//         </Button>
//             </CardActions>
//         </Card>
//     )
// }



