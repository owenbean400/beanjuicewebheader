var display = "";
var image = {
    red: {
        one: "photo/product/red1.jpg",
        two: "photo/product/red2.jpg",
        three: "photo/product/red3.jpg",
        four: "photo/product/red4.jpg",
        five: "photo/product/red5.jpg"
    },
    yellow: {
        one: "photo/product/yellow1.jpg",
        two: "photo/product/yellow2.jpg",
        three: "photo/product/yellow3.jpg",
        four: "photo/product/yellow4.jpg",
        five: "photo/product/yellow5.jpg"
    },
    blue: {
        one: "photo/product/blue1.jpg",
        two: "photo/product/blue2.jpg",
        three: "photo/product/blue3.jpg",
        four: "photo/product/blue4.jpg",
        five: "photo/product/blue5.jpg"
    }

};
var data = {
    demon: {
        name: "demon",
        qty: sessionStorage.getItem("demon").match(/\d+$/g)
    },
    sunshine: {
        name: "sunshine",
        qty: sessionStorage.getItem("sunshine").match(/\d+$/g)
    },
    icy: {
        name: "icy",
        qty: sessionStorage.getItem("icy").match(/\d+$/g)
    }
}

    qtyCartNum();

    function photoChange(num){
        
        if(display == 0){
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
            else{
                document.getElementById('displayimg').src = image.red.five;
            };
        }
        else if(display == 1){
            if(num === 1){
                document.getElementById('displayimg').src = image.yellow.one;
            }
            else if(num === 2){
                document.getElementById('displayimg').src = image.yellow.two;
            }
            else if(num === 3){
                document.getElementById('displayimg').src = image.yellow.three
            }
            else if(num === 4){
                document.getElementById('displayimg').src = image.yellow.four;
            }
            else{
                document.getElementById('displayimg').src = image.yellow.five;
            };}
        else{
            if(num === 1){
                document.getElementById('displayimg').src = image.blue.one;
            }
            else if(num === 2){
                document.getElementById('displayimg').src = image.blue.two;
            }
            else if(num === 3){
                document.getElementById('displayimg').src = image.blue.three
            }
            else if(num === 4){
                document.getElementById('displayimg').src = image.blue.four;
            }
            else{
                document.getElementById('displayimg').src = image.blue.five;
            };
        }
    }

    function amount(){
        document.getElementById('amount').style.top = "50%";
    }

    function back(){
        if(qtynow = document.getElementById('quantity').value >= 0 && document.getElementById('quantity').value < 6){
            document.getElementById('amount').style.top = "-300px";
            qtyChange();
        }
        else if(document.getElementById('quantity').value > 5){
            alert("We only sell 5 at a time to a customer due to limited stock");
        
        }
        else{
            alert("Please choose a positive number");
        }
    }

    function qtyChange(){
        var newValue = document.getElementById('quantity').value
        if(display == 0){
            let oldValue = sessionStorage.getItem("demon").match(/\d+$/g)[0];
            oldValue = parseInt(oldValue, 10);
            newValue = parseInt(newValue, 10);
            console.log(newValue);
            console.log(oldValue);
            let value = oldValue + newValue;
            data.demon.qty = value;
            sessionStorage.setItem("demon", data.demon.name + data.demon.qty);
        }
        else if(display == 1){
            let oldValue = sessionStorage.getItem("sunshine").match(/\d+$/g)[0];
            oldValue = parseInt(oldValue, 10);
            newValue = parseInt(newValue, 10);
            console.log(newValue);
            console.log(oldValue);
            let value = oldValue + newValue;
            data.sunshine.qty = value;
            sessionStorage.setItem("sunshine", data.sunshine.name + data.sunshine.qty);
        }
        else if(display == 2){
            let oldValue = sessionStorage.getItem("icy").match(/\d+$/g)[0];
            oldValue = parseInt(oldValue, 10);
            newValue = parseInt(newValue, 10);
            console.log(newValue);
            console.log(oldValue);
            let value = oldValue + newValue;
            data.icy.qty = value;
            sessionStorage.setItem("icy", data.icy.name + data.icy.qty);
        }
        let qtyvalue = parseInt(data.demon.qty, 10) + parseInt(data.sunshine.qty, 10) + parseInt(data.icy.qty, 10);
        sessionStorage.setItem("qty", qtyvalue);
        cartAmount();

    }