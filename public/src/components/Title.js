import React from 'react';
import Icon from './Icon';

const title = (props) =>{
    const { header } = props;
    const list = header.split(' ');
    if( list.length === 4){
        return(
            <header className="top">
                <h1 className="top__header">{ list[0] }
                    <span className="header__styled">
                        <span className="header__styled--of">{ list[1 ]}</span>
                        <Icon name={ props.iconName }/>
                        <span className="header__styled--the">{ list[2] }</span>
                    </span>
                    { list[3] }
                </h1>
                <h3 className="top__tagline">
                    { props.tagline }
                </h3>
            </header>
        )    
    } else{
        return(
            <header className="top">
                <h1 className="top__header">
                    { list[0] } 
                    <span className="header__styled">
                        <Icon name={props.iconName}/>
                    </span>
                    { list[1] }
                </h1>
                <h3 className="top__tagline">
                    { props.tagline }
                </h3>
            </header>
        )
    }
}

export default title;