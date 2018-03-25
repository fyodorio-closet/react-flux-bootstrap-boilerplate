const React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

function getAppState() {
    return {
        
    }
}

const App = React.createClass({
    getInitialState: function() {
        return getAppState();
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
    render: function(){
        return(
            <div>
                MY APP
            </div>
        )
    },
    
    // Update view state when change is received
    _onChange: function() {
        this.setState(getAppState());
    }
});

module.exports = App;