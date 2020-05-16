//load window    
    function loading() {

//function execute when page loads
        qtyCartNum();
        cartAmount();
        $("#navmid").toggleClass("hiding");

//screen resized        

            $("#hamburger").click(function(){
                $("#navmid").toggleClass("hiding");
                
            });

    }

//If items not set, then set the items
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

//Set cart number display to quantity
    function cartAmount(){
        $("#qty").text(window.sessionStorage.getItem('qty'));
    }