import React from 'react';
import '../../character-cards.css';
import { Character } from '../fma-data.ts';

type CardProps = {
  character: Character;
};

class CharacterCards extends React.Component<CardProps> {
  render() {
    const { name, imageUrl, background, nickName } = this.props.character;

    return (
      <div className="card">
        <div className="card-titles">
          <h3>{name}</h3>
          <h4>{nickName}</h4>
        </div>
        <img src={imageUrl} alt={name} />
        <p>{background}</p>
      </div>
    );
  }
}

export default CharacterCards;
