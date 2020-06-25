"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _pug = _interopRequireDefault(require("pug"));

var _fastify = _interopRequireDefault(require("fastify"));

var _pointOfView = _interopRequireDefault(require("point-of-view"));

var _fastifyStatic = _interopRequireDefault(require("fastify-static"));

var _lodash = _interopRequireDefault(require("lodash"));

var _routes = _interopRequireDefault(require("./routes.js"));

// @ts-check
var isProduction = process.env.NODE_ENV === 'production';

var appPath = _path["default"].join(__dirname, '..');

var isDevelopment = !isProduction;

var setUpViews = function setUpViews(app) {
  var domain = isDevelopment ? 'http://localhost:8080' : '';
  app.register(_pointOfView["default"], {
    engine: {
      pug: _pug["default"]
    },
    defaultContext: {
      assetPath: function assetPath(filename) {
        return "".concat(domain, "/assets/").concat(filename);
      }
    },
    templates: _path["default"].join(__dirname, 'views')
  });
};

var setUpStaticAssets = function setUpStaticAssets(app) {
  app.register(_fastifyStatic["default"], {
    root: _path["default"].join(appPath, 'dist/public'),
    prefix: '/assets'
  });
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var app = (0, _fastify["default"])();
  setUpViews(app);
  setUpStaticAssets(app);
  (0, _routes["default"])(app, state);
  return app;
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJpc1Byb2R1Y3Rpb24iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJhcHBQYXRoIiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJpc0RldmVsb3BtZW50Iiwic2V0VXBWaWV3cyIsImFwcCIsImRvbWFpbiIsInJlZ2lzdGVyIiwicG9pbnRPZlZpZXciLCJlbmdpbmUiLCJwdWciLCJQdWciLCJkZWZhdWx0Q29udGV4dCIsImFzc2V0UGF0aCIsImZpbGVuYW1lIiwidGVtcGxhdGVzIiwic2V0VXBTdGF0aWNBc3NldHMiLCJmYXN0aWZ5U3RhdGljIiwicm9vdCIsInByZWZpeCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFSQTtBQVVBLElBQU1BLFlBQVksR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBOUM7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHQyxpQkFBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLElBQXJCLENBQWhCOztBQUNBLElBQU1DLGFBQWEsR0FBRyxDQUFDUixZQUF2Qjs7QUFFQSxJQUFNUyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQVM7QUFDMUIsTUFBTUMsTUFBTSxHQUFHSCxhQUFhLEdBQUcsdUJBQUgsR0FBNkIsRUFBekQ7QUFDQUUsRUFBQUEsR0FBRyxDQUFDRSxRQUFKLENBQWFDLHVCQUFiLEVBQTBCO0FBQ3hCQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsR0FBRyxFQUFFQztBQURDLEtBRGdCO0FBSXhCQyxJQUFBQSxjQUFjLEVBQUU7QUFDZEMsTUFBQUEsU0FBUyxFQUFFLG1CQUFDQyxRQUFEO0FBQUEseUJBQWlCUixNQUFqQixxQkFBa0NRLFFBQWxDO0FBQUE7QUFERyxLQUpRO0FBT3hCQyxJQUFBQSxTQUFTLEVBQUVmLGlCQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsT0FBckI7QUFQYSxHQUExQjtBQVNELENBWEQ7O0FBYUEsSUFBTWMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDWCxHQUFELEVBQVM7QUFDakNBLEVBQUFBLEdBQUcsQ0FBQ0UsUUFBSixDQUFhVSx5QkFBYixFQUE0QjtBQUMxQkMsSUFBQUEsSUFBSSxFQUFFbEIsaUJBQUtDLElBQUwsQ0FBVUYsT0FBVixFQUFtQixhQUFuQixDQURvQjtBQUUxQm9CLElBQUFBLE1BQU0sRUFBRTtBQUZrQixHQUE1QjtBQUlELENBTEQ7O2VBT2Usb0JBQWdCO0FBQUEsTUFBZkMsS0FBZSx1RUFBUCxFQUFPO0FBQzdCLE1BQU1mLEdBQUcsR0FBRywwQkFBWjtBQUVBRCxFQUFBQSxVQUFVLENBQUNDLEdBQUQsQ0FBVjtBQUNBVyxFQUFBQSxpQkFBaUIsQ0FBQ1gsR0FBRCxDQUFqQjtBQUVBLDBCQUFVQSxHQUFWLEVBQWVlLEtBQWY7QUFFQSxTQUFPZixHQUFQO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1jaGVja1xyXG5cclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBQdWcgZnJvbSAncHVnJztcclxuaW1wb3J0IGZhc3RpZnkgZnJvbSAnZmFzdGlmeSc7XHJcbmltcG9ydCBwb2ludE9mVmlldyBmcm9tICdwb2ludC1vZi12aWV3JztcclxuaW1wb3J0IGZhc3RpZnlTdGF0aWMgZnJvbSAnZmFzdGlmeS1zdGF0aWMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgYWRkUm91dGVzIGZyb20gJy4vcm91dGVzLmpzJztcclxuXHJcbmNvbnN0IGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XHJcbmNvbnN0IGFwcFBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4nKTtcclxuY29uc3QgaXNEZXZlbG9wbWVudCA9ICFpc1Byb2R1Y3Rpb247XHJcblxyXG5jb25zdCBzZXRVcFZpZXdzID0gKGFwcCkgPT4ge1xyXG4gIGNvbnN0IGRvbWFpbiA9IGlzRGV2ZWxvcG1lbnQgPyAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyA6ICcnO1xyXG4gIGFwcC5yZWdpc3Rlcihwb2ludE9mVmlldywge1xyXG4gICAgZW5naW5lOiB7XHJcbiAgICAgIHB1ZzogUHVnLFxyXG4gICAgfSxcclxuICAgIGRlZmF1bHRDb250ZXh0OiB7XHJcbiAgICAgIGFzc2V0UGF0aDogKGZpbGVuYW1lKSA9PiBgJHtkb21haW59L2Fzc2V0cy8ke2ZpbGVuYW1lfWAsXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVzOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAndmlld3MnKSxcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNldFVwU3RhdGljQXNzZXRzID0gKGFwcCkgPT4ge1xyXG4gIGFwcC5yZWdpc3RlcihmYXN0aWZ5U3RhdGljLCB7XHJcbiAgICByb290OiBwYXRoLmpvaW4oYXBwUGF0aCwgJ2Rpc3QvcHVibGljJyksXHJcbiAgICBwcmVmaXg6ICcvYXNzZXRzJyxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IHt9KSA9PiB7XHJcbiAgY29uc3QgYXBwID0gZmFzdGlmeSgpO1xyXG5cclxuICBzZXRVcFZpZXdzKGFwcCk7XHJcbiAgc2V0VXBTdGF0aWNBc3NldHMoYXBwKTtcclxuXHJcbiAgYWRkUm91dGVzKGFwcCwgc3RhdGUpO1xyXG5cclxuICByZXR1cm4gYXBwO1xyXG59OyJdfQ==