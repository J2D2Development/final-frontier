export const spaceCanvas = (elementName) => {
    const canvas = document.getElementById(elementName);
    const ctx = canvas.getContext('2d');
    const totalStars = 50;
    let raf;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function createStar(starRadius) {
        let x = randomX(5, canvas.width);
        let y = randomY(5, canvas.height);
        let color = 'rgba(255,255,255,1)'; //randomize
        ctx.beginPath();
        ctx.arc(x, y, starRadius, 0, 360);
        ctx.fillStyle = color;
        ctx.fill();
    }

    function createStarField(limit) {
        for(let i = 0; i < limit; i += 1) {
            createStar(1);
        }
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //stars here
        createStarField(totalStars);

        ctx.save();
        ctx.restore();

        raf = window.requestAnimationFrame(draw);
    }

    window.onresize = function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw();
    }

    draw();
}

function randomX(radius, maxWidth) {
    return randomNumber(0 + radius, maxWidth - radius);
}

function randomY(radius, maxHeight) {
    return randomNumber(0 + radius, maxHeight - radius);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}