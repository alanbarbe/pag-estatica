"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 3000;
app.use(_express["default"]["static"]('public'));
app.get('/', function (req, res) {
  res.redirect('/index.html');
});
app.listen(PORT, function () {
  return console.log("Server listening on port: ".concat(PORT));
});