'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _webpack = _interopRequireDefault(require("webpack"));

var _webpackDevMiddleware = _interopRequireDefault(require("webpack-dev-middleware"));

var _webpackHotMiddleware = _interopRequireDefault(require("webpack-hot-middleware"));

var _webpack2 = _interopRequireDefault(require("../webpack.config"));

var compiler = (0, _webpack["default"])(_webpack2["default"]);

var _default = function _default() {
  var app = (0, _express["default"])();
  app.use((0, _cors["default"])());
  app.use(_bodyParser["default"].json());
  app.set('view engine', 'pug');
  app.use((0, _webpackDevMiddleware["default"])(compiler, {
    noInfo: true,
    publicPath: _webpack2["default"].output.publicPath,
    stats: {
      colors: true
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    }
  }));
  app.use((0, _webpackHotMiddleware["default"])(compiler, {
    log: console.log
  }));
  app.use(_express["default"]["static"]("".concat(__dirname, "/../public/dist/")));
  app.get('*', function (req, res) {
    console.log();
    res.render('index');
  });

  var server = _http["default"].createServer(app);

  return server;
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb21waWxlciIsImNvbmZpZyIsImFwcCIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwic2V0Iiwibm9JbmZvIiwicHVibGljUGF0aCIsIm91dHB1dCIsInN0YXRzIiwiY29sb3JzIiwid2F0Y2hPcHRpb25zIiwiYWdncmVnYXRlVGltZW91dCIsInBvbGwiLCJsb2ciLCJjb25zb2xlIiwiZXhwcmVzcyIsIl9fZGlybmFtZSIsImdldCIsInJlcSIsInJlcyIsInJlbmRlciIsInNlcnZlciIsImh0dHAiLCJjcmVhdGVTZXJ2ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcseUJBQVFDLG9CQUFSLENBQWpCOztlQUVlLG9CQUFNO0FBQ25CLE1BQU1DLEdBQUcsR0FBRywwQkFBWjtBQUNBQSxFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSx1QkFBUjtBQUNBRCxFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUUMsdUJBQVdDLElBQVgsRUFBUjtBQUNBSCxFQUFBQSxHQUFHLENBQUNJLEdBQUosQ0FBUSxhQUFSLEVBQXVCLEtBQXZCO0FBRUFKLEVBQUFBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLHNDQUFxQkgsUUFBckIsRUFBK0I7QUFDckNPLElBQUFBLE1BQU0sRUFBRSxJQUQ2QjtBQUVyQ0MsSUFBQUEsVUFBVSxFQUFFUCxxQkFBT1EsTUFBUCxDQUFjRCxVQUZXO0FBR3JDRSxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsTUFBTSxFQUFFO0FBQVYsS0FIOEI7QUFJckNDLElBQUFBLFlBQVksRUFBRTtBQUNWQyxNQUFBQSxnQkFBZ0IsRUFBRSxHQURSO0FBRVZDLE1BQUFBLElBQUksRUFBRTtBQUZJO0FBSnVCLEdBQS9CLENBQVI7QUFVRlosRUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsc0NBQXFCSCxRQUFyQixFQUErQjtBQUNuQ2UsSUFBQUEsR0FBRyxFQUFFQyxPQUFPLENBQUNEO0FBRHNCLEdBQS9CLENBQVI7QUFHRWIsRUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVFjLHdDQUFrQkMsU0FBbEIsc0JBQVI7QUFFQWhCLEVBQUFBLEdBQUcsQ0FBQ2lCLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQW1CO0FBQzlCTCxJQUFBQSxPQUFPLENBQUNELEdBQVI7QUFDQU0sSUFBQUEsR0FBRyxDQUFDQyxNQUFKLENBQVcsT0FBWDtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsTUFBTSxHQUFHQyxpQkFBS0MsWUFBTCxDQUFrQnZCLEdBQWxCLENBQWY7O0FBQ0EsU0FBT3FCLE1BQVA7QUFDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBodHRwICBmcm9tICdodHRwJztcclxuaW1wb3J0IGNvcnMgIGZyb20gJ2NvcnMnO1xyXG5pbXBvcnQgYm9keVBhcnNlciAgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQgd2VicGFjayBmcm9tICd3ZWJwYWNrJztcclxuaW1wb3J0IHdlYnBhY2tEZXZNaWRkbGV3YXJlIGZyb20gJ3dlYnBhY2stZGV2LW1pZGRsZXdhcmUnO1xyXG5pbXBvcnQgd2VicGFja0hvdE1pZGRsZXdhcmUgZnJvbSAnd2VicGFjay1ob3QtbWlkZGxld2FyZSc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vd2VicGFjay5jb25maWcnO1xyXG5cclxuY29uc3QgY29tcGlsZXIgPSB3ZWJwYWNrKGNvbmZpZylcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbiAgYXBwLnVzZShjb3JzKCkpO1xyXG4gIGFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG4gIGFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ3B1ZycpXHJcblxyXG4gIGFwcC51c2Uod2VicGFja0Rldk1pZGRsZXdhcmUoY29tcGlsZXIsIHtcclxuICAgIG5vSW5mbzogdHJ1ZSxcclxuICAgIHB1YmxpY1BhdGg6IGNvbmZpZy5vdXRwdXQucHVibGljUGF0aCxcclxuICAgIHN0YXRzOiB7IGNvbG9yczogdHJ1ZSB9LFxyXG4gICAgd2F0Y2hPcHRpb25zOiB7XHJcbiAgICAgICAgYWdncmVnYXRlVGltZW91dDogMzAwLFxyXG4gICAgICAgIHBvbGw6IHRydWVcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmFwcC51c2Uod2VicGFja0hvdE1pZGRsZXdhcmUoY29tcGlsZXIsIHtcclxuICAgIGxvZzogY29uc29sZS5sb2csXHJcbn0pKTtcclxuICBhcHAudXNlKGV4cHJlc3Muc3RhdGljKGAke19fZGlybmFtZX0vLi4vcHVibGljL2Rpc3QvYCkpO1xyXG5cclxuICBhcHAuZ2V0KCcqJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKClcclxuICAgIHJlcy5yZW5kZXIoJ2luZGV4Jyk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGFwcCk7XHJcbiAgcmV0dXJuIHNlcnZlcjtcclxufVxyXG4iXX0=