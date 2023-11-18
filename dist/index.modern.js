import { createElement } from 'react';

var styles = {"test":"_3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};
var LoginButton = function LoginButton(_ref2) {
  var className = _ref2.className;
  return createElement("button", {
    className: className
  }, "Login");
};
var LogoutButton = function LogoutButton(_ref3) {
  var className = _ref3.className;
  return createElement("button", {
    className: className
  }, "Logout");
};

export { ExampleComponent, LoginButton, LogoutButton };
//# sourceMappingURL=index.modern.js.map
