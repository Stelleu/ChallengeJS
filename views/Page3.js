import BrowserLink from "../components/BrowserLink.js";
import Component from "../core/Components.js";
import {Welcome} from "../components/Welcome.js";
import {Step1} from "../components/Step1.js";
import {Step2} from "../components/Step2.js";
import MultiStepForm from "../components/MultiStepForm.js";
export default class Page3 extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      message: "Step 3 ",
      currentForm: 1,
      totalForms: 3,

    }
  }
  handleFormChange = (formNumber) => {
    const { currentForm, totalForms } = this.state;
    const nextForm = onNextForm(currentForm, totalForms);
    this.setState({ currentForm: nextForm });
    console.log(this.state)
  };
  render() {
    const { currentForm } = this.state
    return {
      type: "div",
      class: "container ",
      id: this.idAttribute,
      children: [
        {
          type: "div",
          class: "position-absolute top-50 start-50 translate-middle",
          children: [
            {
              type: "div",
              class: "row ",
              children: [
                {
                  type: "div",
                  class: "card text-center px-5 mx-5",
                  id:this.idAttribute,
                  attributes:{style: {borderColor: "rgb(163 163 163)" } },
                  children: [
                    new MultiStepForm(),
                  ],
                },
              ]
            }
          ]
        }
      ]
    } ;
  }
}
