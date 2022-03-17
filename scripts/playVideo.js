youtube();

async function youtube() {
  try {
    let x = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=rrr&type=video&key=AIzaSyAeiEv8dmO2Nv2gDPe-uUswEKcGmW54Mt4&maxResults=3`);
    let res = await x.json();
    let videos = res.items;
    console.log('videos:', videos)

    appendVideos(videos);
  } catch (er) {
    console.log("er:", er);
  }
}

let right1 = document.getElementById("right");

function appendVideos(video) {
  right1.innerHTML = "";
  video.forEach((elem) => {


    let { snippet } = elem;

    let div = document.createElement("div");
    let img1 = document.createElement("img");
    img1.src = snippet.thumbnails.medium.url;
    img1.style.width = "50%";
    img1.style.height = "100%";

    let name = document.createElement("p");
    name.innerText = snippet.title;

    let obj={
      snippet,
      videoId:elem.id,
    }

    div.onclick = () => {
      nextPage(obj);
    }

    div.append(img1, name);
    right1.append(div);
  })
}


function nextPage(dataOf) {

  localStorage.setItem("pavan", JSON.stringify(dataOf));
  console.log('dataasd:', dataOf)


  window.location.href = "./playVideo.html";

}




