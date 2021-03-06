
module.exports.responseErr = (res, err) => {
  console.error(err)
//  if (err instanceof AccessControlException) {
//    res.status(403).json({error: err.error})
//  } else {
    res.status(500).json({error: 'Could not serve', err})
//  }
}

// Sends an empty JSON message with status 200
module.exports.responseOk = res => {
  res.json({})
}

module.exports.serverUrl = (req) => req.protocol + '://' + req.get('host')
