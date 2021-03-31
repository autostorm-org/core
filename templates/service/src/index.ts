import app from "./app";
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server Started at Port, ${port}`);
});

process.on("exit", async function () {
  console.log("Safe exit");
});
