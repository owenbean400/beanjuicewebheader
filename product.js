var display = "";
var image = {
    red: {
        one: "photo/product/red1.jpg",
        two: "photo/product/red2.jpg",
        three: "photo/product/red3.jpg",
        four: "photo/product/red4.jpg",
        five: "photo/product/red5.jpg"
}}
    display = "red";

    function demon(num){
        if(num === 1){
            document.getElementById('displayimg').src = image.red.one;
        }
        else if(num === 2){
            document.getElementById('displayimg').src = image.red.two;
        }
        else if(num === 3){
            document.getElementById('displayimg').src = image.red.three
        }
        else if(num === 4){
            document.getElementById('displayimg').src = image.red.four;
        }
        else if(num === 5){
            document.getElementById('displayimg').src = image.red.five;
        }
    }