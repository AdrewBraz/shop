import { EventEmitter } from 'events';
import dispatcher from "../dispatcher"

class MenuStore extends EventEmitter{
    constructor(){
        super()
        this.menu = []
    }

    getList(){
        return this.menu
    }

    setMenu(list) {
        this.menu = list;
    }

    addItem(item){
        this.menu.push(item)
        this.emit('change')
    }

    removeItem(id){
        this.menu = this.menu.filter(item => item.id !== id);
        this.emit('change')
    }

    updateItem(id, item){
        this.menu = this.menu.map(elem => {
            return elem.id === id ? 
            { ...elem,
                name: item.name,
                price: item.price,
                status: item.status,
                desc: item.desc,
                image: item.image
            } :
            elem
        })
        this.emit('change')
    }

    actionsHandler(action){
        switch(action.type){
            case "ADD_ITEM":
              this.addItem(action.item)
              break;  
            
            case "REMOVE_ITEM":
              this.removeItem(action.id)  
              break;

            case "UPDATE_ITEM":
              this.updateItem(action.id, action.item)  
              break;

            case "SET_MENU":
              this.setMenu(action.list)  
              break;

            default:
              this.menu
              break;  
        }
    }
}

const menuStore = new MenuStore;
dispatcher.register(menuStore.actionsHandler.bind(menuStore));
export default menuStore