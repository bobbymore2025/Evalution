const app = require("./index");
const connect = require("./configs/db");

app.listen(8555, async function () {
  await connect();
  console.log("listening on port 8555");
});
