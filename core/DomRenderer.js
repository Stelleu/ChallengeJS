import Component from "./Components.js";

export default function generateStructure(structure) {
  if(structure instanceof Component) {
    const element = generateStructure(structure.render())
    structure.element = element;
    return element;
  } else{
    const element = document.createElement(structure.type);
    if (structure.attributes) {
      for (let attrName in structure.attributes) {
        if (attrName.startsWith("data-")) {
          element.dataset[attrName.replace("data-", "")] =
              structure.attributes[attrName];
        } else if (attrName === "style") {
          Object.assign(element.style, structure.attributes[attrName]);
        }else element.setAttribute(attrName, structure.attributes[attrName]);
      }
    }
    if (structure.events) {
      for (let eventName in structure.events) {
        element.addEventListener(eventName, structure.events[eventName]);
      }
    }
    if (structure.children) {
      for (let child of structure.children) {
        let subChild;
        if (typeof child === "string") {
          subChild = document.createTextNode(child);
        } else {
          subChild = generateStructure(child);
        }
        element.appendChild(subChild);
      }
    }
    if (structure.class){
      element.className = structure.class
    }
    return element;
  }
}

export const domRender = {
  render : (element, domElement, props = {}) => {
    const component = new Component(props);
    component.setElement(domElement);
    const newElement = generateStructure(component.render());
    domElement.replaceChild(newElement,component.element);
    component.element = newElement;
    // domElement.appendChild(component.element)
  },

}