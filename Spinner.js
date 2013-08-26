/** @jsx React.DOM */
var React = require('react-core');
var SpinnerGif = require('./Spinner.gif');

var Spinner = React.createClass({
  render: function() {
    return <img src={SpinnerGif} />;
  }
});

module.exports = Spinner;