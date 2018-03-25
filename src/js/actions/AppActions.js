const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

const AppActions = {
    receiveItems: function(items) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_ITEMS,
            items: items
        })
    }
}

module.exports = AppActions;