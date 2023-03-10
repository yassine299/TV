//start the stream when click the button
var play = document.getElementById("stream");
var play2 = document.getElementById("btn");


//get the data information from api
const url = "https://iptv-org.github.io/api/streams.json";

fetch(url)
    .then(response => response.json())
    .then(data =>
        //when click the button play random channel 
        play.addEventListener("click", () => {
            document.getElementById("vid").src = data[Math.floor(Math.random() * data.length)].url;
            var player = videojs('hls-example');
            player.play();
        }
        )
    );
    
//search for channels 
//ps:fix the reload problem 

function select() {
    var myList = document.getElementById("myList");
    var selected = myList.options[myList.selectedIndex].text;
    fetch(url)
        .then(response => response.json())
        .then(data =>
            data.map(el => {
                if (el.channel == selected) {
                    var ch = el.url
                    document.getElementById("vid2").src = ch;
                    var player = videojs("get_channel");
                    player.play();
                }
           
            }
        )
      
    )
   
}




//Load select button 
const tv = []
fetch(url)
    .then(response => response.json())
    .then(data =>
        data.map(element => {
            if (element.channel.includes("")) {
                tv.push(element.channel);


                var select = document.getElementById("myList");
                for (var i = 0; i < tv.length; i++) {
                    var opt = tv[i];
                }


                var el = document.createElement("option");
                el.text = opt;
                el.value = opt;

                select.add(el);
            }

        }
        )
    )
