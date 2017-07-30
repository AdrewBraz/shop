import React from 'react'

import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Item from './Item'
import sampleFishes from '../sample-fishes'
import base from '../base'

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            fishes: {},
            order: {}
        }
        this.upDatedFish = this.upDatedFish.bind(this)
    }

    componentWillMount() {
        this.ref = base.syncState(`${ this.props.params.storeId }/fishes`,
        {
            context: this,
            state: 'fishes' 
        })

        const localStorageRef =  localStorage.getItem(`order-${ this.props.params.storeId }`);
        if(localStorageRef){
            this.setState({
                order: JSON.parse(localStorageRef)
            })
        }
    }

    componentWillUnmout() {
        base.removeBinding(this.ref)
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order))
    }

    addItem(item){
        const fishes = { ...this.state.fishes };
        const timestemp = Date.now();
        fishes[`fist-${timestemp}`] = item;
        this.setState({ fishes })
    }

    loadSamples(){
        this.setState({ fishes: sampleFishes})
    }

    addToOrder(key){
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({ order })
    }

    removeFromOrder(key){
        const order = { ...this.state.order };
        delete order[key];
        this.setState({ order })
    }

    upDatedFish(key, fish){
        const fishes = {...this.state.fishes};
        fishes[key] = fish;
        this.setState({fishes});
    }

    removeFish(key){
        const fishes = {...this.state.fishes};
        fishes[key] = null;
        this.setState({fishes}); 
    }

    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline='Freash SeaFood Market'/>
                    <ul className="list-of-fishes">
                        {
                            Object.keys(this.state.fishes)
                                  .map( key => <Item addItem={ this.addToOrder.bind(this)} id={key} key={key} details={ this.state.fishes[key]}/>)
                        }
                    </ul>
                </div>
                <Order fishes={ this.state.fishes }
                       order={ this.state.order}
                       removeFromOrder={ this.removeFromOrder.bind(this)}
                />
                <Inventory 
                  upDatedFish={this.upDatedFish} 
                  fishes={this.state.fishes} 
                  loadSamples={ this.loadSamples.bind(this)} 
                  addItem={ this.addItem.bind(this) }
                  removeFish={ this.removeFish.bind(this)}
                />
            </div>
        )
    }
}