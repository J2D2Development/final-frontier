export const characters = [
    {
        "name": "Jean-Luc Picard",
        "class": "Federation",
        "image": "https://programapilotoblog.files.wordpress.com/2014/11/picard-on-risa.jpg",
        "battleText": "Make it so",
        "victoryText": "We truly are the Greatest Generation",
        "beats": ["Klingon", "Ferengi"]
    },
    {
        "name": "3 of 8",
        "class": "Borg",
        "image": "https://vignette.wikia.nocookie.net/memoryalpha/images/e/ed/Hugh_body.jpg/revision/latest/scale-to-width-down/350?cb=20120218232842&path-prefix=en",
        "battleText": "Resistence is Futile",
        "victoryText": "You have been assimilated",
        "beats": ["Federation", "Ferengi"]
    },
    {
        "name": "Gowron",
        "class": "Klingon",
        "image": "https://upload.wikimedia.org/wikipedia/en/d/d6/Gowron.jpg",
        "battleText": "Klingons do NOT surrender!",
        "victoryText": "Victory is the only path",
        "beats": ["Romulan", "Borg"]
    },
    {
        "name": "N'Vek",
        "class": "Romulan",
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/35/Star_Trek_costume_-_Romulan.jpg",
        "battleText": "You cannot defeat me",
        "victoryText": "For the empire!",
        "beats": ["Federation", "Borg"]
    },
    {
        "name": "Quark",
        "class": "Ferengi",
        "image": "https://upload.wikimedia.org/wikipedia/en/4/42/QuarkDS9.jpg",
        "battleText": "I'm sure we can reach a deal...",
        "victoryText": "There's much profit in victory",
        "beats": ["Romulan", "Borg"]
    }
];

export const getRandomCharacter = () => {
    const random = randomNumber(0, characters.length - 1);
    return characters[random];
};

export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

export const zip = (name1, array1, name2, array2) => {
    let result = [];
    let len = Math.max(array1.length, array2.length);

    for(let i = 0; i < len; i += 1) {
        if(array1[i]) {
            result.push({name: name1, text: array1[i]});
        }
        if(array2[i]) {
            result.push({name: name2, text: array2[i]});
        }
    }

    return result;
};