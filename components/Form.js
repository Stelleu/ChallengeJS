import Component from "../core/Components.js";
import Input from "./Input.js";
import Button  from "./Button.js";


export default class FormComponent extends Component{

    constructor(props){
        super(props);
        this.name = "form";
        this.state = {
            dbName : "",
            username : "",
            password : "",
            dbHost : "",
            tbPrefix : "",
        }
    }



    render() {
        const { action,method, style } = this.props;
        return {
            props:{},
            type: "form",
            attributes: {
                method: method ?? "get",
                action: action ?? null,
                style: style || {},
                id: this.idAttribute,
            },
            children: [
                new Input({
                    name:"dbName",
                    type:"text",
                    title: "Database Name",
                    style: { width: "200px" },
                }),"Database Name",
                new Input({
                    name:"username",
                    type:"text",
                    title: "Username",
                    style: { width: "200px" },
                }),"Username",
                new Input({
                    name:"password",
                    title: "Password",
                    type:"password",
                    style: { width: "200px" },
                }),"Password",
                new Input({
                    name:"dbHost",
                    type:"text",
                    title: "Database Host",
                    style: { width: "200px" },
                }),"Database Host",
                new Input({
                    name:"tbPrefix",
                    type:"text",
                    title: "Table Prefix",
                    style: { width: "200px" },
                }),"Table Prefix",
                new Button({
                    title:"submit",
                    type:"submit",
                    style:{ backgroundColor: "bleu"},
                    onClick : (event) => {
                         event.preventDefault();
                        const form = document.getElementById(this.idAttribute)
                        const formData = new FormData(form)
                        const formDataObject = Object.fromEntries(formData);
                        console.log(formDataObject)

                    }
                })
            ]
        }
    }
}

/*
                new Input({
                    title: "Database Name",
                    value : "",
                     
                    style: { width: "200px" },
                }),"Database Name",
                new Input({
                    title: "Username",
                    value : "",
                     
                    style: { width: "200px" },
                }),"Username",
                new Input({
                    title: "Password",
                    value : "",
                     
                    style: { width: "200px" },
                }),"Password",
                new Input({
                    title: "Database Host",
                    value : "",
                     
                    style: { width: "200px" },
                }),"Database Host",
                new Input({
                    title: "Table Prefix",
                    value : "",
                     
                    style: { width: "200px" },
                }),"Table Prefix",
                new Button({
                    title:"Submit",
                    style:{ backgroundColor: "bleu"},
                    onClick:()=>ConstrutorFunction()
                })
*/ 