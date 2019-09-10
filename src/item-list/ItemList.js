import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from 'react-bootstrap/Card';
import './ItemList.css';


function ItemList() {
    return (
        <CardDeck>
            <Card>
                <Card.Link href="/item">
                    <Card.Img variant="top" src={require("./images/main-magikarp-hat.jpg")} />
                    <Card.Body>
                        <Card.Title>Magikarp Knitted Hat</Card.Title>
                        <Card.Text>
                            handcrafted and designed by KnitMaKarp.
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer>
                        $50
                    </Card.Footer>
                </Card.Link>
            </Card>

            <Card>
                <Card.Link href="/item">
                    <Card.Img variant="top" src={require("./images/main-shiny-magikarp.jpg")} />
                    <Card.Body>
                        <Card.Title>Shiny Magikarp Knitted Hat</Card.Title>
                        <Card.Text>
                            The shiny version of the Magikarp Knitted Hat
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer variant="bottom">
                        $100
                    </Card.Footer>
                </Card.Link>
            </Card>
            <Card>
                <Card.Link href="/item">
                    <Card.Img variant="top" src={require("./images/main-snorlax.jpg")} />
                    <Card.Body>
                        <Card.Title>Snorlax Hat (EyeMask)</Card.Title>
                        <Card.Text>
                            Hat in the shape of snorlax's head. Can be used as an eyemask.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        $50
                    </Card.Footer>
                </Card.Link>
            </Card>
        </CardDeck>

    )
};

export default ItemList;
