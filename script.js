const items = [
    { name: "Deadly Dark Dominus", value: 200000000000, img: "https://cdn.discordapp.com/attachments/1248179655455019019/1253098460727611392/Screenshot_2024-06-19_171145.png?ex=6677ea22&is=667698a2&hm=3afa80f01ab8424870785f3c4b95764af738a5e411f1f85efdeea0ab295d4895&" },
    { name: "The Dark Reaper", value: 175000000000, img: "https://cdn.discordapp.com/attachments/1248179655455019019/1253098460928806962/Screenshot_2024-06-19_171154.png?ex=6677ea22&is=667698a2&hm=eb1cf09490c0c1ecd3a8da4bebe87b3dd82529e0da0b13e6728223d4c7b30b88&" },
    { name: "Red Valk", value: 150000000000, img: "https://cdn.discordapp.com/attachments/1248179655455019019/1253098461142974557/Screenshot_2024-06-19_171204.png?ex=6677ea22&is=667698a2&hm=5797d3ac12572ab4e479be13055d5b0447e4b45d508548444ea1c6df8d560200&" },
    { name: "Dominus Claves", value: 25000000000, img: "https://cdn.discordapp.com/attachments/1248179655455019019/1253098461361082368/Screenshot_2024-06-19_171212.png?ex=6677ea22&is=667698a2&hm=3275c47f80ab8a8adb25313fe566daf9c508f372978414b9c6b6b4c153b8a1fb&" },
    { name: "Ban Hammer", value: 15000000000, img: "https://cdn.discordapp.com/attachments/1248179655455019019/1253098461549563904/Screenshot_2024-06-19_171223.png?ex=6677ea22&is=667698a2&hm=221f227c5ae2e7cb5ce98e79725508a24e8c40275f0cb0763828817255c70ef4&" },
    { name: "DoomBringer", value: 10000000000, img: "https://cdn.discordapp.com/attachments/1248179655455019019/1253098461738565692/Screenshot_2024-06-19_172525.png?ex=6677ea22&is=667698a2&hm=af028e60f22b42f4e6e9461755ed0abd40743e7caa10a2cbe55e5c8cc453e237&" },
    { name: "Ultra Commando", value: 8000000000, img: "https://cdn.discordapp.com/attachments/1248179655455019019/1253098461943959582/Screenshot_2024-06-19_171251.png?ex=6677ea22&is=667698a2&hm=24a1b6d5c314422b2ad1b88c7ffeaa6830cbb152d912703404a8fa90f6fc9c69&" },
    { name: "Dominus Venari", value: 8000000000, img: "https://cdn.discordapp.com/attachments/1248179655455019019/1253098462174773371/Screenshot_2024-06-19_171302.png?ex=6677ea22&is=667698a2&hm=4512e71a3b68b9a794e9deeb7d2c17e434babc657c851155613cdbc8ade0c640&" },
    { name: "Pizza Launcher", value: 7500000000, img: "https://cdn.discordapp.com/attachments/1248179655455019019/1253098462409658398/Screenshot_2024-06-19_171328.png?ex=6677ea22&is=667698a2&hm=e089d4a67c9e41394cb785e0ca7039e874738095ab654c96b2713c67975cac7f&" },
    { name: "Glitch Sword", value: 7000000000, img: "https://cdn.discordapp.com/attachments/1248179655455019019/1253098462723964948/Screenshot_2024-06-19_171347.png?ex=6677ea22&is=667698a2&hm=6d7bafa809b6af0cb8b3e828d35c6fea82ba46fd56bd55ee62156d24dd952aa1&" },
    { name: "Crown of the dark lord of SQL", value: 1000000000, img: "https://cdn.discordapp.com/attachments/1248179655455019019/1253098538985066507/Screenshot_2024-06-19_171415.png?ex=6677ea35&is=667698b5&hm=5bb5f800f877d1ba24fe5f75bac32daa67f6cd01066226d3f46ffd89d2893bfa&" },
    { name: "Dominus Frigidus", value: 955000000, img: "https://cdn.discordapp.com/attachments/1248179655455019019/1253098539270275072/Screenshot_2024-06-19_171431.png?ex=6677ea35&is=667698b5&hm=130f372be7c1790f186f40bab4ad3dfaf3ca58ef07331024d03ccdf6f11f5ff7&" },
    { name: "Maldark Mask - Level Up Prize!", value: 765000000, img: "https://cdn.discordapp.com/attachments/1248179655455019019/1253098539500966038/Screenshot_2024-06-19_171446.png?ex=6677ea35&is=667698b5&hm=39915c58ef671eae883456f96a6199c184c0b0dc5ca197d8f0c4d1988410de00&" },
    { name: "Dominus Astra", value: 500000000, img: "https://cdn.discordapp.com/attachments/1248179655455019019/1253098539727196251/Screenshot_2024-06-19_171522.png?ex=6677ea35&is=667698b5&hm=86d8972a0ddcc405b43c332dc6153d6485d0175905a8dc31adee022f2513437f&" },
    { name: "Dominus Empyreous", value: 450000000, img: "https://cdn.discordapp.com/attachments/1248179655455019019/1253098539899158548/Screenshot_2024-06-19_171530.png?ex=6677ea35&is=667698b5&hm=47f27252325af245e246ae836feb6f10189b646914dbc834d72cfcf5251737b3&" },
    { name: "Midnight Blue Sparkle Time Fedora", value: 250000000, img: "https://cdn.discordapp.com/attachments/1248179655455019019/1253098540096422020/Screenshot_2024-06-19_171537.png?ex=6677ea35&is=667698b5&hm=779362e32f3eed2ad3b60a3d406edb01506b3f31f6b917244bbc6d245a39434a&" },
    { name: "Purple Sparkle Time Fedora", value: 200000000, img: "https://cdn.discordapp.com/attachments/1248179655455019019/1253098540306010143/Screenshot_2024-06-19_171545.png?ex=6677ea35&is=667698b5&hm=126d8132372977beef8d12398f6339a32593f4c522e09f3a057a88688b4c8c1d&" }
];

function createItemRow(player, item) {
    return `
        <div class="item">
            <img src="${item.img}" alt="${item.name}">
            <label for="${player}${item.name.replace(/ /g, '')}">${item.name}:</label>
            <input type="number" id="${player}${item.name.replace(/ /g, '')}" value="0" min="0" oninput="calculate()">
        </div>
    `;
}

document.getElementById('player1').innerHTML = items.map(item => createItemRow('player1', item)).join('');
document.getElementById('player2').innerHTML = items.map(item => createItemRow('player2', item)).join('');

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculate() {
    let player1Total = 0, player2Total = 0;
    items.forEach(item => {
        player1Total += (parseInt(document.getElementById(`player1${item.name.replace(/ /g, '')}`).value) || 0) * item.value;
        player2Total += (parseInt(document.getElementById(`player2${item.name.replace(/ /g, '')}`).value) || 0) * item.value;
    });

    const resultDisplay = document.getElementById('result');
    resultDisplay.textContent = `${numberWithCommas(player1Total)} VS ${numberWithCommas(player2Total)}`;
}

// Initial calculation when the page loads
calculate()
