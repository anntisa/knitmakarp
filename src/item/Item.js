import React from "react";
import * as firebase from "firebase/app";
import "firebase/database";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemId: "",
        };
    }

    componentDidMount() {
        const {itemId} = this.props.match.params;

        const database = firebase.database();
        database.ref('/item-list/'+itemId).on('value', (snapshot) => {
            this.setState({itemId: itemId, details: snapshot.val()});
        });
    }
    render() {

        return (
            <div>
                itemId: {this.state.itemId}
                description: {this.state && this.state.details && this.state.details.description}
            </div>
        );
    }
}

export default Item;
