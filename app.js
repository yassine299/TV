//start the stream when click the button
var play = document.getElementById("stream");

//get the data information from api
const url = "https://iptv-org.github.io/iptv/channels.json";

fetch(url)
    .then(response => response.json())
    .then(data =>
        //channelurl.push(data[Math.floor(Math.random() * data.length)].url),
        play.addEventListener("click", () => {
            document.getElementById("vid").src = data[Math.floor(Math.random() * data.length)].url;
            var player = videojs('hls-example');
            player.play();
        }
        )
    );
