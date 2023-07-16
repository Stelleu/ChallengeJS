import { BrowserLink, BrowserButton } from "../components/BrowserRouter.js";
import Button from "../components/Button.js";
import Input from "../components/Input.js";
import { Link } from "../components/Link.js";
import Compteur from "../components/Compteur.js";
import CompteurComponent from "../components/Compteur.js";
import FormComponent from "../components/Form.js";
export default function Page3() { 
    return {
      type: "div",
      children: [
        BrowserLink("Page 1", "/page1"),
        // Link("Index", "/"),
        {
          type: "h1",
          
          children: ["Coucou"],
        },
        {
          type: "h2",
          
          children: ["Bonsoir"],
        },
        {
          type: "h3",
          
          children: ["Tout le monde"],
        },
        {
          type: "p",
          
          children: ["Ici le javascript"],
        },
        new CompteurComponent({ initialValue: 10 }).render(),
        new FormComponent({
          action: "",
          method: "POST",
          style: { padding: "20px" },
          children:[
            new Input({
              title: "Database Name",
              style: { width: "200px" },
          }),"Database Name",
          /*new Input({
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
          }),"Table Prefix",*/
          new Button({
              title:"submit",
              style:{ backgroundColor: "bleu"},
          })
          ]
        }).render(),
        
      ]
    };
  }
