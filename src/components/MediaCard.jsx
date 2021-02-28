import React from 'react';
import useStyles from '../styles';
import { Grid, Card, CardMedia, CardContent, CardActions, Button, Typography } from '@material-ui/core';

//Destructure props into card
const MediaCard = ({ card }) => {
	const classes = useStyles();
	return (
		<Grid item key={card} xs={12} sm={6} md={4}>
			<Card className={classes.card}>
				<CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image title" />
				<CardContent className={classes.cardContent}>
					<Typography gutterBottom variant="h5">
						Heading
					</Typography>
					<Typography>This is a card you can use to describe the content</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" color="primary">
						View
					</Button>
					<Button size="small" color="primary">
						Edit
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default MediaCard;
