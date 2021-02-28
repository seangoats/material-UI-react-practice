import React from 'react';
import useStyles from '../styles';
import { Container, Typography, Grid, Button } from '@material-ui/core';

const Hero = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Container maxWidth="sm">
				<Typography align="center" color="textPrimary" gutterBottom variant="h2">
					Photo Album
				</Typography>
				<Typography variant="h5" align="center" color="textSecondary" paragraph>
					This is a photo album that contains photos from all over the world, using APIs to get the photos.
				</Typography>
				<div className={classes.buttons}>
					<Grid container spacing={2} justify="center">
						<Grid item>
							<Button variant="contained" color="primary">
								See my photos
							</Button>
						</Grid>
						<Grid item>
							<Button variant="outline" color="secondary">
								Secondary Action
							</Button>
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
	);
};

export default Hero;
