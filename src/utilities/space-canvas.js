import { randomNumber } from './logic.js';

export const spaceCanvas = (elementName) => {
    const canvas = document.getElementById(elementName);
    const ctx = canvas.getContext('2d');
    const totalStars = 150;
    let stars = [];

    //eslint-disable-next-line
    let raf;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function createStar({x, y, starRadius, alpha, color}) {
        let myx = x || randomX(5, canvas.width);
        let myy = y || randomY(5, canvas.height);
        let myAlpha = alpha;
        let myColor = color;
        ctx.beginPath();
        ctx.arc(myx, myy, starRadius, 0, 360);
        ctx.globalAlpha = myAlpha;
        ctx.fillStyle = myColor;
        ctx.fill();
      
        return { myx, myy, starRadius, myAlpha, myColor }
    }
  
    function animateStar() {
        let thisStar = stars.pop();
        let newAlpha, newColor = thisStar.myColor;
        let newRad = 2;
        if(thisStar.myAlpha < 1) {
            newAlpha = thisStar.myAlpha + 0.1;
        }
        
        let newStar = createStar({
                myx: thisStar.myx,
                myy: thisStar.myy,
                starRadius: newRad,
                alpha: newAlpha, 
                color: newColor
        });
        stars.push(newStar);
    }
  
    function createStarField(limit) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for(let i = 0; i < limit; i += 1) {
            let s = createStar({
              alpha: 1, starRadius: 2,
              color: 'rgba(255,255,255,1)'
            });
            stars.push(s);
        }
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //stars here
        animateStar();        

        ctx.save();
        ctx.restore();

        //too fast
        //raf = window.requestAnimationFrame(draw);
        setTimeout(function() {
          draw();
        }, 200);
    }

    window.onresize = function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw();
    }
    
    createStarField(totalStars);
    draw();
}

function randomX(radius, maxWidth) {
    return randomNumber(0 + radius, maxWidth - radius);
}

function randomY(radius, maxHeight) {
    return randomNumber(0 + radius, maxHeight - radius);
}