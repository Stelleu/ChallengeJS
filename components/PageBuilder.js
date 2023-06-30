import DomRenderer from "../core/DomRenderer.js";
import Component from "../core/Components.js";
export class PageBuilderComponent extends Component {
  constructor(properties) {
    super(properties);
  }

  render = () => {
    const result = DomRenderer({type:"div"}, { id: "main" },
    DomRenderer({type:"div"}, {id: "header"}, ""),
    );
    return result;
  };
}