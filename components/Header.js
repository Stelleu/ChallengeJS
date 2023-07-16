import { domRender } from "../core/DomRenderer";
import Component from "../core/components";

export class HeaderCompo extends Component{
    constructor(props){
        super(props);
        this.title = "Home";
        this.link = window.location.pathname;
    }

    render(){
        console.log(this.link);
    }
}