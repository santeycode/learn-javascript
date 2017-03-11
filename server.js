var express = require('express');
var path = require('path');
var exampes = express();
var development = express();
var open = require('open');
var serveIndex = require('serve-index');

var examplesDir = path.join(process.cwd(), 'examples');
var developmentDir = path.join(process.cwd(), 'development');
var bootstrapDir = require.resolve('bootstrap').replace(/dist.*$/, 'dist');
var aceDir = require.resolve('ace-builds/src-min/ace').replace(/\/ace\.js$/, '');

exampes.use(express.static(examplesDir));
exampes.use('/bootstrap/', express.static(bootstrapDir));
exampes.use('/ace/', express.static(aceDir));
exampes.use(serveIndex(examplesDir, { 'icons': true }));

development.use(express.static(developmentDir));
development.use(serveIndex(developmentDir, { 'icons': true }));

exampes.listen(3000, function(err) {
    if (err) return;
    open('http://localhost:3000');
    console.log('Open examples: http://localhost:3000');
});

development.listen(3001, function(err) {
    if (err) return;
    open('http://localhost:3001');
    console.log('Open development: http://localhost:3001');
});
