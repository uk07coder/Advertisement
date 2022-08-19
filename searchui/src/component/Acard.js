import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const Acard = (props) => {
  return (
    <div>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.imageurl}
          alt="photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {props.headline}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.primarytext}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default Acard