let oAddEventListener = document.addEventListener;

export class NodeComponent {
    container: HTMLElement;
    ref: HTMLElement;
    constructor(private name: string) {

    }
    search() {
        console.log('search');
    }
    render(container: HTMLElement) {
        this.container = container;

        let old = this.ref;
        if (old) {
            // container.replaceChild(element, old);
            return old;
        } else {
            let element = document.createElement('div');
            element.setAttribute('id', this.name);
            container.appendChild(element);
            this.ref = element;
            return element;
        }
        
    }
}



export function forTree(tree) {
    tree.component.search();
    if (tree.childrens) {
        for (const children of tree.childrens) {
            forTree(children);
        }
    } else {

    }
}

export function renderTree(tree, container) {
    let currentContainer = tree.component.render(container);
    if (tree.childrens) {
        for (const children of tree.childrens) {
            renderTree(children, currentContainer);
        }
    } else {

    }
}

document.addEventListener = (type: string, listener) => {
    let newListener = (ev) => {
        console.log('before');
        listener(ev);
        console.log('after');
    };
    oAddEventListener(type, newListener);
};
