// Artist, title, date, release type
var charLimit = 25;
var discography = [
    ["GDX", "Enter the Lab", "2025/08/23", "Single"],
    ["GDX", "Drowning in Reverb", "2025/08/24", "Single"],
    ["GDX", "Madscience", "2025/09/21", "Single"],
    ["GDX", "Apricot", "2025/07/14", "Single"],
    ["GDX", "Kill People / Madviolence", "2025/07/13", "Single"],
    ["GDX", "Break Butcher", "2025/02/10", "Single"],
    ["GDX", "Madscientist Groove", "2026/06/14", "Single"],
    ["GDX", "MADSCIENCE", "2026/01/26", "Album&nbsp"],
    ["GDX", "Rush", "2026/12/26", "Single"]
];
var chronology = [
    ["GDX", "Drowning in Reverb", "2024/05/09", "Track"],
    ["GDX", "Speed Up !!", "2024/05/10", "Track"],
    ["GDX", "Lab Report", "2024/05/10", "Track"],
    ["GDX", "Enter the Lab", "2024/05/16", "Track"],
    ["GDX", "Eureka!", "2024/06/27", "Track"],
    ["GDX", "Madscientist Groove", "2024/06/14", "Track"],
    ["GDX", "Kill People / Madviolence", "2024/07/13", "Track"],
    ["GDX", "Apricot", "2024/07/14", "Track"],
    ["GDX", "Dark Matter", "2024/08/10", "Track"],
    ["GDX", "Madscience", "2024/10/01", "Track"],
    ["GDX", "Rush", "2024/12/26", "Track"],
    ["GDX", "Break Butcher", "2024/02/10", "Track"],
    ["GDX", "Ube Mamon", "2025/01/24", "Track"],
    ["GDX", "MADSCIENCE", "2026/01/26", "Album"],
];
var discographyText = document.getElementById("discography");

function switchList(arr, heading) {
    function fillWhiteSpace(str) {
        if (str.length <= charLimit) {
            for (var j = str.length; j < charLimit; j++) {
                str += ".";
            }
        } else {
            str = str.substring(0, charLimit - 3) + "...";
        }
        return str;
    }

    discographyText.innerHTML = heading + "<br><br>";
    for (var i = 0; i < arr.length; i++) {
        var info = arr[i];
        var artist = info[0];
        var title = info[1];
        var date = info[2];
        var type = info[3];

        artist = fillWhiteSpace(artist);
        title = fillWhiteSpace(title);
        date = fillWhiteSpace(date);

        discographyText.innerHTML += artist + " | " + title + " | " + date + " | " + type + "<br><br>";
    }
}

document.getElementById("SortByCreation").addEventListener("click", function() {
    switchList(chronology, "Chronology")
}, false)

document.getElementById("SortByRelease").addEventListener("click", function() {
    switchList(discography, "Discography")
}, false)

switchList(chronology, "Chronology");