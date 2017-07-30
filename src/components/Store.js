import React from 'react'

export default class Store extends React.Component{
    goToStore(e){
        e.preventDefault()

        const storeId = this.storeInput.value;
        console.log(this.storeInput.value)
        this.context.router.transitionTo(`/store/${storeId}`)
    }

    render(){
        return(
            <form className="store-selector" onSubmit={ this.goToStore.bind(this) } >
                <h2>Please enter the Store</h2>
                <input type="text" required placeholder="Store Name"  ref={(input)=> this.storeInput = input}/>
                <button type="submit">Visit Store </button>
            </form>
        )
    }
}

Store.contextTypes = {
    router: React.PropTypes.object
}