import React from 'react';
import './Column.css';
import CardList from '../../containers/CardList';

const Column = (props) => {
  let filteredCards = filterStatus(props.cardStatus, props.cards);
  return (
    <div className="status-column">
      <div className="status-title {props.cardStatus}">{props.cardStatus}</div>
      <CardList cards={filteredCards} />
    </div>
  );

  function filterStatus(cardStatus, cards) {
    switch (cardStatus) {
      case 'IN QUEUE':
        return cards.filter((card) => parseInt(card.status_id) === 1);
      case 'IN PROGRESS':
        return cards.filter((card) => parseInt(card.status_id) === 2);
      case 'DONE':
        return cards.filter((card) => parseInt(card.status_id) === 3);
      default:
        return cards;
    }
  }
};

export default Column;
