
var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=q2PtZp2vyGmiuCZPkC6zGIiIQzOtKieq";
var query = "&q=rainbow";
//rainbow not hardcoded into code, want to get from user input AKA search result

function setup(){
  noCanvas();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
  //p5 function, give url from API and get JSON
}

function gotData(giphy){
  for (var i = 0; i < giphy.data.length; i++){
  createImg(giphy.data[0].images.original.url);
  //source of image tag
  }
}
function draw(){

}
