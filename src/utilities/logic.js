const beats = {
    "federation": ["klingon, ferengi"],
    "borg": ["federation", "klingon", "romulan"],
    "klingon": ["ferengi"],
    "romulan": ["klingon, federation"],
    "ferengi": ["borg"]
}

/*
flow should be:
    1) Player chooses type.
    2) computer randomly chooses type.
    3) logic battle
    4) show associated text (each battle matchup should have a story associated)
    5) winner takes center, loser fades out
        5a) special case: 
    6) total points added (3-win, 1-tie, 0-loss)
    7) restart at 1
    8) option to quit- save high score?

*/

export default {
    "hierarchy": {
        "spock": {
            "id": 0,
            "name": "Spock",
            "beats": ["kirk"],
            "ties": ["laforge", "spock"]
            "gameover": []
        },
        "kirk": {
            "id": 1,
            "name": "James T Kirk",
            "beats": [],
            "ties": ["riker", "kirk"],
            "gameover": []
        },
        "picard": {
            "id": 2,
            "name": "Jean-Luc Picard",
            "beats": ["spock", "kirk", "riker", "laforge"],
            "ties": [],
            "gameover": ["picard"]
        },
        "riker": {
            "id": 3,
            "name": "William T Riker",
            "beats": ["spock"],
            "ties": ["kirk", "riker"],
            "gameover": []
        },
        "laforge": {
            "id": 4,
            "name": "Geordi LaForge",
            "beats": ["riker"],
            "ties": ["spock", "kirk", "laforge"],
            "gameover": []
        }
    }
}