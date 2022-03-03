//config
//.env
require("dotenv").config();
const port = process.env.port ?  process.env.port : 8080;
//DI
require('./app-container').setup();
//logger

//app
const app = require('./app');
//swagger//server-startup
app.listen(port, () => console.log(`Server is running on PORT: ${port}`));