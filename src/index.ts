let oAddEventListener = document.addEventListener;

class FooComponent {
    search() {
        console.log('search');
    }
}

const fooComponent = new FooComponent();

const compiledComponent = { component: fooComponent };



document.addEventListener = (type: string, listener) => {
    let newListener = (ev) => {
        console.log('before');
        listener(ev);
        console.log('after');
    };
    oAddEventListener(type, newListener);
};
