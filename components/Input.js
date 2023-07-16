import Component from "../core/Components.js"

export default class Input extends Component{
    constructor(props) {
        super(props);
        this.name = "input"
        this.state = { value: props.value }
    }

    render(){
        const baseStyle = {
            borderRadius: "15px",
            padding: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
        }
        const style = this.props.style || {};
        const title = this.props.title || "";
        const { type, onChange,value,name } = this.props;

        return {
            type: "input",
            attributes : {
                name : name,
                type: type,
                value: this.props.value ?? "" ,
                style : {...baseStyle, ...style},
                "data-id": this.idAttribute,
                placeholder : title ,
            },
            events:{
                change : onChange
            },
            children:[title]
        }
    }
}
