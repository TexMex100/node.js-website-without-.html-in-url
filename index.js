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

router.get('/page', function(req, res) {
  res.sendFile(path.join(__dirname, '/www/page.html'));
});
app.use('/page', router);

// errors
app.use(function(req, res, next) {
  res.status(404);
  res.sendFile(__dirname + '/www/errors/404.html');
});

app.listen(port, () => {
  console.log(`Main Website (your website) On Port ${port} Online!`)
});
