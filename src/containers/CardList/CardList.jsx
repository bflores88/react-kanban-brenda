import React, { Component } from 'react';
import Card from '../Card';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const cardList = this.props.cards.map((card, idx) => {
      return (
        <Card
          key={idx}
          id={card.id}
          title={card.title}
          body={card.body}
          priority={card.priorities.name}
          priorityID={card.priority_id}
          status={card.statuses.name}
          statusID={card.status_id}
          assigned_to={card.assigned_to.first_name + ' ' + card.assigned_to.last_name}
          created_by={card.created_by.first_name + ' ' + card.assigned_to.last_name}
        />
      );
    });

    return <> {cardList} </>;
  }
}

export default CardList;
