import React from 'react'

export default class AddForm extends React.Component{
    createItem(e){
        e.preventDefault()
        const num = Date.now()
        const item = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            image: this.image.value,
            id: num
        }
        this.props.addItem(item)
        this.form.reset()
    }

    render(){
        return(
            <form  ref={ (input) => this.form = input} className="fish-edit" onSubmit={this.createItem.bind(this)}>
                <input ref={ (input) => this.name = input } type="text" placeholder="Name"/>
                <input ref={ (input) => this.price = input } type="text" placeholder="Price"/>
                <select ref={ (input) => this.status = input } name="status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea ref={ (input) => this.desc = input } placeholder="Desc"></textarea>
                <input ref={ (input) => this.image = input } type="text" placeholder="Image"/>
                <button type="submit">+ Add Item</button>
            </form>
        )
    }
}