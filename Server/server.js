const app = require("./app");
const PORT = process.env.PORT_SERVER || 7000;

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});
