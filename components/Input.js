import Component from "../core/Components.js"

export default class Input extends Component{
    constructor(props) {
        super(props);
        this.name = "input"
        this.state = { value: props.value }
    }

    render(){
        const baseStyle = {
            display: "block",
            width: "100%",
            padding:" 0.375rem 0.75rem",
            fontSize: "1rem",
            color: "#212529",
            backgroundColor:"#fff",
            border: "1px solid #dee2e6",
            borderRadius: "0.375rem",
        }
        const style = this.props.style || {};
        const { type,title, onChange,value,name } = this.props;

        return {

            type: "div",
            class: "mb-3 ",
            attributes: { style: { marginBottom: "10px" } },
            children: [
                {
                    type: "label",
                    class:"form-label my-3",
                    attributes: { for: name, style: { display: "block", marginBottom: "5px" } },
                    children: [title || ""],
                },
                {
                    type: "input",
                    attributes: {
                        name: name,
                        type: type,
                        class: "form-control",
                        required:true,
                        value: `${value}`,
                        // style: { ...baseStyle, ...style },
                        "data-id": this.idAttribute,
                        placeholder: title || "",
                    },
                    events: {
                        change: onChange || null,
                    },
                },
            ]
        }
    }
}
