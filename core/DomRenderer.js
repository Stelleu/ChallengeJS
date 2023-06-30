import Component from "./Components.js";

export default function generateStructure(structure) {
    if(structure instanceof Component) {
      const element = generateStructure(structure.render())
      structure.element = element;
      return element;
      // structure.observe(()=>{
      //   if(element && element.parentNode){
      //     element.parentNode.replaceChild(structure,element);
      //   }
      // this.element = newElement;
      // this.oldRender = newElement
      // return newElement;
      // })
    
      }else{
      const element = document.createElement(structure.type);
      if (structure.attributes) {
        for (let attrName in structure.attributes) {
          if (attrName.startsWith("data-")) {
            element.dataset[attrName.replace("data-", "")] =
              structure.attributes[attrName];
          } else if (attrName === "style") {
            Object.assign(element.style, structure.attributes[attrName]);
          } else element.setAttribute(attrName, structure.attributes[attrName]);
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
      return element;
  }    
}

  // export const MiniReact = {
  //   generateStructure,
  //   Component
  // }

  export const domRender = {
    render : (element, domElement, props = {}) => {
      const component = new Component(props)
      component.setElement(domElement)
        var newElement = component.display();
        domElement.replaceChild(newElement,component.element);
        component.element = newElement;
        domElement.appendChild(component.element)
    }

  }