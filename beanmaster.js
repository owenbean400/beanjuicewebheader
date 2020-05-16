
    var price = 69.69
    var priceDeal = 420.69
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
//load window    
    function loading() {

//variables
        var showing = true;

//function execute when page loads
        qtyCartNum();
        cartAmount();
        $("#navmid").toggleClass("hiding");

//screen resized        

            $("#hamburger").click(function(){
                $("#navmid").toggleClass("hiding");
                
            });

}


function qtyCartNum(){
    if(!window.sessionStorage.getItem('qty')){
        window.sessionStorage.setItem('qty', 0);
        window.sessionStorage.setItem('demon', "demon0");
        window.sessionStorage.setItem('sunshine', "sunshine0");
        window.sessionStorage.setItem('icy', "sunshine0");
    }
    else{
        window.sessionStorage.setItem('qty', window.sessionStorage.getItem('qty'));
    }
}


function cartAmount(){
    $("#qty").text(window.sessionStorage.getItem('qty'));
}