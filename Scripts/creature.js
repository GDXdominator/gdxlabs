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
        "The Idol was a once living deity that The Candled once believed gave them safety in the forest.",
        "It's dead now, but 2/3rds of The Candled had to pray to it daily to avoid its wrath and keep its protective agency.",
        "penis"
    ]
);
descs.set(
    "Forest Paralyzer", [
        "Unlike the Forest Lurer who is reliant on its tune's allure, the Forest Paralyzer relies on its hum's ability to strike fear in its prey, paralyzing them to eat them, making up for how slow it is.",
        "It's very important that the Forest Paralyzer's hum NOT be confused with the Moaner's groan, to which you remain still or move very slowly. Once you hear this hum, you need to RUN. This is the motto that goes around all dwellers in the forest. Easier said than done, though, as this hum does have a paralyzing effect. Of course some pure courage helps, but trying to wiggle your toes and fingers also helps start getting you off your toes.",
        "penis"
    ]
);
descs.set(
    "The Moaner", [
        "The Moaner trudges through the forest as a horrible creature that looks as if it was made of nothing but sticks and mud, unable to see or speak very well after living a long, harsh life in the forest. In a constant and desperate forage for food to cure its endless starvation, it roams the forest with heavy groans and pants to hunt for anything that makes a sound with its heightened sense of hearing. I would've preferred if it was called The Groaner…",
        "Billy, Benny, and I had to learn this the hard way: Do NOT learn about its name while encountering it, lest you have to hold in giggles. If you have a more mature sense of humor than we, then just be very quiet and slowly move away until you can't hear it moaning. Sorry, groaning.",
        "penis"
    ]
);
descs.set(
    "Tree Demon", [
        "I think The Treemon would've been a better name. As the name suggests, this demon looks like a tree and knows it. Standing at approximately 8 feet tall, 1 foot above Lucy, with lanky, branch-like arms, and high speeds, this thing is able to quickly hide and blend into the forest foliage undetected. The Treemon is quite weak, with its tall, skinny, and frail body, so it relies on its role being to assist other creatures of the forest. It does so through its enchanting whistle that echoes throughout the forest so creatures hear it and know where to look for food (you), where it can then eat the scraps.",
        "I would be quite embarrassed if I was this thing and I was caught and I think the Treemon would agree. Because this demon is quite frail, showing visible aggression and attempts to hunt for it will shut it up, if it doesn't feel playful. On the rare off-chance you do get to see this thing, you could probably beat it up.",
        "https://lh3.googleusercontent.com/rd-d/ALs6j_F9iVgcKryxpF6K2VhoL08_aIMCDRWFatuXLWAMEKz5GdVujHNk63rtVdbbIe-hJzJcmRGLpAOyNwII1bBG-T0CdRNkbkdieCrWfofX8E6sKUKtZaBFrN2FTI9Qnj5nIrlbcGQmHBrIH7f5eFTAarW4aWzg22YvqRPlc8ink9yJq4jVauPbRVWiUobjR1E0S5DzJuuZ_dGUe-R4Kh8_6-G9TtNt4NDkJoTGh83MIY4fAbUSZZZ50Ouc2uelXaLp0yB6oMephpiYc0UmwUdlxczuLjtZExISGovphR_1-3Nzu-LOepOnjqzKDPVuouxOG8I2ex5gKZsQ0V3qqP7ZeZfXO658dvZBPdVZ-gu9LYgZ7nVovxW8G52B_K1BfisHSx1aQXdP7-_UTcyTnIV0BNTlwwruYw6Ewa8H5b6sH6q-a_iHJwVirauP3gYU3dB8OAxBufBHps8nc3y1YRY-1Ha3jRnWZVQr4UuyTq8ldUI0rTriJW3JkeaS9YMyYFF4BDinPemMC2DHnTyRJZzZEc6HF_-ISrT7UCEgvci0dGPhDftOfLLGRNqgWhH5AQnetOqtDpwAQuOKfHjD8rsk2yGTLFACx56VvVTDXWpYq83kYNR6XvZhPHTK54mNFuY0AHisUT1gKDdNxjH2MxbLPN6qU_Ip9UCl26gZQNNey5T0zfD28hn2g0LdXp5HOLOq_LnwcMYHxLYSRs2R_-1TSgxTq5aCVyVUXM4hpukJpzF4_M10GUYUFh5ExUSLbx5k_Ghm7K3VVl0yujXfYn65j5ep0CuGGFHxJlAo44B3f01ACZb20sZ2dJ_1oj-geoqUKdkTLxhi9R2AfX0p7aZtHbzISyOiglwIgFrfBAiWccAbnfyLq4kAEBetK6qiTqcJCGI1TZl0RowWIZxzqHXEIf2A13JrKBLQH1Gc5DnVvuGUc_L_XVb4M0oApkz5YsbGYfHJ8yRqDNnpyoKCHXhWJYFzENIpgYgoNfJ3Vylwd1OHMVGfsBzMgSDJAo43awugJUkitH1-xWaJ8n8A-D4hAFj9NaxFrTq5rxAWXx3rkrUYITHv0sg8I7HaSOb-hMM8COVzjMbnOR5WG-v5Oij195CYsfkA1U0SghMoY81VUZT0msyiQMeh7AU7OAxeQPRwXdEElQYjsoSNLBaaE_UN5P1pxUx_5ash-fXCys0=w1920-h927?auditContext=prefetch"
    ]
);
descs.set(
    "Candle Cat", [
        "My friend Julie has written an " + link("/Bios/candlecat.html", "excellent description") + " of whoever this is.",
        "If you come across this creature, it is very important you nicely and unalarmingly say \"hi\" and give it many head pats.",
        "https://lh3.googleusercontent.com/rd-d/ALs6j_HvBwesKOvYheNFnaD2eVykMpg9QMsRjayjHCzzayW4fqkbCJrIKuVe4wBQHBIEveQlmcHurEKKvX9_8VKxThNenTY0un_OyFp0n_9VFAMbFd5FFEHWUkinYtSgd5IjSrnNidwIIkUwsn0GqJMYj3LkJ-b15sd9wpngmCxO5TCZPGU-HncpTMGHiqixrgaJDu2Osejv4AZWnW7f9XmK4JIfZA0vmos1_XaQs8za7K0DeU_j18MO2n06utDuAH1E8_PyrA1gs8CNNvoSJUw9aew44DFE6zdzPQXtuoCMQJyjd6MMyISY4W7GRoDIztFaHE5YECBr6yCAQe7A-GLnMIztNKsBVw5VTQmy6i3cMfXbUOX5RzcjRjBPziYTfPVxqzj39ARO0bcQ4YnIOx0iOjBSNxcsleZpnOgZWQeMvgD0_pqI1eO-MGnkwSM2bdjWt0liItryFf90kgCkxwHJHmOLXWE0JV_R3um4gM7tIhMjiCdjmFYU9BC-Js_x082JeYjf1hi4TcBFqkySdDJstypRg4hv8bsWwGYyycQ2Gn9vhCDX54kDZgGnM6jQLNGadPEkDu8Rul8NM1HJiIuaBGXFZwGsypOqHsrsdT_bFiyjqFfWWGh1sDWUouFixlJOr4swc7ir4YPWyQOcLBTOlA2kDY99KogS_ZGwMb1L5KroH-Ub_inRhamZy8C3EElOlWhOdxsYgL3bzBT5BKT28oFJx6QN_Rfxwmr9Mb0HXDPaeEzvig72t8qhi8vxz0hA_QbOi2XMEkL8-AxZ-lxKe4W1oiJlxoRHgYQHRW49mJaY-jNRGE3wHQSkxNs1YmdcHocNZm2nBjaOc7KwlM_hizUtj_jNjNb1Ny9kyqjEsPcPiP3O9TCuiSKHkZc-Z6pimvTJT_KFMFrWK4g9SwhqbE-VE6ZRU6v-8vrOjPhioCQf2QHX70DizPZmQdMBah6EHBo5EgXw-U4pyYRA7e9qR3L3LtilI6bRLj9F3QJfLitYw_Z1mrzKtqaHQcgZR2SJ8plCscqAELC_knS_D2UNZhiz2MkhJtGwo1Xvr6kS4lRyOZbvoNqvP78SvoZeU8TpHsjz1AdDQSZXG0aJnmzNlBz8OpcVyD97grNkKLTSXi6lM9h35h7V=w1920-h927?auditContext=prefetch"
    ]
);
descs.set(
    "Billy Bathory Goat", [
        "My GOAT. My friend Julie has also written an " + link("/Bios/candlegoat.html", "excellent description") + " of this fellow.",
        "Should you come across this creature, do NOT utter the words “Ber-suhm suhks” while displaying certain symbols on your garments " + poserString + ", or else it will get angry, curse you by calling you a “pouh-zer”, and will be really annoying for 5 minutes.",
        "https://lh3.googleusercontent.com/rd-d/ALs6j_EwTTFeQ1_TNccnlFgblAF6kqp5sJ2UfqhPiShxyd-MNnFOQgkJrgCDVvl7_-CDR7dK73OYA1T4KQTtdB2yIkKb1uV_5s61IEo-R499762A3QAB7371rWGIY5_HdlvLEO6lJArBrOnud1HTGECyz3B8e2vMMiu3JRkLmPcE7762M9yvzEmQASWIltpg09VCcTKMcxS5woy8jtefLwMgmN1DtkwnJCXVUK0O87FHqOEvinmffOvB3bQ4NDxAo3QTkoBBEZcQMn51CB3y8zNXZPMOnkh-J1in-1YdcsUWhYhkjqDZHAufS-r-oiL90fARvf2D1LjWyHgJz1mDr-GYxByX3Td2elIetUiGvUcryRU90YEbqQVNlaIkTedN9nuNgT4hJl14hnfPqF5PQIRL2oyJ6MYIyU3p6qB4ytQ-WgtrOiKCVvlqPJfKNjPrRwfLq68s9anvLxWCjft_MjjZKn1TlyhNiFsvGviv5saDEkb1xL06Rllkgkult1ZR4g9pN2VH5S_gjwP_10QbDFCzMhdX9_oQiLcI2W8G1yBERxLbyHTOzutMEAdV-eQVW8PWeJTPQjO0vJWUSrcanHOGqtAvyXGfa1RhnN0e_yjQjU5xv1Bu2dYLq4idlo2LOwLJw3KHWeaKeXDiYxQbJHrLGIizhWhID0PY9U8xSOvEv8p4RtNXw2X89TobMsh1zMtDfxYW1DIMZ0t7VqTE3eq3sixheftKIL3rQjxfVrYURhG0fQtCNEHoWC_GCPXmOGD7UpvrUt9vk1bdABRjYWscOOObem0KOhrqai3FCc8oFpzkLPSiPVCpCXVEyWmW0r91kA28jBFDD2me_UNDPDxtXvEDbXIxtgw5yMTUgu16w-zhRe3Q1icPQSrLp4b1wb4ZXkuD7sJGEDU_4qfYXyaai7dVeM-cbnvr1oNYdWwf2EgkVvXpXUv_Y3v9HkaN32x63P2ivXIFoC9g6ny5N2jpB7zG7Tf6VnCYfjbYHxkMGx-J9GIpEEzMWsBUdc-IH0KWY6GsobW-QcmkiKlBK7OvV_Slhv1Dqr13J45JtCJ87DgqnLoK5G1MhB8dnKoysByCEwJEVmHHSrgLs84yE8XXIA69OAfAQopt0O2jVfuSdkeSwhwqmuRs=w1920-h927?auditContext=prefetch"
    ]
);
descs.set(
    "Benny Buck", [
        "A bundle of sunshine and rainbows, this guy is. " + link("/Bios/candledeer.html", "Julie also wrote something about him."),
        "Say hi! This guy would not hurt a fly...",
        "https://lh3.googleusercontent.com/rd-d/ALs6j_HFfQOzh2jh8O9zGHkRumaMtTOn7xtujN9ATvX-LG75rJY0utDqdppRpCwdYXwcINUpw-8xJywJMSQGR00VwRk3FW_QUOvkiUoD67OlULdYibibZSfN20NwRxZZ2nbr-EVMmTIBPXaSlHUvVWbi82eVpXwmBNrO_QWhIN3mNm8y27-beBtXtbo-Uhn9YyBORvFIswL2h4V8aKvOvpyNULu1sp0iRo_vzVf3y03YlE0d0PubMZD65worfEQxsNmDQhRS5sKy8JP444IP-aQ9FEz7vvgP5DK2nTDe5jKYMfGAvrK93mmqGhbq5-4C0UUwhW9hcw2ngUliPKkZN7yYYnsjjben5BtIEQhvPg-Yp77Njm0DwpH5v__nZj4UUwJ7xBfqpt7aiWMENgMa-5dmaiQkOrIb44nbfSI6qlNbS_8nkWsh7HFHgLLrzzU__TYq1D0ONFgXVeTNOnekwcHNRjGx2NVYUszGCTo_MJMq6kntAnYL_L0UMU72oURe13m0f5PMLoyjLlJHo8PY1W0_Og_b2tl82A_B4ajjetuFZG4fQ0qNnJncizxDqpczXrVpSlu3pCnw4lF20qtIEr06iF9g1qsiwIWwonXdxbjFmexwWAmGpGWlHfz9bRZBe1rDcB0BnrjO2AV-4-Bpac59bx56lTShMhCwi6Zzg2T_NZukFwoCNQpFarvwLBcJgfzP-KaVwJyXiocZZiQwiWRnIDBXFzOhv_zaa5kSpW7n3aWT57Df5cv94PmjoS_3Qn34wwUxNt_CgkTasxfX0DRXXuR1sjPYySfD37fIVLuRTUgLUuI_aeJAqzL-GFsRwOH19fdhE7gkwEgTGnAhbbBP6L8f-heam-CKiZGnRmwdzXJWcZURD-GsWnxP6w_m1k7s3vxcHY3O914iaFLc3wv5JL9RNFcwdcMWCNCSM_80Cq6tYqMwrEII_8-8FRJAfT6oUM3Mb3IqWN01UYq5YL6NOI2eJQ8VHKtGKmd7Vzp4Y2UP3XO2PO4wUZu2Df4EQ-ndJwKmY5oDoZRB96SsfQI4flj5lvWKe1XN898rFKZ4hQMZOiIGH9UHqmwpwalNyRh0Kxo3i-nbOv81Mb-TGLLk0ZcrmfPpoqPsNRpw0mhRmJ8IgDpjc_s=w1920-h927?auditContext=prefetch"
    ]
);
descs.set(
    "Melvin O'Hare", [
        "A death metal fanatic into some weird music who runs the forest's \"Super Awesome Metal Club.\" Melvin is the Candled member most immersed in city life and culture, being the only civilian of the Candled to own a computer. Cool guy, we've known him since childhood.",
        "Nice guy, really. Just don't ask to see his CD collection, death metal fans see some nasty stuff and he forgets that sometimes...",
        "https://lh3.googleusercontent.com/rd-d/ALs6j_GPMxJ0goPht7p0c72_JLvEfZxlU8BprmRyCfD9bpsZVib_T9L_N1RRpN0sA4MS3_L4_pnbf3_8ir_Ge3q0is8HX1Icm3Dkvb3Iu-b7YyoP_57wnI0JNXWmNY1oW2SVQQTDqKuxe-Di2WfqmwlTUjyHx5B5fbfo-FUqlG8n6ZSGjvztvLNqqAHsDXt5pBbDW44qA6WtL5bJckTi8DhXnOiCs3jWeuIYv8ranX-G7VsuU5SkQfyyzijAruO27WZYlUpueOESO5M_XaIFxCIgtxGjCwdtgmleKdvxu9tGe-Aux1x3-CLN5IkFjpmipD-m45SkZx6cn_Sdby0SbVLIOx27F6RK7aAktHF0jVAKxJgBWO7qhqczFnbPx_MWD2kgc3B5MiUZRaFUwOZYGJ7WCDkLcyre2P11ZJFW_8u8K1vk_9BA64h_u1CAnZXungVN6qlPu8GEt5VYUFWpAfD4vS3rDhJY-csKVR3Rj6nIDWtDF1Vix022QMcZiBbSVMqVF7twZfmZNyCWn9RwXcfV8mCNHxDQ7rFO_580Cj1pXsdiZXGyD2OfX0yk4FVBnupXIYYL28uwnbAIyzoD_IY3t4XwtsLGRGBc6F4ldkbQoQZ9cnvBLl__CjZ5-LdpeRNlpHNc4Gz0aV6M8MDaRa9rTKAHgSjuUwf45g-uo_4aU4WG3jDXLXMJ4XACtAGmYfTz3Zrpjvn9vsFH0EeyLDQguaVLe9jk-XiOncSRTJP5SycdXWe--wfy0KwZXK1FBlWjX0oVADdOBD3rmAGS66MctD7XDpCR5Y9OyQVY8Dn8OaS7x6QFtcbrpmig-ozlOdgOZywIorSySKC8oraHjUKjBKlprLr9bScjX4Vl_h5k7gZ40jqYrjpH1ZhrGt4azi_yvbsjqlfdUwvFg3cg6psWHzeLvWirIJhyCIkSfaYw9MtsylNi4oCOzv2xtVFOVxLbsQmjoU5l82-AIXcZWYbrr3oduBMwPhvihoj3ePBL67BCzC3eLJio-ZZrt0SUELac7iXGkt9eLvmrhZAWO2XnGwahDJ4AIdwSkit7Querj_JJBuem8ty1oFh5ErJZ03Ccy1VLxLA_M_OdKLymYWUzq-bEkHxr49BRjpuTcEDeUn3Y5jhcVkNOZ8tbBZjAM5m6BOj1_sCiAOFlrBEkvA2xWA22juE1iC5bmh2iJ1A=w1920-h927?auditContext=prefetch"
    ]
);
descs.set(
    "Boris", [
        "Chill, death metal fiend who runs the forest's \"Super Awesome Metal Club\" alongisde Melvin. Both are two peas in a pod.",
        "nothing",
        "https://www.southlakegifts.com/cdn/shop/files/Fox_Candle_1100x.jpg?v=1756271125"
    ]
);
descs.set(
    "The Candled", [
        "(Written by " + link("/Bios/julie.html", "Julie") + ") The Idol of the Forest of Doom (and Darkness) was a deity that lived long ago and created a subspecies of humanoid animals that underwent the “candling” process, a ritual done after birth that gives them a self-sustaining candle growing from their forehead and a pupilless gaze. These animals would be called \"The Candled\" and they believed that the Idol gave their society fortune, prosperity, and protection, as life in the Forest of Doom (and <em>Darkness</em>) is one of many dangerous creatures and entities, hence why candle light became a symbol for the Idol. Those who followed the Idol were to be dressed in robes and pray to its altar daily, lest it become angry enough to let misfortune roam the Forest of Doom (and Darkness). One day, the Idol was defeated by the Towerman, rendering The Candled's religion obsolete, leaving behind only the candled animals and their cultural traditions. Come 1997 and the new generation of young candled animals was born, banding together to wander the Forest of Doom (and Darkness) while still celebrating their past by keeping the robes. As daring young animals, they were more willing to take trips beyond the forest into more modern civilization. This new generation had discovered something enlightening, something they had never heard before, something that past generations of the Candled could not, and something many would bond over: Rock music. Basically, from a long-established order and way of life now became a ragtag club of juveniles with candles for unicorn horns and no pupils running around the forest in spooky robes.",
        "We don't really bite, so say hi!",
        "https://the-gadgeteer.com/wp-content/uploads/2018/10/pyropet-animalskeletoncandle-1.jpg"
    ]
)
descs.set(
    "The Orthodox Cavemen", [
        "Unlike what many may think, so-called “cults” in the Forest of Doom are never really malicious and mostly exist as a civilization based around some entity. However, this cult is an unfortunate rare exception that offers their deity blood. Not much is known about them or their beliefs as they are quite unapproachable and isolated.",
        "While the advice generally for staying alive in the Forest of Doom is to not go snooping around deep in the woods at night, many entities still have some sort of escape strategy, should you encounter them. However, you're dealing with a group of bloodthirsty humanoids with knives and swords if you come across them at night, which makes them particularly dangerous. Many forest dwellers claim that members of this cult are one of the most dangerous creatures to come across for this reason, but Candle Goat and I have come up with a very simple solution to this issue: Get a shotgun. This cult stays very true to the forest and refuses to leave, so it's not like they're getting their hands on one any time soon.",
        "penis"
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