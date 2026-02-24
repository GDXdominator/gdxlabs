const gallery = document.getElementById("gallery");
const art = gallery.getElementsByTagName("img");
const viewer = document.getElementById("img-viewer");
const viewerIMG = viewer.getElementsByTagName("img");
const viewerCaption = viewer.getElementsByTagName("p")

const leftBtn = document.getElementById("Left");
const rightBtn = document.getElementById("Right");

const idPhoto = document.getElementById("id-photo");

var currImgIndex = 0;

function changeImg(imgIndex) {
    var piece = art.item(imgIndex);
    viewerIMG[0].src = piece.src;
    viewerCaption[0].textContent = piece.title;
}

for (var i = 0; i < art.length; i++) {
    const piece = art.item(i);
    const index = i;
    piece.addEventListener("click", function() {
        viewerIMG[0].src = piece.src;
        viewerCaption[0].textContent = piece.title;
        viewer.style.display = "block";
        currImgIndex = index;
    })
}

document.getElementById("close-viewer").addEventListener("click", function() {
    viewer.style.display = "none";
    leftBtn.style.display = "inline";
    rightBtn.style.display = "inline";
})

leftBtn.addEventListener("click", function() {
    currImgIndex = (currImgIndex > 0) ? currImgIndex - 1 : art.length - 1;
    changeImg(currImgIndex);
})

rightBtn.addEventListener("click", function() {
    currImgIndex = (currImgIndex < art.length - 1) ? currImgIndex + 1 : 0;
    changeImg(currImgIndex);
})

idPhoto.addEventListener("click", function() {
    viewerIMG[0].src = idPhoto.src;
    viewerCaption[0].textContent = idPhoto.title;
    viewer.style.display = "block";
    leftBtn.style.display = "none";
    rightBtn.style.display = "none";
})