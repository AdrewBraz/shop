import React from 'react'

const Header = (props) => {
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

export default Header