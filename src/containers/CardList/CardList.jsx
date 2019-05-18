import React, { Component } from 'react';
import Card from '../Card';
import EditCard from '../EditCard';

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
          assignedID={card.assigned_to.id}
          assigned_to={card.assigned_to.first_name + ' ' + card.assigned_to.last_name}
          createdID={card.created_by.id}
          created_by={card.created_by.first_name + ' ' + card.assigned_to.last_name}
        />
      );
    });

    return <> {cardList} </>;
  }
}

export default CardList;
