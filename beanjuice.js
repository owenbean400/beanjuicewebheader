var n = -60
var dm = 352
var sprayMoveAmount = 224
var sprayMarginLeft = 0
var sprayBottleAmount = 3
var slideMoveAmountPhone = 198
var slideMoveAmountDesk = 352
var slideMarginLeft = 0
var slideMaxWidthPhone = 1000
var slideMaxWidthDesk = 1448
var phoneWidthScreen = 768

window.addEventListener('resize', fixMarginDesktop);
window.addEventListener('load', setUpStart);

function sprayMoveLeft(){
    if(window.innerWidth < phoneWidthScreen && sprayMarginLeft < 0){
        document.getElementById('slide').style.marginLeft = sprayMarginLeft + sprayMoveAmount + "px";
        sprayMarginLeft += sprayMoveAmount;
    }
}

function sprayMoveRight(){
    if(window.innerWidth < phoneWidthScreen && (sprayMarginLeft > (-1 * (sprayMoveAmount * (sprayBottleAmount - 1))))){
        document.getElementById('slide').style.marginLeft = sprayMarginLeft - sprayMoveAmount + "px";
        sprayMarginLeft -= sprayMoveAmount;
    }
}

function slideMoveRight(){
        if(window.innerWidth < phoneWidthScreen && slideMarginLeft > (slideMaxWidthPhone * -1)){
            document.getElementById('shopview').style.marginLeft = slideMarginLeft - slideMoveAmountPhone + "px";
            slideMarginLeft -= slideMoveAmountPhone;
        }
        else if(window.innerWidth > phoneWidthScreen && slideMarginLeft > (slideMaxWidthDesk * -1)){
            document.getElementById('shopview').style.marginLeft = slideMarginLeft - slideMoveAmountDesk + "px";
            slideMarginLeft -= slideMoveAmountDesk;
        } 
}

function slideMoveLeft(){
    if(slideMarginLeft < -50){
        if(window.innerWidth < phoneWidthScreen){
            document.getElementById('shopview').style.marginLeft = slideMarginLeft + slideMoveAmountPhone + "px";
            slideMarginLeft += slideMoveAmountPhone;
        }
        else{
            document.getElementById('shopview').style.marginLeft = slideMarginLeft + slideMoveAmountDesk + "px";
            slideMarginLeft += slideMoveAmountDesk;
        } 
    }
    
}

function setUpStart(){
    if(window.innerWidth < phoneWidthScreen){
        slideMarginLeft = -10;
    }
    else{
        slideMarginLeft = -40;
        if(window.innerWidth < 1320){   
            slideMaxWidthDesk = 1448;
        }
        else if(window.innerWidth > 1320 && window.innerWidth < 1720){
            slideMaxWidthDesk = 1096;
        }
        else{
            slideMaxWidthDesk = 744;
        }
    }
}

function fixMarginDesktop() {
    if(window.innerWidth > phoneWidthScreen){
        sprayMarginLeft = 0;
        document.getElementById('slide').style.marginLeft = sprayMarginLeft + "px";
        slideMarginLeft = -40;
        document.getElementById('shopview').style.marginLeft = slideMarginLeft + "px";
        if(window.innerWidth < 1320){   
            slideMaxWidthDesk = 1448;
        }
        else if(window.innerWidth > 1320 && window.innerWidth < 1720){
            slideMaxWidthDesk = 1096;
        }
        else{
            slideMaxWidthDesk = 744;
        }
    }
    else if(window.innerWidth < phoneWidthScreen){
        slideMarginLeft = -10;
        document.getElementById('shopview').style.marginLeft = slideMarginLeft + "px";
    }
}