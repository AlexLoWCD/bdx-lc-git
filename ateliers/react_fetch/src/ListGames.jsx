import React, { Component } from 'react';

// const games = [{"id":4,"name":"Broforce","pochette":"https://s3-us-west-2.amazonaws.com/ee-devolver-website-assets/broforce-poster.jpg","description":"Broforce consiste à parcourir des niveaux en grande partie destructibles afin d'atteindre un hélicoptère, le plus souvent après avoir tué un boss ou un diable habillé en homme d'affaires. Le joueur contrôle un personnage sélectionné aléatoirement parmi ceux qui sont disponibles. Au cours du niveau, le joueur peut libérer des prisonniers, ce qui lui permet de ressusciter un joueur allié, ou, le cas échéant, de récupérer une vie et de changer de personnage contrôlé. Chaque personnage se joue de manière particulière avec les variations d'une vitesse de déplacement, d'un saut, d'un tir principal, d'un tir secondaire et d'une attaque de mêlée","image1":"https://www.devolverdigital.com/images/remote/https_s3-us-west-2.amazonaws.com/ee-devolver-website-assets/broforce-screen-6.jpg","image2":"https://www.devolverdigital.com/images/remote/https_s3-us-west-2.amazonaws.com/ee-devolver-website-assets/broforce-screen-1.jpg","is_promo":0,"promo":"https://zupimages.net/up/18/43/bmpd.jpg","theme":"Plates-formes","date":"2003-10-11T12:00:00.000Z","trailer":"https://www.youtube.com/watch?v=_loRDrWCv10"},{"id":6,"name":"Downwell","pochette":"https://s3-us-west-2.amazonaws.com/ee-devolver-website-assets/downwell-poster.jpg","description":"Downwell est centré sur un 'homme curieux' nommé Welltaro, qui se rend une nuit au parc local lorsqu'il décide d'explorer les profondeurs du puits voisin. Sachant que des monstres l'attendaient à l'intérieur, il attache ses chaussures et commence son voyage en abattant ses ennemis pour qu'il poursuive et récupère un trésor.","image1":"https://www.devolverdigital.com/images/remote/https_s3-us-west-2.amazonaws.com/ee-devolver-website-assets/downwell-screen-01.png","image2":"https://www.devolverdigital.com/images/remote/https_s3-us-west-2.amazonaws.com/ee-devolver-website-assets/downwell-screen-02.png","is_promo":0,"promo":"https://zupimages.net/up/18/43/6d82.jpg","theme":"Aventure","date":"2018-10-11T09:57:17.000Z","trailer":"https://www.youtube.com/watch?v=UygovwXlbsU"},{"id":7,"name":"Dropsy","pochette":"https://s3-us-west-2.amazonaws.com/ee-devolver-website-assets/dropsy-poster.jpg","description":"Désireux de laver son honneur après un incendie mortel au cirque familial, Dropsy rencontre durant sa quête des personnages pour le moins singuliers. Pour communiquer avec eux, il n’utilise pas un arbre de dialogues classique mais des icônes représentant ce qui se dit. A travers ces conversations rudimentaires, Dropsy vous embarque dans un voyage en quête de son identité explorant des sujets très profonds tels que l’amour et la rédemption.","image1":"https://www.devolverdigital.com/images/remote/https_s3-us-west-2.amazonaws.com/ee-devolver-website-assets/dropsy-1.jpg","image2":"https://www.devolverdigital.com/images/remote/https_s3-us-west-2.amazonaws.com/ee-devolver-website-assets/dropsy-3.jpg","is_promo":0,"promo":"https://zupimages.net/up/18/43/3le4.jpg","theme":"RPG","date":"2015-10-09T12:00:00.000Z","trailer":"https://www.youtube.com/watch?v=SfRjByXbenA"}];

class ListGames extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
    };
  }

  componentDidMount() {
    fetch('http://www.campus-bordeaux.ovh:3002/joysticks/api/games')
    .then(res => res.json())
    .then(games => {
      this.setState({
        games: games,
      });
    });
  }

  render() { 
    return (
      <ul className="ListGames">
        {
          this.state.games.map(game => (
            <li key={game.id}>
              <img src={game.pochette} width="150" alt="img game" />
              <a href="#">{game.name}</a>
            </li>
          ))
        }
      </ul>
    );
  }
}
 
export default ListGames;