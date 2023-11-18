var React = require('react');

var styles = {"test":"_3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};
var LoginButton = function LoginButton(_ref2) {
  var className = _ref2.className;
  return React.createElement("button", {
    className: className
  }, "Login");
};
var LogoutButton = function LogoutButton(_ref3) {
  var className = _ref3.className;
  return React.createElement("button", {
    className: className
  }, "Logout");
};

exports.ExampleComponent = ExampleComponent;
exports.LoginButton = LoginButton;
exports.LogoutButton = LogoutButton;
//# sourceMappingURL=index.js.map
