const app = require('./app')

app.listen(3000, () => {
    console.log('Server Started');
})

module.exports = app;