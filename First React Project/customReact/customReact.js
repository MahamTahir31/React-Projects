function customRender(reactElement, container){
    /*
    // Version-1
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement) */

    // Version-2
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue; // it is not needed
        domElement.setAttribute(prop, reactElement.props[prop]);
        }

        container.appendChild(domElement    )

    }

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me!'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)