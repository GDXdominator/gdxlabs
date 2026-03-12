const creatures = document.getElementById("creatures-list");
const buttons = creatures.getElementsByTagName("p")
const creatureContainer = document.getElementById("creature-container")

const descs = new Map();
descs.set("The Idol", ["DESC DESC DESC", "how to survive"]);
descs.set("Candle Cat", ["meow meow meow", "pet it"]);

for (var i = 0; i < buttons.length; i++) {
    const button = buttons.item(i);
    button.addEventListener("click", function() {
        document.getElementById("name").textContent = button.textContent
        const guide = descs.get(button.textContent)
        if (descs.get(button.textContent) != undefined) {
            document.getElementById("desc").textContent = guide[0];
            document.getElementById("survival").textContent = guide[1];
        }
    })
}