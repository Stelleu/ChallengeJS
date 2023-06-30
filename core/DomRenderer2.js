// Render children

export default function generateStructure(structure) {
  const typeOfStructure = typeof structure.type;
  const isDomElement = structure.type === "string";
  if (isDomElement) {
    const isTextElement = structure.type === "string";
    const element = isTextElement
      ? document.createTextNode("")
      : document.createElement(typeOfStructure);

    updateDomProperties(element, [], structure);

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
  } else {
    const instance = {};
    const publicInstance = createPublicInstance(structure, instance);
    if (publicInstance && typeof publicInstance.render === "function") {
      const childElement = publicInstance.render();
      const childInstance = reconcile(null, null, childElement);
      const dom = childInstance.dom;

      Object.assign(instance, { dom, element: structure, childInstance, publicInstance });
      return instance;
    } else {
      throw new Error("Invalid component. Missing render method.");
    }
  }
}

function updateDomProperties(dom, prevProps, nextProps) {
  const isEvent = name => name.startsWith("on");
  const isAttribute = name => !isEvent(name) && name !== "children";

  // Remove event listeners
  Object.keys(prevProps).filter(isEvent).forEach(name => {
    const eventType = name.toLowerCase().substring(2);
    dom.removeEventListener(eventType, prevProps[name]);
  });

  // Remove attributes
  Object.keys(prevProps).filter(isAttribute).forEach(name => {
    dom.removeAttribute(name);
  });

  // Set attributes
  Object.keys(nextProps).filter(isAttribute).forEach(name => {
    dom.setAttribute(name, nextProps[name]);
  });

  // Add event listeners
  Object.keys(nextProps).filter(isEvent).forEach(name => {
    const eventType = name.toLowerCase().substring(2);
    dom.addEventListener(eventType, nextProps[name]);
  });
}

function render(element, container) {
  const dom = generateStructure(element);
  container.appendChild(dom);
}

function createPublicInstance(element, internalInstance) {
  const { type, ...props } = element;
  
  if (typeof type === "string") {
    const domElement = document.createElement(type);
    const publicInstance = { dom: domElement };
    publicInstance.__internalInstance = internalInstance;
    console.log(type.prototype);
    return publicInstance;
  } else if (typeof type === "function" && type.prototype.render) {
    const publicInstance = new type(props);
    publicInstance.__internalInstance = internalInstance;
    return publicInstance;
  }else {
    throw new Error("Invalid component. Missing render method.");
  }
}

function reconcile(parentDom, instance, element) {
  if (instance == null) {
    const newInstance = generateStructure(element);
    parentDom.appendChild(newInstance.dom);
    return newInstance;
  } else if (element == null) {
    parentDom.removeChild(instance.dom);
    return null;
  } else if (instance.element.type !== element.type) {
    const newInstance = generateStructure(element);
    parentDom.replaceChild(newInstance.dom, instance.dom);
    return newInstance;
  } else if (typeof element.type === "string") {
    updateDomProperties(instance.dom, instance.element.props, element.props);
    instance.childInstances = reconcileChildren(instance, element);
    instance.element = element;
    return instance;
  } else {
    instance.publicInstance.props = element.props;
    const childElement = instance.publicInstance.render();
    const oldChildInstance = instance.childInstance;
    const childInstance = reconcile(null, oldChildInstance, childElement);
    instance.dom = childInstance.dom;
    instance.childInstance = childInstance;
    instance.element = element;
    return instance;
  }
}

function reconcileChildren(instance, element) {
  const dom = instance.dom;
  const childInstances = instance.childInstances || [];
  const nextChildElements = element.children || [];
  const newChildInstances = [];
  const count = Math.max(childInstances.length, nextChildElements.length);
  for (let i = 0; i < count; i++) {
    const childInstance = childInstances[i];
    const childElement = nextChildElements[i];
    const newChildInstance = reconcile(null, childInstance, childElement);
    newChildInstances.push(newChildInstance);
  }
  return newChildInstances.filter(instance => instance != null);
}

export { generateStructure, render };
