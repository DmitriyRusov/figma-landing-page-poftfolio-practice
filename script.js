let phrases = [
    { image: 'img/img1-1.png' },
    { image: 'img/img2-1.png' },
    { image: 'img/img3-1.png' },
    { image: 'img/img4-1.png' },
    { image: 'img/img5-1.png' },
];

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let mainimage = document.querySelector('.mainimage');

mainimage.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(mainimage, 'src', randomElement.image);
});

for (let i = 0; i <= 2; i = i + 1) {
    smoothly(mainimage, 'src', phrases[i].image);
}