import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                id: "1",
                title: "Thor",
                image : "./img/image1.jpg",
                description: "Thor Infinity war bobble head",
                price: 19.99,
                count: 1
            },
           {
                id: "2",
                title: "Groot",
                image : "./img/image2.jpg",
                description: "Groot Guardian of the galaxy bobble head",
                price: 19.99,
                count: 1
            },
            {
                id: "3",
                title: "Iron Man",
                image : "./img/image3.jpg",
                description: "TIron man The Avenger bobble head",
                price: 19.99,
                count: 1
            },
            {
                id: "4",
                title: "Hulk",
                image : "./img/image4.jpg",
                description: "Hulk smash bobble head",
                price: 19.99,
                count: 1
            },
            {
                id: "5",
                title: "Captain America",
                image : "./img/image5.jpg",
                description: "Captain America bearded bobble head",
                price: 19.99,
                count: 1
            },
            {
                id: "6",
                title: "Loki",
                image : "./img/image6.jpg",
                description: "Loki the manipulator bobble head",
                price: 19.99,
                count: 1
            }
        ],
        cart: [],
        total: 0
        
    };

    render() {
        const {products} = this.state;

        return (
            <DataContext.Provider value={{products}}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

