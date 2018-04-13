exports.tokenVerify = tokenVerify2

// This is not needed anymore and should be fixed in issue #127
function tokenVerify2(req) {
  var jwt = require('jsonwebtoken')
  return jwt.verify(req.token, process.env.SECRET, function (err, decoded) {
    if (err) {
      return {verified: false, data: null}
    } else {
      return {verified: true, data: decoded}
    }
  })

}

