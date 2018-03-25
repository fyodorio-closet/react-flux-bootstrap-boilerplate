const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');
const AppApi = require('../utils/appApi');

const CHANGE_EVENT = 'change';

let _items = [];

const AppStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function(payload) {
    const action = payload.action;

    switch(action.actionType) {
        
    }

    return true;
});

module.exports = AppStore;