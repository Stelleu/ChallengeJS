import Button from "./Button.js";
import Component from "../core/Components.js";

export default class CompteurComponent extends Component {
  
    constructor(props) {
      super(props);
      this.name = "compteur"
      this.state = {
        compteur: props.initialValue || 0,
      };      
    }

    increment() {
      this.setState( { compteur: this.state.compteur + 1});
    }
    
    decrement() {
      this.setState ({ compteur: this.state.compteur - 1});
    }

    render() {
      return {
        type: "div",
        attributes: {
          "data-id": this.id
        },
        props: {},


        children: [
          new Button({
            title: "-",
            style: { backgroundColor: "red" },
            onClick: ()=>this.decrement(),
          }),
          `Current compteur: ${this.state.compteur}`,
          new Button({
            title: "+",
            style: { backgroundColor: "green" },
            onClick: ()=>this.increment(),
          }) 
               ],
      };
    }
  }

