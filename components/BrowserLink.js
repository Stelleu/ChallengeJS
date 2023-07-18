import  { Link }  from "./Link.js";


export default class BrowserLink extends Link {
    constructor(title, link, event) {
        super();
        this.title = title;
        this.link = link;
        this.event = event
        this.oldPushState = history.pushState.bind(history);
    }

    handlePushState(data, unused, url) {
        this.oldPushState( data, unused, url);
        window.dispatchEvent(new Event("popstate"));
    }

    handlePopState() {
        window.addEventListener("popstate", function () {
            this.pathname = location.pathname.replace(this.link);
        });
    }
    handleClick = (event) => {
        event.preventDefault();
        const action = this.event;
        console.log("Button Action:", action);
        this.handlePushState({}, undefined, this.link);
        // this.handlePopState()
    };

    render() {
        const realLink =   this.link;
        return new Link(this.title, realLink,this.handleClick )
    }
}
