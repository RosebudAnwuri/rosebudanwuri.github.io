var express = require('express');
var crypto=require("crypto");
var path = require('path');
var multer = require('multer');
var Entry = require('./models/entries'); 


var port = process.env.PORT || 3142