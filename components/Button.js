import Component from "../core/Components.js";
export default class Button extends Component {
  constructor(props) {
    super(props);
    this.name = "button"
  }

  render() {
    const title = this.props.title || "Button";
    const style = this.props.style || {};
    const type = this.props.type || "";
    const onClick = this.props.click
    const onSubmit = this.props.submit
    return {
      type: "button",
      class:"btn btn-outline-dark mx-3",
      attributes: {
        type: type,
        "data-id": this.idAttribute,
        id: this.idAttribute
      },
      events: {
        click: onClick || null,
        submit: onSubmit || null,

      },
      children: [title],
    };
  }
}
