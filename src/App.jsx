import React from 'react';
import { CssBaseline, Grid, Container } from '@material-ui/core';
import useStyles from './styles';
import { Footer, Header, Hero, MediaCard } from './components/index';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<Header />
			<main>
				<Hero />
				<Container className={classes.cardGrid} maxWidth="md">
					<Grid container spacing={4}>
						{cards.map((card) => (
							<MediaCard />
						))}
					</Grid>
				</Container>
			</main>
			<Footer />
		</>
	);
};

export default App;
