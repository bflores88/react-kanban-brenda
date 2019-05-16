import React from 'react';
import Card from '../../containers/Card';

const Column = (props) => {

  const cards = props.cards.map((card, idx) => {
    return (
      <Card
        id={idx}
        title={card.title}
        body={card.body}
        priority={card.priorities.name}
        priorityID={card.priority_id}
        status={card.statuses.name}
        statusID={card.status_id}
        assigned_to={card.assigned_to.first_name + ' ' + card.assigned_to.last_name}
        created_by={card.created_by.first_name + ' ' + card.assigned_to.last_name}
      />
    )
  })

  return (
    <div className="status-column">
      <h3 className="status">{props.status}</h3>
      {cards}
    </div>
  )
  
};

export default Column;