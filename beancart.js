var demonQty = sessionStorage.getItem("demon").match(/\d+$/g)[0];
var sunshineQty = sessionStorage.getItem("sunshine").match(/\d+$/g)[0];
var icyQty = sessionStorage.getItem("icy").match(/\d+$/g)[0];
var demonName = sessionStorage.getItem("demon").match(/\D+/g)[0];
var sunshineName = sessionStorage.getItem("sunshine").match(/\D+/g)[0];
var icyName = sessionStorage.getItem("icy").match(/\D+/g)[0];
var qty = sessionStorage.getItem("qty");
var beanjuice = " BeanJuice"

console.log(demonQty);
console.log(sunshineQty);
console.log(icyQty);
console.log(demonName);
console.log(sunshineName);
console.log(icyName);
console.log(qty);

$(function(){
    createTable();
    deleteTableHead();

    $(".delete").click(function(){
        if($(this).hasClass( "demon" )){
            qty -= demonQty
            sessionStorage.setItem("qty", qty);
            sessionStorage.setItem("demon","demon0");
        }
        else if($(this).hasClass( "sunshine" )){
            qty -= sunshineQty
            sessionStorage.setItem("qty", qty);
            sessionStorage.setItem("sunshine","sunshine0");
        }
        else if($(this).hasClass( "icy" )){
            qty -= icyQty
            sessionStorage.setItem("qty", qty);
            sessionStorage.setItem("icy","icy0");
        }
        $(this).parent().remove();
        $("[id='quantity']").text(qty);
        $("[id='price']").text("$" + (qty * 12.99).toFixed(2));
        cartAmount();
        deleteTableHead();



    });
});


function createTable(){
    qty = sessionStorage.getItem("qty");
    if(demonQty > 0){
        $("table").append("<tr> </tr>");
        $("tr:last").append('<td><img src="photo/redcanweb.png"> </td>');
        $("tr:last").append("<td>" + demonQty + "</td>");
        $("tr:last").append("<td>" + demonName.charAt(0).toUpperCase() + demonName.slice(1) + beanjuice + "</td>");
        $("tr:last").append("<td>" + "$" + (demonQty * 12.99) + "</td>");
        $("tr:last").append("<td> Delete </td>");
        $("td:last").addClass("delete demon ");
    }
    if(sunshineQty > 0){
        $("table").append("<tr> </tr>");
        $("tr:last").append('<td><img src="photo/yellowcanweb.png"> </td>');
        $("tr:last").append("<td>" + sunshineQty + "</td>");
        $("tr:last").append("<td>" + sunshineName.charAt(0).toUpperCase() + sunshineName.slice(1) + beanjuice + "</td>");
        $("tr:last").append("<td>" + "$" + (sunshineQty * 12.99) + "</td>");
        $("tr:last").append("<td> Delete </td>");
        $("td:last").addClass("delete sunshine ");
    }
    if(icyQty > 0){
        $("table").append("<tr> </tr>");
        $("tr:last").append('<td><img src="photo/bluecanweb.png"> </td>');
        $("tr:last").append("<td>" + icyQty + "</td>");
        $("tr:last").append("<td>" + icyName.charAt(0).toUpperCase() + icyName.slice(1) + beanjuice + "</td>");
        $("tr:last").append("<td>" + "$" + (icyQty * 12.99) + "</td>");
        $("tr:last").append("<td> Delete </td>");
        $("td:last").addClass("delete icy ");
    }
    if(qty > 0){
        $("table").append("<tr> </tr>");
        $("tr:last").append("<td> Total </td>");
        $("tr:last").append("<td>" + qty + "</td>");
        $('td:last').attr('id', 'quantity');
        $("tr:last").append("<td> </td>");
        $("tr:last").append("<td>" + "$" + (qty * 12.99).toFixed(2) + "</td>");
        $('td:last').attr('id', 'price');
    }
    $("table").find("img").addClass("tableimg");
}

function deleteTableHead(){
    if(qty <= 0){
        $("tr:first").remove();
        $("tr:last").remove();
    }
}
