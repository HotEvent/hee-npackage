// import { HeeAnimation } from ".";
import { NodeComponent, forTree, renderTree } from "./index";
describe("Base", () => {

    it("should to Equal ''", () => {
        // var event = document.createEvent('Event');
        // event.initEvent('build')
       
        // document.dispatchEvent(new MouseEvent('click',{view: window,
        // bubbles: true,
        // cancelable: true}));
        const rootComponent = new NodeComponent('root');
        const c1 = new NodeComponent('1');
        const c2 = new NodeComponent('2');
        const compiledRoot = { component: rootComponent };
        const compiledC1 = { component: c1 };
        const compiledC2 = { component: c2 };
        const componentTree = {
            ...compiledRoot,
            childrens: [compiledC1, compiledC2]
        }
        document.addEventListener('click', () => {
            forTree(componentTree);
            renderTree(componentTree,document.body);
            console.log(componentTree);
        })
    });
    // it("should to be 'text/css'", () => {
    //     const heeAnimation = new HeeAnimation(document.body);
    //     heeAnimation.addStyle(`body{background:red}`);
    //     expect(document.querySelector('style').getAttribute('type')).toEqual("text/css");
    // });
    // it("should to be 'animation'", () => {
    //     const heeAnimation = new HeeAnimation(document.body);
    //     expect(document.querySelector('style').innerHTML).toEqual("");
    //     expect(document.querySelector('style').getAttribute('type')).toEqual("text/css");
    // });
});