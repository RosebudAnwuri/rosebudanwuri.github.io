var express = require('express');
var compression = require('compression');


var path = require('path');

var app = express();
app.use(compression());
var session = require('express-session');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(require('path').join(__dirname, 'public')));

var csv = require('csv'); 
// var obj = csv(); 
var obj = require('./music_df');
var _ = require('lodash');
var math = require('mathjs');


/* var max_difficult_words=obj.map(function (single_item){ return single_item.difficult_words; })
var max_words=_.max(max_difficult_words)
var loudness=obj1.map(function (single_item){ return (single_item.loudness+24.34)/24.34; });
var speechiness=obj1.map(function (single_item){ return single_item.speechiness; });
var difficult_words=obj1.map(function (single_item){ return single_item.difficult_words/max_words; });
var danceability=obj1.map(function (single_item){ return single_item.danceability; });
var title=obj1.map(function (single_item){ return {title: single_item.title,speechiness: single_item.speechiness,loudness:single_item.loudness,difficult_words:single_item.difficult_words/max_words, danceability:single_item.danceability}; });
var final_df={loudness:math.median(loudness),speechiness:math.median(speechiness),difficult_words:math.median(difficult_words),danceability:math.median(danceability),details:title}
	
	console.log(final_df); */
	
app.post('/compare',function(req,res,next){
	var artist_names=req.body.artists;
	var artist_list=obj.map(function (single_item){ return single_item.artist; });
	final_list=[];
	
		for (i=0;i< artist_names.length;i++){
			if (artist_list.includes(artist_names[i])){
	var obj1=_.filter(obj, function(o) { return o.artist==artist_names[i]; });
	
	
	var max_difficult_words=obj.map(function (single_item){ return single_item.difficult_words; });
	var max_words=_.max(max_difficult_words)
	var loudness=obj1.map(function (single_item){ return (single_item.loudness+24.34)/24.34; });
	var speechiness=obj1.map(function (single_item){ return single_item.speechiness; });
	var image=obj1.map(function (single_item){ return single_item.Image; });
	var difficult_words=obj1.map(function (single_item){ return single_item.difficult_words/max_words; });
	var danceability=obj1.map(function (single_item){ return single_item.danceability; });
	var energy=obj1.map(function (single_item){ return single_item.energy; });
	var metrics={Loudness:math.median(loudness).toFixed(2),Speechiness:math.median(speechiness).toFixed(2),Difficult_words:math.median(difficult_words).toFixed(2),Danceability:math.median(danceability).toFixed(2),Energy:math.median(energy).toFixed(2),image:image[0]}
	var final_df={artist:artist_names[i],data:metrics}	
	final_list[i]=final_df
	
		}
	
	/* res.send(final_df) */
		else{
		var final_list="Artist '"+artist_names[i]+"' does not exist."
	}
	}
	
	res.send(final_list);
	
	
})
	

	
app.post('/dashboard',function(req,res,next){
	var artist_name=req.body.artist
	var artist_list=obj.map(function (single_item){ return single_item.artist; });
	if (artist_list.includes(artist_name)){
	var obj1=_.filter(obj, function(o) { return o.artist==artist_name; });
	
	
	var max_difficult_words=obj.map(function (single_item){ return single_item.difficult_words; });
	var max_words=_.max(max_difficult_words)
	var loudness=obj1.map(function (single_item){ return (single_item.loudness+24.34)/24.34; });
	var speechiness=obj1.map(function (single_item){ return single_item.speechiness; });
	var image=obj1.map(function (single_item){ return single_item.Image; });
	var difficult_words=obj1.map(function (single_item){ return single_item.difficult_words/max_words; });
	var danceability=obj1.map(function (single_item){ return single_item.danceability; });
	var title=obj1.map(function (single_item){ return {title: single_item.title,speechiness: single_item.speechiness,loudness:(single_item.loudness+24.34)/24.34,difficult_words:single_item.difficult_words/max_words, danceability:single_item.danceability}; });
	var final_df={loudness:math.median(loudness),speechiness:math.median(speechiness),difficult_words:math.median(difficult_words),danceability:math.median(danceability),image:image[0],details:title}
	
	console.log(final_df);
	res.send(final_df)
	}
	else{
		res.send("Artist '"+artist_name+"' does not exist.")
	}
})
	
app.listen(process.env.PORT || 3142, function (){

console.log("Our APP is now live");

})