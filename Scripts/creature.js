const creatures = document.getElementById("creatures-list");
const buttons = creatures.getElementsByTagName("p")
const creatureContainer = document.getElementById("creature-container")

function link(link, text, newTab=false) {
    var str = "<a href=\"" + link + "\">" + text + "</a>";
    if (newTab == true) {
        str = str.replace("<a", "<a target=\"_blank\"");
    }
    return str;
}

const poserLogos = [
    "https://peaceville.com/wp-content/uploads/2015/09/mayhemlogo.png",
    "https://www.metal-archives.com/images/3/5/4/0/3540456775_logo.jpg?3530",
    "https://deafheaven.com/cdn/shop/files/DFH_HD_aef9aa70-3a90-4a62-9b44-58a511e7a399.jpg?v=1743613075",
    "https://www.emp.ie/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw4b2c5fe7/images/2/3/5/9/235997.jpg?sfrm=png",
    "https://1000logos.net/wp-content/uploads/2024/02/Sleep-Token-Emblem.png"
]
var poserString = "(";
for (var i = 0; i < poserLogos.length; i++) {
    poserString += link(poserLogos[i], i + 1, true) + ", ";
}
poserString = poserString.substring(0, poserString.length - 2) + ")";

const descs = new Map();
descs.set(
    "The Idol", [
        "DESC DESC DESC",
        "how to survive",
        "/Art"
    ]
);
descs.set(
    "Candle Cat", [
        "My friend Julie has written an " + link("/Bios/candlecat.html", "excellent description") + " of whoever this is.",
        "If you come across this creature, it is very important you nicely and unalarmingly say “hi” and give it many head pats.",
        "https://lh3.googleusercontent.com/rd-d/ALs6j_HvBwesKOvYheNFnaD2eVykMpg9QMsRjayjHCzzayW4fqkbCJrIKuVe4wBQHBIEveQlmcHurEKKvX9_8VKxThNenTY0un_OyFp0n_9VFAMbFd5FFEHWUkinYtSgd5IjSrnNidwIIkUwsn0GqJMYj3LkJ-b15sd9wpngmCxO5TCZPGU-HncpTMGHiqixrgaJDu2Osejv4AZWnW7f9XmK4JIfZA0vmos1_XaQs8za7K0DeU_j18MO2n06utDuAH1E8_PyrA1gs8CNNvoSJUw9aew44DFE6zdzPQXtuoCMQJyjd6MMyISY4W7GRoDIztFaHE5YECBr6yCAQe7A-GLnMIztNKsBVw5VTQmy6i3cMfXbUOX5RzcjRjBPziYTfPVxqzj39ARO0bcQ4YnIOx0iOjBSNxcsleZpnOgZWQeMvgD0_pqI1eO-MGnkwSM2bdjWt0liItryFf90kgCkxwHJHmOLXWE0JV_R3um4gM7tIhMjiCdjmFYU9BC-Js_x082JeYjf1hi4TcBFqkySdDJstypRg4hv8bsWwGYyycQ2Gn9vhCDX54kDZgGnM6jQLNGadPEkDu8Rul8NM1HJiIuaBGXFZwGsypOqHsrsdT_bFiyjqFfWWGh1sDWUouFixlJOr4swc7ir4YPWyQOcLBTOlA2kDY99KogS_ZGwMb1L5KroH-Ub_inRhamZy8C3EElOlWhOdxsYgL3bzBT5BKT28oFJx6QN_Rfxwmr9Mb0HXDPaeEzvig72t8qhi8vxz0hA_QbOi2XMEkL8-AxZ-lxKe4W1oiJlxoRHgYQHRW49mJaY-jNRGE3wHQSkxNs1YmdcHocNZm2nBjaOc7KwlM_hizUtj_jNjNb1Ny9kyqjEsPcPiP3O9TCuiSKHkZc-Z6pimvTJT_KFMFrWK4g9SwhqbE-VE6ZRU6v-8vrOjPhioCQf2QHX70DizPZmQdMBah6EHBo5EgXw-U4pyYRA7e9qR3L3LtilI6bRLj9F3QJfLitYw_Z1mrzKtqaHQcgZR2SJ8plCscqAELC_knS_D2UNZhiz2MkhJtGwo1Xvr6kS4lRyOZbvoNqvP78SvoZeU8TpHsjz1AdDQSZXG0aJnmzNlBz8OpcVyD97grNkKLTSXi6lM9h35h7V=w1920-h927?auditContext=prefetch"
    ]
);
descs.set(
    "Billy Bathory Goat", [
        "My GOAT. My friend Julie has also written an " + link("/Bios/candlecat.html", "excellent description") + " of this fellow.",
        "Should you come across this creature, do NOT utter the words “Ber-suhm suhks” while displaying certain symbols on your garments " + poserString + ", or else it will get angry, curse you by calling you a “pouh-zer”, and will be really annoying for 5 minutes.",
        "https://lh3.googleusercontent.com/rd-d/ALs6j_EwTTFeQ1_TNccnlFgblAF6kqp5sJ2UfqhPiShxyd-MNnFOQgkJrgCDVvl7_-CDR7dK73OYA1T4KQTtdB2yIkKb1uV_5s61IEo-R499762A3QAB7371rWGIY5_HdlvLEO6lJArBrOnud1HTGECyz3B8e2vMMiu3JRkLmPcE7762M9yvzEmQASWIltpg09VCcTKMcxS5woy8jtefLwMgmN1DtkwnJCXVUK0O87FHqOEvinmffOvB3bQ4NDxAo3QTkoBBEZcQMn51CB3y8zNXZPMOnkh-J1in-1YdcsUWhYhkjqDZHAufS-r-oiL90fARvf2D1LjWyHgJz1mDr-GYxByX3Td2elIetUiGvUcryRU90YEbqQVNlaIkTedN9nuNgT4hJl14hnfPqF5PQIRL2oyJ6MYIyU3p6qB4ytQ-WgtrOiKCVvlqPJfKNjPrRwfLq68s9anvLxWCjft_MjjZKn1TlyhNiFsvGviv5saDEkb1xL06Rllkgkult1ZR4g9pN2VH5S_gjwP_10QbDFCzMhdX9_oQiLcI2W8G1yBERxLbyHTOzutMEAdV-eQVW8PWeJTPQjO0vJWUSrcanHOGqtAvyXGfa1RhnN0e_yjQjU5xv1Bu2dYLq4idlo2LOwLJw3KHWeaKeXDiYxQbJHrLGIizhWhID0PY9U8xSOvEv8p4RtNXw2X89TobMsh1zMtDfxYW1DIMZ0t7VqTE3eq3sixheftKIL3rQjxfVrYURhG0fQtCNEHoWC_GCPXmOGD7UpvrUt9vk1bdABRjYWscOOObem0KOhrqai3FCc8oFpzkLPSiPVCpCXVEyWmW0r91kA28jBFDD2me_UNDPDxtXvEDbXIxtgw5yMTUgu16w-zhRe3Q1icPQSrLp4b1wb4ZXkuD7sJGEDU_4qfYXyaai7dVeM-cbnvr1oNYdWwf2EgkVvXpXUv_Y3v9HkaN32x63P2ivXIFoC9g6ny5N2jpB7zG7Tf6VnCYfjbYHxkMGx-J9GIpEEzMWsBUdc-IH0KWY6GsobW-QcmkiKlBK7OvV_Slhv1Dqr13J45JtCJ87DgqnLoK5G1MhB8dnKoysByCEwJEVmHHSrgLs84yE8XXIA69OAfAQopt0O2jVfuSdkeSwhwqmuRs=w1920-h927?auditContext=prefetch"
    ]
);
descs.set(
    "Benny Buck", [
        "A bundle of sunshine and rainbows, this guy is. " + link("/Bios/candlecat.html", "Julie also wrote something about him."),
        "Say hi! This guy would not hurt a fly...",
        "https://lh3.googleusercontent.com/rd-d/ALs6j_HFfQOzh2jh8O9zGHkRumaMtTOn7xtujN9ATvX-LG75rJY0utDqdppRpCwdYXwcINUpw-8xJywJMSQGR00VwRk3FW_QUOvkiUoD67OlULdYibibZSfN20NwRxZZ2nbr-EVMmTIBPXaSlHUvVWbi82eVpXwmBNrO_QWhIN3mNm8y27-beBtXtbo-Uhn9YyBORvFIswL2h4V8aKvOvpyNULu1sp0iRo_vzVf3y03YlE0d0PubMZD65worfEQxsNmDQhRS5sKy8JP444IP-aQ9FEz7vvgP5DK2nTDe5jKYMfGAvrK93mmqGhbq5-4C0UUwhW9hcw2ngUliPKkZN7yYYnsjjben5BtIEQhvPg-Yp77Njm0DwpH5v__nZj4UUwJ7xBfqpt7aiWMENgMa-5dmaiQkOrIb44nbfSI6qlNbS_8nkWsh7HFHgLLrzzU__TYq1D0ONFgXVeTNOnekwcHNRjGx2NVYUszGCTo_MJMq6kntAnYL_L0UMU72oURe13m0f5PMLoyjLlJHo8PY1W0_Og_b2tl82A_B4ajjetuFZG4fQ0qNnJncizxDqpczXrVpSlu3pCnw4lF20qtIEr06iF9g1qsiwIWwonXdxbjFmexwWAmGpGWlHfz9bRZBe1rDcB0BnrjO2AV-4-Bpac59bx56lTShMhCwi6Zzg2T_NZukFwoCNQpFarvwLBcJgfzP-KaVwJyXiocZZiQwiWRnIDBXFzOhv_zaa5kSpW7n3aWT57Df5cv94PmjoS_3Qn34wwUxNt_CgkTasxfX0DRXXuR1sjPYySfD37fIVLuRTUgLUuI_aeJAqzL-GFsRwOH19fdhE7gkwEgTGnAhbbBP6L8f-heam-CKiZGnRmwdzXJWcZURD-GsWnxP6w_m1k7s3vxcHY3O914iaFLc3wv5JL9RNFcwdcMWCNCSM_80Cq6tYqMwrEII_8-8FRJAfT6oUM3Mb3IqWN01UYq5YL6NOI2eJQ8VHKtGKmd7Vzp4Y2UP3XO2PO4wUZu2Df4EQ-ndJwKmY5oDoZRB96SsfQI4flj5lvWKe1XN898rFKZ4hQMZOiIGH9UHqmwpwalNyRh0Kxo3i-nbOv81Mb-TGLLk0ZcrmfPpoqPsNRpw0mhRmJ8IgDpjc_s=w1920-h927?auditContext=prefetch"
    ]
);
descs.set(
    "Melvin", [
        "This is supposed to be Candle Bunny (side character). You don't know who this guy is yet, stay tuned ...",
        "bunny",
        "https://michaelbiello.com/cdn/shop/products/candelbunny_1024x1024.jpg?v=1659210886"
    ]
);
descs.set(
    "The Orthodox Cavemen", [
        "Unlike what many may think, so-called “cults” in the Forest of Doom are never really malicious and mostly exist as a civilization based around some entity. However, this cult is an unfortunate rare exception that offers their deity blood. Not much is known about them or their beliefs as they are quite unapproachable and isolated.",
        "While the advice generally for staying alive in the Forest of Doom is to not go snooping around deep in the woods at night, many entities still have some sort of escape strategy, should you encounter them. However, you're dealing with a group of bloodthirsty humanoids with knives and swords if you come across them at night, which makes them particularly dangerous. Many forest dwellers claim that members of this cult are one of the most dangerous creatures to come across for this reason, but Candle Goat and I have come up with a very simple solution to this issue: Get a shotgun. This cult stays very true to the forest and refuses to leave, so it's not like they're getting their hands on one any time soon.",
        "penis"
    ]
)
descs.set(
    "The Candled", [
        "(Written by " + link("/Bios/julie.html", "Julie") + ") The Idol of the Forest of Doom (and Darkness) was a deity that lived long ago and created a subspecies of humanoid animals that underwent the “candling” process, a ritual done after birth that gives them a self-sustaining candle growing from their forehead and a pupilless gaze. These animals would be called \"The Candled\" and they believed that the Idol gave their society fortune, prosperity, and protection, as life in the Forest of Doom (and <em>Darkness</em>) is one of many dangerous creatures and entities, hence why candle light became a symbol for the Idol. Those who followed the Idol were to be dressed in robes and pray to its altar daily, lest it become angry enough to let misfortune roam the Forest of Doom (and Darkness). One day, the Idol was defeated by the Towerman, rendering The Candled’s religion obsolete, leaving behind only the candled animals and their cultural traditions. Come 1997 and the new generation of young candled animals was born, banding together to wander the Forest of Doom (and Darkness) while still celebrating their past by keeping the robes. As daring young animals, they were more willing to take trips beyond the forest into more modern civilization. This new generation had discovered something enlightening, something they had never heard before, something that past generations of the Candled could not, and something many would bond over: Rock music. Basically, from a long-established order and way of life now became a ragtag club of juveniles with candles for unicorn horns and no pupils running around the forest in spooky robes.",
        "Uhh... We don't really bite, so... say hi!",
        "https://the-gadgeteer.com/wp-content/uploads/2018/10/pyropet-animalskeletoncandle-1.jpg"
    ]
)
descs.set(
    "John", [
        "Oh, you don't even wanna <em>know...</em>",
        "Run."
    ]
)

for (var i = 0; i < buttons.length; i++) {
    const button = buttons.item(i);
    button.addEventListener("click", function() {
        document.getElementById("name").textContent = button.textContent
        const guide = descs.get(button.textContent)
        if (descs.get(button.textContent) != undefined) {
            document.getElementById("desc").innerHTML = guide[0];
            document.getElementById("survival").innerHTML = guide[1];
            document.getElementById("id-photo").src = guide[2];
        } else {
            document.getElementById("desc").innerHTML = "N/A";
            document.getElementById("survival").innerHTML = "N/A";
        }
    })
}

document.getElementById("desc").textContent = "N/A";
document.getElementById("survival").textContent = "N/A";