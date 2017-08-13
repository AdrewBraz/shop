import React from 'react'

import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Item from './Item'

import fishes from '../sample-fishes'
import beer from '../sample-beer'
import meat from '../sample-meat'


import menuStore from '../store/MenuStore.js'
import * as MenuActions from '../Actions/MenuActions'

import orderStore from '../store/OrderStore'
import * as OrderActions from '../Actions/OrderActions'

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menu: menuStore.getList(this.setMenu()),
            order: orderStore.getList(),
        }
    }

    componentDidMount() {
        menuStore.on('change', () =>{
            this.setState({
                menu: menuStore.getList()
            })
        })
         orderStore.on('change', () =>{
            this.setState({
               order: orderStore.getList()
            })
        })
    }

    setMenu(){
        const storeId = this.props.params.storeId;
        switch(storeId){
            case "catch of the day":
              return MenuActions.setMenu(fishes)
            case "king of the grill":
              return MenuActions.setMenu(meat)
            case "beer card":
              return MenuActions.setMenu(beer)
            default:
              this.state.menu
              
        }
    }


    addItem(item){
        const num = Date.now()
        MenuActions.addItem(item);
        console.log(item)
    }

    addToOrder(id) {
        OrderActions.addToOrder(id)
   }

    removeFromOrder(id){
        OrderActions.removeFromOrder(id)
    }


    removeItem(id){
        MenuActions.removeItem(id)
    }

    updateItem(id, item){
        MenuActions.updateItem(id, item)
    }

    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline='Freash SeaFood Market'/>
                    <ul className="menu-list">
                        {
                            Object.keys(this.state.menu)
                                  .map( key => <Item addItem={ this.addItem.bind(this)} 
                                                     removeItem={ this.removeItem.bind(this) }
                                                     addToOrder= { this.addToOrder.bind(this) } 
                                                     id={this.state.menu[key].id}  
                                                     key={ key } 
                                                     details={ this.state.menu[key]}
                                                     />
                                       )
                        }
                    </ul>
                </div>
                  <Order menu={ this.state.menu }
                       order={ this.state.order} 
                       params={ this.props.params }
                       removeFromOrder={ this.removeFromOrder.bind(this)}
                /> 
                <Inventory 
                  menu={this.state.menu} 
                  addItem={ this.addItem.bind(this) }
                  removeItem={ this.removeItem.bind(this)} 
                  updateItem= { this.updateItem.bind(this)}
                  button
                />
            </div>
        )
    }
}