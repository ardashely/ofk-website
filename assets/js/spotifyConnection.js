
var settings = {
    "url": "http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=ofkxd&limit=1&nowplaying=\"true\"&format=json&api_key=--",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    let album =response.recenttracks.track[0].name;
    let artist = response.recenttracks.track[0].artist['#text'];
    let image = response.recenttracks.track[0].image[2]['#text'];

    document.getElementById("track-title").innerHTML = `Listening to ${album}`
    document.getElementById("track-image").src = image;
    console.log(response, 'Last.FM connection succsesfully');
  });
