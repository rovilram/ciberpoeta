const createNode = (htmlElement, htmlAttributes, container) => {
    
    const HTMLnode = document.createElement(htmlElement);

    Object.entries(htmlAttributes).forEach(([key, val]) => {
        HTMLnode[key] = val;
    })
    if (container) {
        container.appendChild(HTMLnode);
    }
        return HTMLnode;
}

export default createNode;