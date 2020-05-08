    qtyCartNum()
//load window    
    window.onload = function loading() {

//variables
        const NAVLINKS = document.getElementById('navmid');
        const HAMBURGER = document.getElementById('hamburger');
        const CARTAMOUNT = document.getElementById('qty');
        var showing = true;

        cartAmount();

//screen resized        
        window.addEventListener("resize", function resized() {
            if(window.innerWidth > 768){
                NAVLINKS.style.display = 'block';
                showing = 1;
            }
            else{
                NAVLINKS.style.display = 'none';
                showing = 0;
            }
        })

//hamburger bar clicked        
        HAMBURGER.addEventListener("click", function hamburgerChange() {
            navChange();
        })

//changing whether to show links or not
        function navChange() {
            if(window.innerWidth < 768){
                if(showing == false){
                    NAVLINKS.style.display = "block";
                    showing = 1;
                }
                else{
                    NAVLINKS.style.display = "none";
                    showing = 0;
                }
            }
            else{
                    NAVLINKS.style.display = 'block';
                    showing = 1;
            }
        }
    }

//set value of what spray was clicked
    function redPage(){
        sessionStorage.setItem('color', 'red');
    }

    function bluePage(){
        sessionStorage.setItem('color', 'blue');
    }

    function yellowPage(){
        sessionStorage.setItem('color', 'yellow');
    }

//set value for images    
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
    }

    function qtyCartNum(){
            if(Number.isNaN(sessionStorage.getItem('qty')) == false){
                sessionStorage.setItem('qty', 0);
            }
            else{
                data = sessionStorage.getItem('qty');
                sessionStorage.setItem('qty', data);
            }
    }

    
    function cartAmount(){
        document.getElementById('qty').innerHTML = sessionStorage.getItem('qty');
    }

    