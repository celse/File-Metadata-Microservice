var express = require('express'),
	app = express(),
	multer = require('multer'),
	upload = multer({ dest: 'uploads/'});

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');


app.post('/file-load-size',upload.single('avatar'),(req, res, next)=>{
	res.render('pages/file-size',{file:{
		file:req.file.originalname,
		size:req.file.size,
	}})
})
app.get('/',(req, res, next)=>{
	res.render('pages/index')
})


app.listen(8080,()=>{
	console.log('This app is listen port 8080');
});
