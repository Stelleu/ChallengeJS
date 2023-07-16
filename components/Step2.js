import Component from "../core/Components.js";
import BrowserLink from "./BrowserLink.js";
import Input from "./Input.js";
export class Step2 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            siteTitle : "",
            username : "",
            email : "",
        }
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        const { username } = this.state;
        if (!dbName || !username || !password || !dbHost || !tbPrefix) {
            this.setState({error: "Veuillez remplir tous les champs du formulaire"});
            return;
        }
        console.log("Form 2 submitted with username:", username);
        // Passer au formulaire suivant
        this.props.onFormChange();
    };
    render = () => {
        const { action = "saveData.php", method ="POST", style } = this.props
        return {
            props:{},
            type: "form",
            attributes: {
                method: method ?? "get",
                action: action ?? null,
                style: style || null,
                id: "Step2",
            },
            children: [
                new Input({
                    name:"siteTitle",
                    type:"text",
                    title: "Site Title",
                    style: { width: "200px" },
                }),
                new Input({
                    name:"username",
                    type:"text",
                    title: "Username",
                    style: { width: "200px" },
                }),
                new Input({
                    name:"password",
                    title: "Password",
                    type:"password",
                    style: { width: "200px" },
                }),
                new Input({
                    name:"email",
                    type:"email",
                    title: "email",
                    style: { width: "200px" },
                }),
                // new BrowserLink("Previous", "/step1"),
            ]
        }
    }
}