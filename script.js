let rightOn = false;
let leftOn = false;

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const car = document.querySelector('.car');

    if (key === 'd' || key === 'D') 
    {
        car.style.marginLeft = '325px';
    } 
    else if (key === 'a' || key === 'A') 
    {
        car.style.marginLeft = '-325px';
    } else if (key === 'c' || key === 'C')
    {
        car.style.marginLeft = '0px';
    }
});

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const flashRight = document.getElementById('flashRightColor');
    const flashLeft = document.getElementById('flashLeftColor');

    if (key === 'e' || key === 'E')
    {
        if (leftOn === true)
        {
            flashLeft.style.animation = 'none';
            leftOn = false;
        }

        if (rightOn === false)
        {
            flashRight.style.animation = 'flashRightAnimation .5s ease-out infinite';
            rightOn = true;
        } else {
            flashRight.style.animation = 'none';
            rightOn = false;
        }
    } 
    else if (key === 'q' || key === 'Q')
    {
        if (rightOn === true)
        {
            flashRight.style.animation = 'none';
            rightOn = false;
        }

        if (leftOn === false)
        {
            flashLeft.style.animation = 'flashLeftAnimation .5s ease-out infinite';
            leftOn = true;
        } else {
            flashLeft.style.animation = 'none';
            leftOn = false;
        }
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'w' || event.key ==='W')
    {
        document.querySelector('.line').classList.add('active');
        document.querySelector('.treeRight').classList.add('active');
        document.querySelector('.treeLeft').classList.add('active');
        document.querySelector('.exrFire').classList.add('active');
        document.querySelector('.exlFire').classList.add('active');
    }
    else if (event.key === 's' || event.key === 'S')
    {
        document.querySelector('.line').classList.add('decrease');
        document.querySelector('.treeRight').classList.add('decrease');
        document.querySelector('.treeLeft').classList.add('decrease');
        document.getElementById('backLightRight').classList.add('active');
        document.getElementById('backLightLeft').classList.add('active');
        document.querySelector('.flashLightRight').classList.add('active');
        document.querySelector('.flashLightLeft').classList.add('active');
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'w' || event.key === 'W')
    {
        document.querySelector('.line').classList.remove('active');
        document.querySelector('.treeRight').classList.remove('active');
        document.querySelector('.treeLeft').classList.remove('active');
        document.querySelector('.exrFire').classList.remove('active');
        document.querySelector('.exlFire').classList.remove('active');
    }
    else if (event.key === 's' || event.key === 'S')
    {
        document.querySelector('.line').classList.remove('decrease');
        document.querySelector('.treeRight').classList.remove('decrease');
        document.querySelector('.treeLeft').classList.remove('decrease');
        document.getElementById('backLightRight').classList.remove('active');
        document.getElementById('backLightLeft').classList.remove('active');
        document.querySelector('.flashLightRight').classList.remove('active');
        document.querySelector('.flashLightLeft').classList.remove('active');
    }
});