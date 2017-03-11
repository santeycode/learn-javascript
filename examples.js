var express = require('express');
var path = require('path');
var app = express();
var serveIndex = require('serve-index');

var examplesDir = path.join(process.cwd(), 'examples');
var bootstrapDir = require.resolve('bootstrap').replace(/dist.*$/, 'dist');
var aceDir = require.resolve('ace-builds/src-min/ace').replace(/\/ace\.js$/, '');

app.use(express.static(examplesDir));
app.use('/bootstrap/', express.static(bootstrapDir));
app.use('/ace/', express.static(aceDir));
app.use(serveIndex(examplesDir, { 'icons': true }));

app.listen(3000);
