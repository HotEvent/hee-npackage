export class HeeAnimation {
    constructor(private element: HTMLElement) {

    }
    addStyle(styleString: string) {
        let styleElement = document.createElement("style");
        styleElement.setAttribute('type', 'text/css');
        styleElement.innerHTML = styleString;
        document.body.appendChild(styleElement);
    }
    fadeIn(config: { time: string, from: string, to: string }) {

    }
}