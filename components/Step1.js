import Component from "../core/Components.js";
import BrowserLink from "./BrowserLink.js";
import Input from "./Input.js";
import Button from "./Button.js";
export class Step1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dbName : "",
            username : "",
            password : "",
            dbHost : "",
            tbPrefix : "",
        }

    }
    handleInputChange = (event) => {
        console.log('ok')
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
        console.log(this.state)
    };

    handleFormSubmit = (event) => {
        console.log("ok")
        event.preventDefault();
        this.props.onFormChange(this.state); // Passer les valeurs des champs au composant
        console.log(this.state)
    };
    render = () => {
        const { action = "", method ="POST", style } = this.props
        return {
            type: "form",
            attributes: {
                method: method || "get",
                // action: action || null,
                style: style || null,
                id: "Step1",
            },
            children: [
                new Input({
                    name:"dbName",
                    type:"text",
                    title: "Database Name",
                    style: { width: "200px" },
                    value: this.state.dbName,
                    change: this.handleInputChange,
                }),
                new Input({
                    name:"username",
                    type:"text",
                    title: "Username",
                    style: { width: "200px" },
                    value: this.state.username,
                    change: this.handleInputChange,
                }),
                new Input({
                    name:"password",
                    title: "Password",
                    type:"password",
                    style: { width: "200px" },
                    min:"8",
                    value: this.state.password,
                    change: this.handleInputChange,
                }),
                new Input({
                    name:"dbHost",
                    type:"text",
                    title: "Database Host",
                    style: { width: "200px" },
                    value: this.state.dbHost,
                    change: this.handleInputChange,
                }),
                new Input({
                    name:"tbPrefix",
                    type:"text",
                    title: "Table Prefix",
                    style: { width: "200px" },
                    value: this.state.tbPrefix,
                    change: this.handleInputChange,
                }),

            ]
        }
    }

}