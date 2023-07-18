import Component from "../core/Components.js";

export class Link extends Component {
  constructor(title, link, onClick) {
    super();
    this.title = title;
    this.link = link;
    this.onClick = onClick;
  }

  render() {
    const events = {};
    if (this.onClick) {
      events.click = this.onClick;
    }
    return {
      type: "a",
      class: "btn btn-outline-dark",
      attributes: {
        href: this.link,
      },
      events: events,
      children: [this.title],
    };
  }
}
