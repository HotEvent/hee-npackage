describe("Base", () => {

    it("should to be true", () => {
        const regExp = new RegExp(`abc`);
        expect(regExp.test('abcabc')).toEqual(true);
        // var event = document.createEvent('Event');
        // event.initEvent('build')
       
        // document.dispatchEvent(new MouseEvent('click',{view: window,
        // bubbles: true,
        // cancelable: true}));
        
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