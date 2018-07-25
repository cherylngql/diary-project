const {db} = require('./server/db.js'); 
const app = require('./server');
const port = process.env.PORT || 3000;

db.sync()  // sync our database
  .then(function(){
    app.listen(port, function () {
      console.log("Knock, knock");
      console.log("Who's there?");
      console.log(`Your server, listening on port ${port}`);
    }) // then start listening with our express server once we have synced
  })
