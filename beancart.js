
//variables
    var demonQty = sessionStorage.getItem("demon").match(/\d+$/g)[0];
    var sunshineQty = sessionStorage.getItem("sunshine").match(/\d+$/g)[0];
    var icyQty = sessionStorage.getItem("icy").match(/\d+$/g)[0];
    var demonName = sessionStorage.getItem("demon").match(/\D+/g)[0];
    var sunshineName = sessionStorage.getItem("sunshine").match(/\D+/g)[0];
    var icyName = sessionStorage.getItem("icy").match(/\D+/g)[0];
    var qty = sessionStorage.getItem("qty");
    var beanjuice = " BeanJuice"
    var priceOne = 12.99
    var priceDeal = 99.99
    var dealAmountPerQuanity = 10

//HTML loaded function
    $(function(){
        createTable();
        deleteTableHead();

//Hit delete button
        $(".delete").click(function(){
            if($(this).hasClass( "demon" )){
                qty -= demonQty
                demonQty -= demonQty
                sessionStorage.setItem("qty", qty);
                sessionStorage.setItem("demon","demon0");
            }
            else if($(this).hasClass( "sunshine" )){
                qty -= sunshineQty
                sunshineQty -= sunshineQty
                sessionStorage.setItem("qty", qty);
                sessionStorage.setItem("sunshine","sunshine0");
            }
            else if($(this).hasClass( "icy" )){
                qty -= icyQty
                icyQty -= icyQty
                sessionStorage.setItem("qty", qty);
                sessionStorage.setItem("icy","icy0");
            }
            $(this).parent().remove();
            $("[id='quantity']").text(qty);
            $("#price").text("$" + (amountIs(icyQty) + amountIs(sunshineQty) + amountIs(demonQty)));
            cartAmount();
            deleteTableHead();



        });
    });

//create table through jQuery
    function createTable(){
        qty = sessionStorage.getItem("qty");
        amountIs();
        if(demonQty > 0){
            $("table").append("<tr> </tr>");
            $("tr:last").append('<td><img src="photo/redcanweb.png"> </td>');
            $("tr:last").append("<td>" + demonQty + "</td>");
            $("tr:last").append("<td>" + demonName.charAt(0).toUpperCase() + demonName.slice(1) + beanjuice + "</td>");
            $("tr:last").append("<td>" + "$" + (amountIs(demonQty)) + "</td>");
            $("tr:last").append("<td> Delete </td>");
            $("td:last").addClass("delete demon ");
        }
        if(sunshineQty > 0){
            $("table").append("<tr> </tr>");
            $("tr:last").append('<td><img src="photo/yellowcanweb.png"> </td>');
            $("tr:last").append("<td>" + sunshineQty + "</td>");
            $("tr:last").append("<td>" + sunshineName.charAt(0).toUpperCase() + sunshineName.slice(1) + beanjuice + "</td>");
            $("tr:last").append("<td>" + "$" + (amountIs(sunshineQty)) + "</td>");
            $("tr:last").append("<td> Delete </td>");
            $("td:last").addClass("delete sunshine ");
        }
        if(icyQty > 0){
            $("table").append("<tr> </tr>");
            $("tr:last").append('<td><img src="photo/bluecanweb.png"> </td>');
            $("tr:last").append("<td>" + icyQty + "</td>");
            $("tr:last").append("<td>" + icyName.charAt(0).toUpperCase() + icyName.slice(1) + beanjuice + "</td>");
            $("tr:last").append("<td>" + "$" + (amountIs(icyQty)) + "</td>");
            $("tr:last").append("<td> Delete </td>");
            $("td:last").addClass("delete icy ");
        }
        if(qty > 0){
            $("table").append("<tr> </tr>");
            $("tr:last").append("<td> Total </td>");
            $("tr:last").append("<td>" + qty + "</td>");
            $('td:last').attr('id', 'quantity');
            $("tr:last").append("<td> </td>");
            $("tr:last").append("<td>" + "$" + ( amountIs(icyQty) + amountIs(sunshineQty) + amountIs(demonQty) ).toFixed(2) + "</td>");
            $('td:last').attr('id', 'price');
        }
        $("table").find("img").addClass("tableimg");
    }

//If no table, deletes headers
    function deleteTableHead(){
        if(qty <= 0){
            $("tr:first").remove();
            $("tr:last").remove();
        }
    }

//Price based on 
    function amountIs(num){
        if(num == 1){
            return priceOne;
        }
        else if(num == dealAmountPerQuanity){
            return priceDeal;
        }
        else if(num == 0){
            return 0;
        }
        else{
            return 5402.45
        }
    }
