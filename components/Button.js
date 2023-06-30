import Component from "../core/Components.js";
export default class Button extends Component {
  constructor(props) {
    super(props);
    this.name = "button"
  }

  render() {
     const baseStyle = {
     backgroundColor: "grey",
     borderRadius: "5px",
  }
  const title = this.props.title || "Button";
  const style = this.props.style || {};
  const type = this.props.type || "";
    return {
      type: "button",
      attributes: {
        type: type,
        style: { ...baseStyle, ...style },
        "data-id": this.idAttribute
      },
      events: {
        click: this.props.onClick ?? null,
        submit: onsubmit

      },
      children: [title],
    };
  }
}
