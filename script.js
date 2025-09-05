console.log("Let's write JAVASCRIPT");
let currentSong = new Audio();
let playBtn = document.getElementById("play");
let prevBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");
let songs = [];

function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs() {
  let a = await fetch("http://127.0.0.1:5500/songs/");
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let i = 0; i < as.length; i++) {
    const element = as[i];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1]);
    }
  }
  return songs;
}

const playMusic = (track) => {
  // let audio = new Audio("/songs/" + track);
  currentSong.src = "/songs/" + track;
  currentSong.play();
  playBtn.src = "pause.svg";
  document.querySelector(".songinfo").innerHTML = track;
  document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
};

async function main() {
  //Get list of all songs
  // and print it to the console
  songs = await getSongs();
  console.log(songs);

  let songUL = document
    .querySelector(".songlist")
    .getElementsByTagName("ul")[0];
  for (const song of songs) {
    songUL.innerHTML =
      songUL.innerHTML +
      `<li> 
        <img class="invert" src="music.svg" alt="">
                <div class="info">
                  <div>${song.replace("%20", " ")}</div>
                  <div>BTS</div>
                </div>
                <img class="invert" src="playnow.svg" alt="">
        
        
        </li>`;
  }
  //Attach an event listener to each song
  Array.from(
    document.querySelector(".songlist").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      let info = e.querySelector(".info");
      if (info) {
        console.log(info.firstElementChild.innerHTML);
      }
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
    });
  });

  //Attach an event listener to previous, play, and next buttons
  // play.addEventListener("click", ()=>{
  //     if(currentSong.paused){
  //         currentSong.play();
  //         play.src = "pause.svg";
  //     }
  //     else{
  //         currentSong.pause();
  //         play.src = "play.svg";
  //     }
  //     }

  // Get button elements by their IDs from HTML
  let playBtn = document.getElementById("play");
  let prevBtn = document.getElementById("previous");
  let nextBtn = document.getElementById("next");

  // Example: Play/Pause toggle
  playBtn.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      playBtn.src = "pause.svg"; // change icon to pause
    } else {
      currentSong.pause();
      playBtn.src = "play.svg"; // change icon back to play
    }
  });

  //Listen for timeupdate event
  currentSong.addEventListener("timeupdate", () => {
    console.log(currentSong.currentTime, currentSong.duration);
    document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(
      currentSong.currentTime
    )}/${secondsToMinutesSeconds(currentSong.duration)}`;
    document.querySelector(".seekbar .circle").style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
    // const percent = (currentSong.currentTime / currentSong.duration) * 100;
    // document.querySelector(".circle").style.transform = `translateX(${percent}%)`;
  });

  //Add event listener to the seekbar
  document.querySelector(".seekbar").addEventListener("click", (e) => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".seekbar .circle").style.left = percent + "%";
    currentSong.currentTime = (currentSong.duration * percent) / 100;
  });

  //Add an event listener for hamburger
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  });

  //Add an event listener for close button
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-120%";
  });

//Add an event listener for previous button
previous.addEventListener("click", ()=>{
  console.log("Previous button clicked");
  console.log(currentSong.src);

  let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]); 
  if((index-1>=0)){
    playMusic(songs[index-1])
  }

})

//Add an event listener for next button
next.addEventListener("click", ()=>{
  console.log("Next button clicked");
  let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]); 

  if((index+1< songs.length)){
    playMusic(songs[index+1])
  }

})

  //Play the first song
  //   var audio = new Audio(songs[0]);
  //   audio.play();
}

main();
