import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    }
  }

  render() {

    return (
      <div className="card">
        <div className="card-title">{this.props.title}</div>
        <div className="card-priority">Priority:&nbsp;{this.props.priority}</div>
        <div className="card-created-by">Assigned By:&nbsp;{this.props.created_by}</div>

        <div className="card-bottom">
          <div className="edit-delete">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        
          <div className="card-assigned-to">
            {this.props.assigned_to}
          </div>
        </div>
      </div>
    
    )
  }
}

// class Card extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {}
//   }

//   render() {
//     const columns = [];
//     let lastStatus = null;
//     const input = this.state.input;
//     const cardList = this.props.cards
//       .forEach((card, idx) => {
//         if (card.statuses.name !== lastStatus) {
//           columns.push(
//             <StatusTitle StatusTitle={card.statuses.name} />
//           )

//         };
//         columns.push(
//           <Card
//             key={idx}
//             title={card.title}
//             body={card.body}
//             priority={card.priorities.name}
//             status={card.statuses.name}
//             assigned_to={card.assigned_to.first_name + ' ' + card.assigned_to.last_name}
//             created_by={card.created_by.first_name + ' ' + card.assigned_to.last_name} />
//         );
//         lastStatus = card.statuses.name;
//       });
    
//     console.log(columns)

//     return <> {columns} </>;

//   }
// }

// //   render() {
// //     const input = this.state.input;
// //     const cardList = this.props.cards
// //       .map((card, idx) => {
// //         return <Card
// //           key={idx}
// //           title={card.title}
// //           body={card.body}
// //           priority={card.priorities.name}
// //           status={card.statuses.name}
// //           assigned_to={card.assigned_to.first_name}
// //           created_by={card.created_by.first_name} />;
// //     });

// //     return <> {cardList} </>;

// //   }
// // }

export default Card;

