//Variables
    var display = "";

//Images in Variables
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

//
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
    $(document).ready(function(){
        $("#oneQtyRed").click(function(){
        sessionStorage.setItem("demon", "demon1");
        back();
        });

        $("#tenQtyRed").click(function(){
            sessionStorage.setItem("demon", "demon10");
            back()
        });

        $("#oneQtyYellow").click(function(){
        sessionStorage.setItem("sunshine", "sunshine1");
        back();
        });
        
        $("#tenQtyYellow").click(function(){
            sessionStorage.setItem("sunshine", "sunshine10");
            back()
        });

        $("#oneQtyBlue").click(function(){
        sessionStorage.setItem("icy", "icy1");
        back();
        });
        
        $("#tenQtyBlue").click(function(){
            sessionStorage.setItem("icy", "icy10");
            back()
        });
    });

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
            document.getElementById('amount').style.top = "-360px";
            qtyChange();
        }

    function qtyChange(){
        let qtyvalue = parseInt(sessionStorage.getItem("demon").match(/\d+$/g)) + parseInt(sessionStorage.getItem("sunshine").match(/\d+$/g)) + parseInt(sessionStorage.getItem("icy").match(/\d+$/g));
        sessionStorage.setItem("qty", qtyvalue);
        cartAmount();
    }