"use strict";

require("dotenv").config();

var express = require("express");

var path = require("path");

var sessionHandler = require("./middleware/session-handler");

var logger = require("./middleware/logger");

var bodyParser = require('body-parser'); // Establishes connection to the database on server start


var db = require("./db");

var app = express(); // Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.

app.use(sessionHandler); // Logs the time, session_id, method, and url of incoming requests.

app.use(logger); // Serves up all static and generated assets in ../client/dist.

app.use(express["static"](path.join(__dirname, "../client/dist")));
app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: true
})); //inserts

app.post('/checkout', function (req, res) {
  // console.log(req.body, "reqqqqq")
  // console.log(req.body.s_id,req.body.name,req.body.email, req.body.password, req.body.lineOne, req.body.lineTwo, req.body.state, req.body.zip, req.body.phoneNum, req.body.CCNum, req.body.expDate, req.body.CVV, req.body.billingZip)
  var query = "INSERT INTO responses (s_id, name, email, password, lineOne, lineTwo, state, zip, phoneNum, CCNum, expDate, CVV, billingZip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  var queryArgs = [req.body.s_id, req.body.name, req.body.email, req.body.password, req.body.lineOne, req.body.lineTwo, req.body.state, req.body.zip, req.body.phoneNum, req.body.CCNum, req.body.expDate, req.body.CVV, req.body.billingZip];
  return db.queryAsync(query, queryArgs).then(function () {
    res.status(201).send('SUCEESSS! from app.post!');
  })["catch"](function (error) {
    console.log(error, "error in app.post");
  });
});
/****
 *
 *
 * Other routes here....
 *
 *
 */
//

