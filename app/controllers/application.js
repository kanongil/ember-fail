import Controller from '@ember/controller';
import { next } from '@ember/runloop';

export default Controller.extend({
    myValue: 123,

    test() {
        console.log('not used...');
    },

    init() {
        this._super(...arguments);

        next(() => {
            this.set('myValue', 321);
        });
    }
});
