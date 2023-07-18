import generateStructure from "./DomRenderer.js";
export default class Component {
    static componentCount = 0;

//recuperer l'element et le bind à la generationn du composant et l'appeler sur le render et remplace child avec le nvx noed

    constructor(props) {
        this.props = props;
        this.state = {}
        this.oldState = null;
        this.oldRender = null;
        this.id =   this.generateId() || props.id ;

    }

    setElement(element){
        this.element = element;
    }//rendre observable cree une fonction

    display = () => {
        //Si modification => on recupere le render de l'element ??
        if (this.shouldUpdate()) {
            const newElement = generateStructure(this.render());
            const element = document.querySelector('[data-id="' + this.id + '"]');
            element.replaceWith(newElement);
            this.oldState = newElement;
            this.oldRender = newElement;
            return newElement;
        }
    }

    render(){
        
        throw new Error("La méthode render() doit être implémentée.");
    }


    setState(partialState){
        this.oldState = this.state;
        this.state = Object.assign({}, this.state, partialState);
        this.display();
    }

    // verification si modification
    shouldUpdate = () =>{
        return (
            JSON.stringify(this.state) !== JSON.stringify(this.oldState)
        );
    }


    generateId(){
        const id = `${this.constructor.name}-${Component.componentCount}`;
        this.idAttribute = id
        Component.componentCount++;
        return id;
    }

}