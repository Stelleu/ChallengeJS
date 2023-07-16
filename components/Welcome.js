import Component from "../core/Components.js";
import BrowserLink from "./BrowserLink.js";
export class Welcome extends Component{
    constructor(props) {
        super(props);
    }
    render = () => {
        const { onFormChange } = this.props;

        return {
            type: "div",
            class: "row",
            id:"Step0",
            children: [
                {
                    type: "div",
                    class: "col",
                    children: [
                        {
                            type: "img",
                            attributes:{src: "",alt: "Logo"},
                            class: "text-center",

                        },
                        {
                            type: "h1",
                            class: "text-center",
                            children: ["Welcome"],
                        },
                        {
                            type: "p",
                            class: "text-center",
                            children: [
                                "Welcome to the famous three-minutes Adeco installation process!"
                                +
                                "Just fill in the information into the next page and you'll be on your way to using your personal publishing platform."],
                        },
                    ]
                }
            ]
        }
    }
}