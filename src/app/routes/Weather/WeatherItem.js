import React from 'react';
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import WeatherIcon from './WeatherIcon';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flex: '1 0 auto',
    },
    cardMedia: {
        height: 150
    }
  }),
);

const  WeatherItem = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container>
          <Grid item container xs={8}>
        <CardContent className={classes.content}>
          <Typography component="h6">
            {props.place}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.date}
          </Typography>
          <Divider />
          <Typography variant="h4">
              {props.temp}C
          </Typography>
          <Typography variant="caption">
              {props.min}/{props.max}C
          </Typography>
          <Typography variant="subtitle1">
              {props.description}
          </Typography>
          <Divider />
          <Typography variant="body2">
              Wind: {props.wind}mph
          </Typography>
          <Typography variant="body2">
              Humidity: {props.humidity}%
          </Typography>
        </CardContent>
        </Grid>
        <Grid item container xs={4} alignItems="center">
          <WeatherIcon image={props.image} />
      {/* <CardMedia
      className={classes.cardMedia}
        image={props.image}
        title="rainy"
        component="img"
      /> */}
      {/* <i className={'fas fa-bolt'} style={{fontSize:'100px',color:'yellow'}}></i>
      <i className={'zmdi zmdi-hc-fw  zmdi-' + props.icon}/> */}
      </Grid>
      </Grid>
    </Card>
  );
}

export default WeatherItem;