app.listen(process.env.PORT);
console.log("Listening at http://localhost:".concat(process.env.PORT));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uZmlnIiwiZXhwcmVzcyIsInBhdGgiLCJzZXNzaW9uSGFuZGxlciIsImxvZ2dlciIsImJvZHlQYXJzZXIiLCJkYiIsImFwcCIsInVzZSIsImpvaW4iLCJfX2Rpcm5hbWUiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicG9zdCIsInJlcSIsInJlcyIsInF1ZXJ5IiwicXVlcnlBcmdzIiwiYm9keSIsInNfaWQiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImxpbmVPbmUiLCJsaW5lVHdvIiwic3RhdGUiLCJ6aXAiLCJwaG9uZU51bSIsIkNDTnVtIiwiZXhwRGF0ZSIsIkNWViIsImJpbGxpbmdaaXAiLCJxdWVyeUFzeW5jIiwidGhlbiIsInN0YXR1cyIsInNlbmQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJsaXN0ZW4iLCJwcm9jZXNzIiwiZW52IiwiUE9SVCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpO1xuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3Qgc2Vzc2lvbkhhbmRsZXIgPSByZXF1aXJlKFwiLi9taWRkbGV3YXJlL3Nlc3Npb24taGFuZGxlclwiKTtcbmNvbnN0IGxvZ2dlciA9IHJlcXVpcmUoXCIuL21pZGRsZXdhcmUvbG9nZ2VyXCIpO1xudmFyIGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpXG5cblxuLy8gRXN0YWJsaXNoZXMgY29ubmVjdGlvbiB0byB0aGUgZGF0YWJhc2Ugb24gc2VydmVyIHN0YXJ0XG5jb25zdCBkYiA9IHJlcXVpcmUoXCIuL2RiXCIpO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbi8vIEFkZHMgYHJlcS5zZXNzaW9uX2lkYCBiYXNlZCBvbiB0aGUgaW5jb21pbmcgY29va2llIHZhbHVlLlxuLy8gR2VuZXJhdGVzIGEgbmV3IHNlc3Npb24gaWYgb25lIGRvZXMgbm90IGV4aXN0LlxuYXBwLnVzZShzZXNzaW9uSGFuZGxlcik7XG5cbi8vIExvZ3MgdGhlIHRpbWUsIHNlc3Npb25faWQsIG1ldGhvZCwgYW5kIHVybCBvZiBpbmNvbWluZyByZXF1ZXN0cy5cbmFwcC51c2UobG9nZ2VyKTtcblxuLy8gU2VydmVzIHVwIGFsbCBzdGF0aWMgYW5kIGdlbmVyYXRlZCBhc3NldHMgaW4gLi4vY2xpZW50L2Rpc3QuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi4vY2xpZW50L2Rpc3RcIikpKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpXG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKVxuXG5cbi8vaW5zZXJ0c1xuYXBwLnBvc3QoJy9jaGVja291dCcsIChyZXEsIHJlcykgPT4ge1xuICAvLyBjb25zb2xlLmxvZyhyZXEuYm9keSwgXCJyZXFxcXFxXCIpXG4gIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5LnNfaWQscmVxLmJvZHkubmFtZSxyZXEuYm9keS5lbWFpbCwgcmVxLmJvZHkucGFzc3dvcmQsIHJlcS5ib2R5LmxpbmVPbmUsIHJlcS5ib2R5LmxpbmVUd28sIHJlcS5ib2R5LnN0YXRlLCByZXEuYm9keS56aXAsIHJlcS5ib2R5LnBob25lTnVtLCByZXEuYm9keS5DQ051bSwgcmVxLmJvZHkuZXhwRGF0ZSwgcmVxLmJvZHkuQ1ZWLCByZXEuYm9keS5iaWxsaW5nWmlwKVxuICB2YXIgcXVlcnkgPSBgSU5TRVJUIElOVE8gcmVzcG9uc2VzIChzX2lkLCBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGxpbmVPbmUsIGxpbmVUd28sIHN0YXRlLCB6aXAsIHBob25lTnVtLCBDQ051bSwgZXhwRGF0ZSwgQ1ZWLCBiaWxsaW5nWmlwKSBWQUxVRVMgKD8sID8sID8sID8sID8sID8sID8sID8sID8sID8sID8sID8sID8pYFxuICB2YXIgcXVlcnlBcmdzID0gW3JlcS5ib2R5LnNfaWQscmVxLmJvZHkubmFtZSxyZXEuYm9keS5lbWFpbCwgcmVxLmJvZHkucGFzc3dvcmQsIHJlcS5ib2R5LmxpbmVPbmUsIHJlcS5ib2R5LmxpbmVUd28sIHJlcS5ib2R5LnN0YXRlLCByZXEuYm9keS56aXAsIHJlcS5ib2R5LnBob25lTnVtLCByZXEuYm9keS5DQ051bSwgcmVxLmJvZHkuZXhwRGF0ZSwgcmVxLmJvZHkuQ1ZWLCByZXEuYm9keS5iaWxsaW5nWmlwXVxuICByZXR1cm4gZGIucXVlcnlBc3luYyhxdWVyeSwgcXVlcnlBcmdzKVxuICAudGhlbigoKSA9PiB7XG4gICAgcmVzLnN0YXR1cygyMDEpLnNlbmQoJ1NVQ0VFU1NTISBmcm9tIGFwcC5wb3N0IScpXG4gIH0pXG4gIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnJvciwgXCJlcnJvciBpbiBhcHAucG9zdFwiKVxuICB9KVxufSlcblxuLyoqKipcbiAqXG4gKlxuICogT3RoZXIgcm91dGVzIGhlcmUuLi4uXG4gKlxuICpcbiAqLy8vXG5cbmFwcC5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCk7XG5jb25zb2xlLmxvZyhgTGlzdGVuaW5nIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtwcm9jZXNzLmVudi5QT1JUfWApO1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPLENBQUMsUUFBRCxDQUFQLENBQWtCQyxNQUFsQjs7QUFDQSxJQUFNQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQyxTQUFELENBQXZCOztBQUNBLElBQU1HLElBQUksR0FBR0gsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBQ0EsSUFBTUksY0FBYyxHQUFHSixPQUFPLENBQUMsOEJBQUQsQ0FBOUI7O0FBQ0EsSUFBTUssTUFBTSxHQUFHTCxPQUFPLENBQUMscUJBQUQsQ0FBdEI7O0FBQ0EsSUFBSU0sVUFBVSxHQUFHTixPQUFPLENBQUMsYUFBRCxDQUF4QixDLENBR0E7OztBQUNBLElBQU1PLEVBQUUsR0FBR1AsT0FBTyxDQUFDLE1BQUQsQ0FBbEI7O0FBRUEsSUFBTVEsR0FBRyxHQUFHTixPQUFPLEVBQW5CLEMsQ0FFQTtBQUNBOztBQUNBTSxHQUFHLENBQUNDLEdBQUosQ0FBUUwsY0FBUixFLENBRUE7O0FBQ0FJLEdBQUcsQ0FBQ0MsR0FBSixDQUFRSixNQUFSLEUsQ0FFQTs7QUFDQUcsR0FBRyxDQUFDQyxHQUFKLENBQVFQLE9BQU8sVUFBUCxDQUFlQyxJQUFJLENBQUNPLElBQUwsQ0FBVUMsU0FBVixFQUFxQixnQkFBckIsQ0FBZixDQUFSO0FBQ0FILEdBQUcsQ0FBQ0MsR0FBSixDQUFRSCxVQUFVLENBQUNNLElBQVgsRUFBUjtBQUNBSixHQUFHLENBQUNDLEdBQUosQ0FBUVAsT0FBTyxDQUFDVyxVQUFSLENBQW1CO0VBQUVDLFFBQVEsRUFBRTtBQUFaLENBQW5CLENBQVIsRSxDQUdBOztBQUNBTixHQUFHLENBQUNPLElBQUosQ0FBUyxXQUFULEVBQXNCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0VBQ2xDO0VBQ0E7RUFDQSxJQUFJQyxLQUFLLGdMQUFUO0VBQ0EsSUFBSUMsU0FBUyxHQUFHLENBQUNILEdBQUcsQ0FBQ0ksSUFBSixDQUFTQyxJQUFWLEVBQWVMLEdBQUcsQ0FBQ0ksSUFBSixDQUFTRSxJQUF4QixFQUE2Qk4sR0FBRyxDQUFDSSxJQUFKLENBQVNHLEtBQXRDLEVBQTZDUCxHQUFHLENBQUNJLElBQUosQ0FBU0ksUUFBdEQsRUFBZ0VSLEdBQUcsQ0FBQ0ksSUFBSixDQUFTSyxPQUF6RSxFQUFrRlQsR0FBRyxDQUFDSSxJQUFKLENBQVNNLE9BQTNGLEVBQW9HVixHQUFHLENBQUNJLElBQUosQ0FBU08sS0FBN0csRUFBb0hYLEdBQUcsQ0FBQ0ksSUFBSixDQUFTUSxHQUE3SCxFQUFrSVosR0FBRyxDQUFDSSxJQUFKLENBQVNTLFFBQTNJLEVBQXFKYixHQUFHLENBQUNJLElBQUosQ0FBU1UsS0FBOUosRUFBcUtkLEdBQUcsQ0FBQ0ksSUFBSixDQUFTVyxPQUE5SyxFQUF1TGYsR0FBRyxDQUFDSSxJQUFKLENBQVNZLEdBQWhNLEVBQXFNaEIsR0FBRyxDQUFDSSxJQUFKLENBQVNhLFVBQTlNLENBQWhCO0VBQ0EsT0FBTzFCLEVBQUUsQ0FBQzJCLFVBQUgsQ0FBY2hCLEtBQWQsRUFBcUJDLFNBQXJCLEVBQ05nQixJQURNLENBQ0QsWUFBTTtJQUNWbEIsR0FBRyxDQUFDbUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLDBCQUFyQjtFQUNELENBSE0sV0FJQSxVQUFDQyxLQUFELEVBQVc7SUFDaEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLEVBQW1CLG1CQUFuQjtFQUNELENBTk0sQ0FBUDtBQU9ELENBWkQ7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFHOztBQUVIOUIsR0FBRyxDQUFDaUMsTUFBSixDQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBdkI7QUFDQUwsT0FBTyxDQUFDQyxHQUFSLHlDQUE2Q0UsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQXpEIn0=