const Dispatcher = require('flux').Dispatcher;
const assign = require('object-assign');

const AppDispatcher = assign(new Dispatcher(), {
    handleViewAction: function(action) {
        const payload = {
            source: 'VIEW_ACTION',
            action: action
        }
        this.dispatch(payload);
    }
})

module.exports = AppDispatcher;
