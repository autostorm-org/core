import worker from "./worker";

worker.on("message", function (msg: any, next: any, id: any) {
  console.log("Message id : " + id);
  console.log(msg);
  next();
});

// optional error listeners
worker.on("error", function (err: any, msg: any) {
  console.log("ERROR", err, msg.id);
});
worker.on("exceeded", function (msg: any) {
  console.log("EXCEEDED", msg.id);
});
worker.on("timeout", function (msg: any) {
  console.log("TIMEOUT", msg.id, msg.rc);
});

worker.start();

process.on("exit", async function () {
  console.log("Safe exit");
});
