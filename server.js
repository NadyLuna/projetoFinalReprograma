const app = require("./src/app");
require('dotenv-safe').config();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`app está rodando na porta ${port}`);
});