const app = require('./server/config/mongoose.js')
app.listen(9090, () => console.log('listening on port 9090'));
require('./server/config/routes.js')(app);

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

