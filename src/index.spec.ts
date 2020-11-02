import { HeeAnimation } from ".";

describe("Base", () => {

    // it("should to Equal ''", () => {
    //     const heeAnimation = new HeeAnimation(document.body);
    //     heeAnimation.addStyle('');
    //     expect(document.querySelector('style').innerHTML).toEqual("");
    // });
    it("should to be 'text/css'", () => {
        const heeAnimation = new HeeAnimation(document.body);
        heeAnimation.addStyle(`body{background:red}`);
        expect(document.querySelector('style').getAttribute('type')).toEqual("text/css");
    });
    // it("should to be 'animation'", () => {
    //     const heeAnimation = new HeeAnimation(document.body);
    //     expect(document.querySelector('style').innerHTML).toEqual("");
    //     expect(document.querySelector('style').getAttribute('type')).toEqual("text/css");
    // });
});