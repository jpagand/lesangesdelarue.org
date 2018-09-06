import React, { Component } from 'react';
import { Div, Subheadline } from './Typo';
import Content from './Content';
import Images from './Images';

class Partie extends Component {
  render() {
    const {titre, color, texte, images, ...etc} = this.props
    return (
      <Div row {...etc}>
        <Div colXs={12} colSm={6}>
          <Subheadline marginBottom={1} style={{color: color}}>{titre}</Subheadline>
          <Content>{texte}</Content>
        </Div>
        <Div colXs={12} colSm={6} row>
          <Images images={images}/>
        </Div>
      </Div>
    );
  }
}

export default Partie;