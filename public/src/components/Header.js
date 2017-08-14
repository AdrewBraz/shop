import React from 'react';
import Icon from './Icon';

import Anchor from '../icons/anchor.svg';
import BeerBottle from '../icons/beer.svg';
import Burger from '../icons/burger.svg';

const Title = (props) => {
    return(
        <header className="top">
            <h1 className="top__header">Catch 
                <span className="header__styled">
                    <span className="header__styled--of">of</span>
                    <span className="header__styled--the">the</span>
                </span>
                Day
            </h1>
            <h3 className="top__tagline">
                {props.tagline}
            </h3>
        </header>
    )
}

export default class Header extends React.Component{
 
    render(){
        const { storeId } = this.props.params;
        if(storeId === 'catch of the day'){
            return(
                <header className="top">
                    <h1 className="top__header">Catch 
                        <span className="header__styled">
                            <span className="header__styled--of">of</span>
                            <Icon name="anchor"/>
                            <span className="header__styled--the">the</span>
                        </span>
                        Day
                    </h1>
                    <h3 className="top__tagline">
                        Fresh sea food market
                    </h3>
                </header>
            )
        } else if( storeId === 'beer card'){
            return(
                <header className="top">
                    <h1 className="top__header">Beer
                        <span className="header__styled">
                            <Icon name="beer"/>
                        </span>
                        Card
                    </h1>
                    <h3 className="top__tagline">
                        The best beer in the city
                    </h3>
                </header>
            )
        } else if(storeId === 'king grill'){
            return(
                <header className="top">
                    <h1 className="top__header">King
                        <span className="header__styled">
                            <Icon name="burger"/>
                        </span>
                        Grill
                    </h1>
                    <h3 className="top__tagline">
                        Super tasty burgers
                    </h3>
                </header>
            )
        }
    }
    
} 


// const Header = (props) => {
//     return(
//         <header className="top">
//             <h1 className="top__header">Catch 
//                 <span className="header__styled">
//                     <span className="header__styled--of">of</span>
//                     <Icon name="achor"/>
//                     <span className="header__styled--the">the</span>
//                 </span>
//                 Day
//             </h1>
//             <h3 className="top__tagline">
//                 {props.tagline}
//             </h3>
//         </header>
//     )
// }

