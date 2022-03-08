//config
//.env
require("dotenv").config();
const port = process.env.PORT ?  process.env.PORT : 8080;
//logger
//  require('./app-logger.js').createLogger();
//DI
require('./app-container').setup();
//app
const app = require('./app');
//swagger
//db - stratup
require('./data/schemas/createConnection.js').createDataConnection();

//server-startup
app.listen(port, () => console.log(`Server is running on PORT: ${port}`));

// PORT = 4200
// domain = "localhost"
// db_port = 27017
// database_data_name = "quizDb"
// database_records_name = "quizDbRecords"
// database_users_name = "quizDbUsers"
