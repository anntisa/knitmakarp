import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from 'react-bootstrap/Card';
import './ItemList.css';
import * as firebase from "firebase/app";
import "firebase/database";

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: {},
        }
    }

    componentDidMount() {
       const database = firebase.database();
       database.ref('/item-list').once('value', (snapshot) => {
           this.setState({cards: snapshot.val()});
       });
    }

    render() {
        let cardList = [];
        for (let key in this.state.cards) {
            const card = this.state.cards[key];

            cardList.push(
                <Card key={key}>
                    <Card.Link href="/item">
                        <Card.Img variant="top" src={require("./images/"+card.image)} />
                        <Card.Body>
                            <Card.Title>{card.name}</Card.Title>
                            <Card.Text>
                                {card.description}
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer>
                            ${card.total}
                        </Card.Footer>
                    </Card.Link>
                </Card>
            );
        }

        return (
            <CardDeck>
                {cardList}
            </CardDeck>
        );
    }
}

export default ItemList;
