import picardImg from '../img/picard-on-risa.jpg';
import borgImg from '../img/borg.jpg';
import klingonImg from '../img/klingon.jpg';
import romulanImg from '../img/romulan.jpg';
import ferengiImg from '../img/ferengi.jpg';

export const characters = [
    {
        "name": "Jean-Luc Picard",
        "class": "Federation",
        "image": picardImg,
        "battleText": "Make it so",
        "victoryText": "We truly are the Greatest Generation",
        "beats": ["Klingon", "Ferengi"]
    },
    {
        "name": "3 of 8",
        "class": "Borg",
        "image": borgImg,
        "battleText": "Resistence is Futile",
        "victoryText": "You have been assimilated",
        "beats": ["Federation", "Ferengi"]
    },
    {
        "name": "Gowron",
        "class": "Klingon",
        "image": klingonImg,
        "battleText": "Klingons do NOT surrender!",
        "victoryText": "Victory is the only path",
        "beats": ["Romulan", "Borg"]
    },
    {
        "name": "N'Vek",
        "class": "Romulan",
        "image": romulanImg,
        "battleText": "You cannot defeat me",
        "victoryText": "For the empire!",
        "beats": ["Federation", "Borg"]
    },
    {
        "name": "Quark",
        "class": "Ferengi",
        "image": ferengiImg,
        "battleText": "I'm sure we can reach a deal...",
        "victoryText": "There's much profit in victory",
        "beats": ["Romulan", "Borg"]
    }
];

export const initialScores = [
	{initials: "Joe", score: 50}, {initials: "AOB", score: 90}, {initials: "QBT", score: 100},
	{initials: "RON", score: 40}, {initials: "aae", score: 22}, {initials: "pHL", score: 27},
	{initials: "AAA", score: 14}, {initials: "zed", score: 7}, {initials: "e4q", score: 19},
	{initials: "arg", score: 14}
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