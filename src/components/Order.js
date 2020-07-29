import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { formatPrice } from '../helpers';

export default class Order extends React.Component {
  renderOrder(key) {
    const ids = this.props.menu.map((item) => item.id);
    const index = ids.indexOf(+key);
    const item = this.props.menu[index];
    const count = this.props.order[key];
    const button = <button className="order-list__button" onClick={() => this.props.removeFromOrder(key)}>&times;</button>;

    if (!item || item.status === 'unavailable') {
      return (
        <li className="order-list__item--unavailable" key={key}>
          {' '}
          Sorry,
          { item ? item.name : 'item' }
          {' '}
          is no longer available
          {' '}
        </li>
      );
    }

    return (
      <li className="order-list__item" key={key}>
        <span>
          <CSSTransitionGroup
            component="span"
            className="order-list__item--count"
            transitionName="count"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}
          >
            <span key={count}>{ count }</span>
          </CSSTransitionGroup>
          lbs
          {' '}
          {item.name}
          {' '}
          { button }
        </span>
        <span className="order-list__item--price">{formatPrice(count * item.price)}</span>
      </li>
    );
  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, id) => {
      const ids = this.props.menu.map((item) => item.id);
      const index = ids.indexOf(+id);
      const item = this.props.menu[index];
      const count = this.props.order[id];
      const isAvailable = item && item.status === 'available';
      if (isAvailable) {
        return prevTotal + (count * item.price || 0);
      } return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <CSSTransitionGroup
          className="order-list"
          component="ul"
          transitionName="order"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
        >
          { orderIds.map(this.renderOrder.bind(this)) }
          <li className="order-list__item--total">
            <strong>Total:</strong>
            {formatPrice(total)}
          </li>
        </CSSTransitionGroup>
      </div>
    );
  }
}
