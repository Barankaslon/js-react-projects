import React, { Component } from 'react';
<<<<<<< HEAD

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator'
=======
import PropTypes from 'prop-types';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
>>>>>>> 21010f9 (finished)

import './random-planet.css';

export default class RandomPlanet extends Component {

<<<<<<< HEAD
  SwapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
  };


  constructor() {
    super();
    this.updatePlanet();
=======
  static defaultProps = {
    updateInterval: 10000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  };

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
>>>>>>> 21010f9 (finished)
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
<<<<<<< HEAD
    })
=======
    });
>>>>>>> 21010f9 (finished)
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };

<<<<<<< HEAD
  updatePlanet () {
    const id = Math.floor(Math.random() * 25) + 2;
    this.SwapiService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
  }

  render() {

    const {planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;


=======
  updatePlanet = () => {
    const id = Math.floor(Math.random()*17) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;

>>>>>>> 21010f9 (finished)
    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
<<<<<<< HEAD

    );
  }
=======
    );
  }

>>>>>>> 21010f9 (finished)
}

const PlanetView = ({ planet }) => {

<<<<<<< HEAD
  const {id, name, population, rotationPeriod, diameter} = planet;

  return ( 
    <React.Fragment>
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
=======
  const { id, name, population,
    rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
           alt="planet" />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
>>>>>>> 21010f9 (finished)
    </React.Fragment>
  );
};