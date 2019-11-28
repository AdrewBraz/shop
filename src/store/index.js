import { combineReducers } from 'redux';

import menuSlice from './MenuStore';
import orderSlice from './OrderStore';

export default combineReducers({
    menu: menuSlice,
    order: orderSlice
})