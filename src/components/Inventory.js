import React from 'react';
import AddForm from './AddForm';

export default class Inventory extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    const { id } = this.props.menu[key];
    const item = this.props.menu[key];
    const updated = {
      ...item,
      [e.target.name]: e.target.value,
    };
    this.props.updateItem(id, updated);
  }

  renderInventory(key) {
    const fish = this.props.menu[key];
    const { id } = this.props.menu[key];
    return (
      <div className="edit" id={id} key={key}>
        <input type="text" onChange={(e) => { this.handleChange(e, key); }} name="name" value={fish.name} placeholder="Fish Name" />
        <input onChange={(e) => { this.handleChange(e, key); }} type="text" name="price" value={fish.price} placeholder="Fish Price" />
        <select onChange={(e) => { this.handleChange(e, key); }} type="text" name="status" value={fish.status} placeholder="Fish Status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea onChange={(e) => { this.handleChange(e, key); }} type="text" name="desc" placeholder="Fish Desc" value={fish.desc} />
        <input onChange={(e) => { this.handleChange(e, key); }} type="text" name="image" placeholder="Fish Image" value={fish.image} />
        <button onClick={() => this.props.removeItem(id)}>remove item</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>inventory</h2>
        {Object.keys(this.props.menu).map(this.renderInventory.bind(this))}
        <AddForm addItem={this.props.addItem} />
      </div>
    );
  }
}
