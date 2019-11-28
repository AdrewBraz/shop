import React from 'react'

export default class Store extends React.Component{
    goToStore(e){
        e.preventDefault()

        const storeId = this.storeName.value;
        this.context.router.transitionTo(`/store/${storeId}`)
    }

    render(){
        return(
            <form className="store-selector" onSubmit={ this.goToStore.bind(this) } >
                <h2>Please enter the Store</h2>
                <select className="store-select" ref={(value)=> this.storeName = value}>
                    <option value="catch of the day" type="submit" >Catch Of The Day </option>
                    <option value="beer card" type="submit" >Beer Card </option>
                    <option value="king grill" type="submit" >King Of The Grill </option>
                </select>    
                <button type="submit">Select Type</button>
            </form>
        )
    }
}

Store.contextTypes = {
    router: React.PropTypes.object
}