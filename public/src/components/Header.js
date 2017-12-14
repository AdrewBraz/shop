import React from 'react';
import Title from './Title';

import Anchor from '../icons/anchor.svg';
import BeerBottle from '../icons/beer.svg';
import Burger from '../icons/burger.svg';

const header = (props) => {
    const { storeId } = props.params;
    if(storeId === 'catch of the day'){
        return(
            <Title iconName='anchor' tagline='Fresh see food market' header='Catch of the day'/>
        )
    } else if( storeId === 'beer card'){
        return(
            <Title iconName='beer' tagline='The best beer in the City' header='Beer Card'/>
        )
    } else if(storeId === 'king grill'){
        return(
            <Title iconName='burger' tagline='Super tasty burgers' header='King Grill'/>
        )
    }
}

export default header;
