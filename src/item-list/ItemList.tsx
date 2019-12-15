import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from 'react-bootstrap/Card';
import './ItemList.css';
import * as firebase from "firebase/app";
import "firebase/database";

interface Item {
    id: string;
    description: string;
    image: string;
    name: string;
    total: number;
}

interface ItemListState {
    cards: Item[],
}

class ItemList extends React.Component<{}, ItemListState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            cards: [],
        };
    }

    componentDidMount() {
       const database = firebase.database();
       database.ref('/item-list').once('value', (snapshot) => {
           const dbCards = snapshot.val();
           const cards = Object.keys(dbCards).map((key) => ({
               id:key,
               ...dbCards[key],
           }));
           this.setState({cards});
       });
    }

    render() {
        const cardList = this.state.cards.map((card) => (
             <Card key={card.id}>
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
        ));

        return (
            <CardDeck>
                {cardList}
            </CardDeck>
        );
    }
}

export default ItemList;
