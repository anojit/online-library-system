// Java Script

function clickHam() {
    if ( document.getElementById("menu").style.width == '0px' )
    {
        console.log("if")
        document.getElementById("menu").style.width="250px";
        document.getElementById("topnav").style.marginRight="250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    else
    {
        console.log("else")
        document.getElementById("menu").style.width="0";
        document.getElementById("topnav").style.marginRight="0";
        document.body.style.backgroundColor = "white";
    }
}

function clickSearch(){
    document.getElementById("spc-title").style.display="none";
    document.getElementById("search-input").style.display="block";
    document.getElementById("search-icon").style.display="none";
}