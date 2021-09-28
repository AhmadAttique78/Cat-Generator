function generatePics() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-con');
    image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif'
    div.appendChild(image);
}