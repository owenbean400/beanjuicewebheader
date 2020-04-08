var n = -60
var dm = 352
var pm = 198
var m = 0
var styleSheet = document.createElement("style")
var showing = 0

window.onload = function marginsett() {
    {
        if(window.innerWidth > 880){
        n = -60;
        document.getElementById("shopview").style.marginLeft = n;
        console.log("desktop");
            document.getElementById('slide').style.display = "grid";
            document.getElementById('slide').style.gridTemplateColumns = "auto auto auto";
            document.getElementById('slide').style.gridGap = "10%";
            document.getElementById('slide').style.justifyContent = "center";
            document.getElementById('slide').style.width = "99%" ;
            document.getElementById('slide').style.marginTop = "-560px";
            document.getElementById('slide').style.zIndex = "1";
            document.getElementById('slide').style.height = "701px";
            document.getElementById('slide').style.overflow = "hidden";
        document.getElementById('navmid').style.display = "block";
        showing = 1;
        }
        else{
        n = -10;
        document.getElementById("shopview").style.marginLeft = n;
        console.log("phone");
            document.getElementById('slide').style.display = "block";
            document.getElementById('slide').style.width = "1000px" ;
            document.getElementById('slide').style.marginTop = "0";
            document.getElementById('slide').style.zIndex = "0";
            document.getElementById('slide').style.height = "auto";
            document.getElementById('slide').style.overflow = "hidden";
        document.getElementById('navmid').style.display = "none";
        showing = 0;
        }
      }
}

window.addEventListener("resize", function(){
    if(window.innerWidth > 880){
    n = -60;
    m = 0
    document.getElementById("shopview").style.marginLeft = n;
    document.getElementById('slide').style.marginLeft = m;
        document.getElementById('slide').style.display = "grid";
        document.getElementById('slide').style.gridTemplateColumns = "auto auto auto";
        document.getElementById('slide').style.gridGap = "10%";
        document.getElementById('slide').style.justifyContent = "center";
        document.getElementById('slide').style.width = "99%" ;
        document.getElementById('slide').style.marginTop = "-560px";
        document.getElementById('slide').style.zIndex = "1";
        document.getElementById('slide').style.height = "701px";
        document.getElementById('slide').style.overflow = "hidden";
    document.getElementById('navmid').style.display = "block";
    showing = 1;
    }
    else{
    n = -10;
    document.getElementById("shopview").style.marginLeft = n;
    document.getElementById('slide').style.marginLeft = m;
        document.getElementById('slide').style.display = "block";
        document.getElementById('slide').style.width = "1000px" ;
        document.getElementById('slide').style.marginTop = "0";
        document.getElementById('slide').style.zIndex = "0";
        document.getElementById('slide').style.height = "auto";
        document.getElementById('slide').style.overflow = "hidden";
    }
  });


function slideright() {
    if(window.innerWidth > 880){
        if(window.innerWidth > 1719 && n > -764){
            document.getElementById("shopview").style.marginLeft = n-dm;
            n = n-dm;
        }
        else if((window.innerWidth > 1319 && window.innerWidth < 1719) && n > -1116){
            document.getElementById("shopview").style.marginLeft = n-dm;
            n = n-dm;
        }
        else if((window.innerWidth > 800 && window.innerWidth < 1320) && n > -1468){
            document.getElementById("shopview").style.marginLeft = n-dm;
            n = n-dm;
        }
        else{
            console.log("DENIAL");
        }   
    }
    else if (window.innerWidth < 880){
        if((window.innerWidth > 600) && n > -802){
            document.getElementById("shopview").style.marginLeft = n-pm;
            n = n-pm;
        }
        else if((window.innerWidth > 0 && window.innerWidth < 600) && n > -1000){
            document.getElementById("shopview").style.marginLeft = n-pm;
            n = n-pm;
        }
        else{
            console.log("DENIAL");
        }
    }
    else{
        console.log("DENIAL");
    }
}

function slideleft() {
    if(window.innerWidth > 880){
        if(n < -61){
            document.getElementById("shopview").style.marginLeft = n+dm;
            n = n+dm;
        }
        else{
            console.log("DENIAL");
        }
    }
    else if(window.innerWidth < 880){
        if(n < -11){
            document.getElementById("shopview").style.marginLeft = n+pm;
            n = n+pm;
        }
        else{
            console.log("DENIAL");
        }
    }
    else{
        console.log("DENIAL");
    }
}

function sprayright(){
    if(window.innerWidth < 880){
        if(m>-448){
            document.getElementById('slide').style.marginLeft = m - 224;
            m = m - 224;
        }
        else{
            console.log("DENIAL")
        }
    }
    else{
        console.log("DENIAL")
    }
}

function sprayleft(){
    if(window.innerWidth < 880){
        if(m<0){
            document.getElementById('slide').style.marginLeft = m + 224;
            m = m + 224;
        }
        else{
            console.log("DENIAL")
        }
    }
    else{
        console.log("DENIAL")
    }
}

function navchange() {
    if(window.innerWidth < 880){
        if(showing == 0){
            document.getElementById('navmid').style.display = "block";
            showing = 1;
            console.log("block");
        }
        else{
            document.getElementById('navmid').style.display = "none";
            console.log("none");
            showing = 0;
        }
    }
    else{
            document.getElementById('navmid').style.display = block;
            console.log("block");
            showing = 1;
    }
}
