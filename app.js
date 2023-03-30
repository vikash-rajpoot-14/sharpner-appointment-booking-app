const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const userRouter = require("./routes/user")
app.use(cors())

const sequelize = require('./util/database')
app.use(bodyParser.json({ extended: false }));
app.use('/', userRouter)

app.all('/', (req, res) => {
    res.send("<h2>Page Not Found</h2>")
})
sequelize.sync().then(() => {
    app.listen(3000)
}).catch((err) => {
    console.log(err)
});
