import React from "react";
import * as firebase from "firebase/app";
import "firebase/database";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <div>
                HIII IM AN ITEM!!!!!
            </div>
        );
    }
}

export default Item;
