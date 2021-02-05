import PaletteList from './PaletteList';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './seedColors';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import './App.css';
import React, { Component } from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.findPalette = this.findPalette.bind(this);
	}

	findPalette(id) {
		return seedColors.find((palette) => {
			return palette.id === id;
		});
	}
	render() {
		// console.log(generatePalette(seedColors[4]))
		return (
			<Switch>
				<Route exact path="/" render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} />
				<Route
					exact
					path="/palette/:id"
					render={(routeProps) => (
						<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
					)}
				/>
				<Route
					exact
					path="/palette/:paletteId/:colorId"
					render={(routeProps) => (
						<SingleColorPalette
							colorId={routeProps.match.params.colorId}
							palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
						/>
					)}
				/>
			</Switch>
		);
	}
}

export default App;
