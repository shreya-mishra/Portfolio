import React from 'react'
 import work from "../Images/work.png"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Work.css"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

 const projects = [
     {
         projectName:1,
         projectTitle:"jsjdsfjsifj",
         description:"fjjgjbg uhynh jhjkgbvuyfvhjbv hjyuguijn lkb gyu7hyoilkjn lk",
         category:"Web App"
     },
          {
         projectName:2,
         projectTitle:"jsjdsfjsifj",
        description:"fjjgjbg uhynh jhjkgbvuyfvhjbv hjyuguijn lkb gyu7hyoilkjn lk",
         category:"Web App"


     },
    {
         projectName:3,
         projectTitle:"jsjdsfjsifj",
         description:"fjjgjbg uhynh jhjkgbvuyfvhjbv hjyuguijn lkb gyu7hyoilkjn lk",
         category:"Web App"


     } ,
    {
         projectName:4,
         projectTitle:"jsjdsfjsifj",
         description:"fjjgjbg uhynh jhjkgbvuyfvhjbv hjyuguijn lkb gyu7hyoilkjn lk",
        category:"Web App"


     }
 ]
const Work = () => {
      const classes = useStyles();

    return (
          <div style={{textAlign:"center",margin:80}}>
        <div style={{height:"190px"}}></div>
        <img src={work} alt="work" />
                    <div style={{height:50}}></div>
<div className="projectCardView" style={{display:"flex",justifyContent:'space-around'}}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    
    </div>
        </div>
    )
}

export default Work
