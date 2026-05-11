const gallery = document.getElementById("gallery");
var art = gallery.getElementsByTagName("img");
const imagesFileContainer = document.getElementById("images-file");

const tagSelector = document.getElementById("tag-selector");

const viewer = document.getElementById("img-viewer");
const viewerIMG = viewer.getElementsByTagName("img");
const viewerCaption = viewer.getElementsByTagName("p")
const leftBtn = document.getElementById("Left");
const rightBtn = document.getElementById("Right");

const nameElement = document.getElementById("name");
const idPhoto = document.getElementById("id-photo");

var currImgIndex = 0;
var searchTags = [];
var imagesFile = "/Files/art.tsv";

function changeImg(imgIndex) {
    var piece = art.item(imgIndex);
    viewerIMG[0].src = piece.src;
    viewerCaption[0].textContent = piece.title;
}

if (imagesFileContainer) {
    imagesFile = imagesFileContainer.src;
}

if (nameElement) {
    const characterName = nameElement.innerText.substring(6);
    searchTags.push(characterName);
}

// Gather images
async function loadImages(imagesURL, searchTags=[]) {
    try {
        const response = await fetch(imagesURL);
        const data = await response.text();
        const rows = data.split('\n').map(row => row.split('\t'));

        gallery.innerHTML = "";

        for (let i = rows.length - 1; i > 0; i--) {
            let row = rows[i];
            let tags = row[1].split(',');

            if (searchTags.length == 0 || searchTags.every(tag => tags.includes(tag))) {
                let title = row[0];
                let src = row[2];
                gallery.innerHTML += '<img title="' + title + '" src="' + src + '">';
            }
        }
    } catch (error) {
        console.error('Error fetching tsv:', error);
    }

    art = gallery.getElementsByTagName("img");
    for (let i = 0; i < art.length; i++) {
        let piece = art.item(i);
        let index = i;
        piece.addEventListener("click", function() {
            viewerIMG[0].src = piece.src;
            viewerCaption[0].textContent = piece.title;
            viewer.style.display = "block";
            currImgIndex = index;
        })
    }
}

loadImages(imagesFile, searchTags);

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

if (tagSelector) {
    tagButtons = tagSelector.getElementsByTagName("button");
    const oldButtonColor = tagButtons[0].style.backgroundColor;
    for (let i = 0; i < tagButtons.length; i++) {
        let btn = tagButtons[i];
        let tag = btn.innerHTML;
        btn.addEventListener("click", function() {
            if (searchTags.includes(tag)) {
                searchTags.pop(tag);
                btn.style.backgroundColor = oldButtonColor;
            } else {
                searchTags.push(tag);
                btn.style.backgroundColor = "rgb(75, 75, 75)";
            }
            loadImages(imagesFile, searchTags);
        })
    }
}

if (idPhoto) {
    idPhoto.addEventListener("click", function() {
        viewerIMG[0].src = idPhoto.src;
        viewerCaption[0].textContent = idPhoto.title;
        viewer.style.display = "block";
        leftBtn.style.display = "none";
        rightBtn.style.display = "none";
    })
}