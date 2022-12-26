const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();

const port = 8443;

// making *.css file readable
app.use('/', express.static(require('path').join(__dirname, '/www/assets')));
app.use('/:a/', express.static(require('path').join(__dirname, '/www/assets')));
app.use('/:a/:b/', express.static(require('path').join(__dirname, '/www/assets')));
app.use('/:a/:b/:c/', express.static(require('path').join(__dirname, '/www/assets')));
app.use('/:a/:b/:c/:d/', express.static(require('path').join(__dirname, '/www/assets')));
app.set('views', require('path').join(__dirname, '/www'));

// pages
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/www/index.html'));
});
app.use('/', router);

router.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, '/www/contact.html'));
});
app.use('/contact', router);

router.get('/terms-of-service', function(req, res) {
  res.sendFile(path.join(__dirname, '/www/terms-of-service.html'));
});
app.use('/terms-of-service', router);

router.get('/liveradio', function(req, res) {
  res.sendFile(path.join(__dirname, '/www/liveradio.html'));
});
app.use('/liveradio', router);

router.get('/discord', function(req, res) {
  res.sendFile(path.join(__dirname, '/www/discord.html'));
});
app.use('/discord', router);

router.get('/testpage', function(req, res) {
  res.sendFile(path.join(__dirname, '/www/testpage.html'));
});
app.use('/testpage', router);

// errors
app.use(function(req, res, next) {
  res.status(404);
  res.sendFile(__dirname + '/www/404.html');
});

app.listen(port, () => {
  console.log(`Main Website solomusic.tk On Port ${port} Online!`)
});