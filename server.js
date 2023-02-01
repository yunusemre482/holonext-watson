const express = require('express');

const app = express();

app.get('/watson', (req, res) => {
	res.sendFile(__dirname + '/watson/index.html');
});

app.get('/migros', (req, res) => {
	res.sendFile(__dirname + '/migros/index.html');
});

app.use('/data/watson', express.static('watson'))
app.use('/data/migros', express.static('migros'))


app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
