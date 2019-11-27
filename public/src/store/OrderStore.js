import { EventEmitter } from 'events';
import dispatcher from '../dispatcher'

// class OrderStore extends EventEmitter{
//     constructor(){
//         super()
//         this.order = {}
//     }

//     getList(){
//         return {...this.order}
//     }

//     addToOrder(id){
//         this.order = { ...this.order }
//         this.order[id] = this.order[id] + 1 || 1 
//         this.emit('change')
//     }

//     removeFromOrder(id){
//         this.order = { ...this.order}
//         this.order[id] <= 1 ? delete this.order[id] : this.order[id] = this.order[id] - 1
//         this.emit('change')
//     }

//     actionsHandler(action){
//         switch(action.type){
//             case "ADD_TO_ORDER":
//               this.addToOrder(action.id)
//               break;
             
//             case "REMOVE_FROM_ORDER":
//               this.removeFromOrder(action.id) 
//               break; 
              
//             default:
//               break;  
//         }
//     }
// }

// const orderStore = new OrderStore;

// dispatcher.register(orderStore.actionsHandler.bind(orderStore))
// export default orderStore