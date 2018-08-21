/*function findItem (picSrc){
    window.alert(picSrc); 
    var hldTotamt
    document.getElementById("formshow").reset();
    var hldTotamt = document.getElementById("tAmt");
    hldTotamt.innerHTML = 0.00
    var itemPic = ["img/trash1.jpg", "img/trash2.jpg", "img/trash3.jpg",  "img/trash4.jpg","img/trash5.jpg"];
    var itemDes = ["Red V Neck Tee","Black V Neck Tee","Grey V Neck Tee", "Maroon Baseball Tee","White V Neck Tee","Blue Baseball Tee" ];
    var i;
    for (i = 0; i < itemPic.length; i++) {
        if (picSrc == itemPic [i]) {
       /*  window.alert(itemPic [i]); */ 
 /*        var hldShirt = document.getElementById("shirtDes");
         hldShirt.value = itemDes [i];
         var hldPrice = document.getElementById("shirtPrice");
         hldPrice.value = itemPrice [i];
         var hldSrc = document.getElementById("shirtPic");
         hldSrc.src = picSrc;}
    }     
} */


$(document).ready(function(){
    $(".btn-success").click(function(){
        $("#congrads").fadeOut();
        $("#congrads").fadeIn("slow");
    });
});

/* cancel normal browser defaults to allow drop in another element */
function allowDrop(ev) {
    ev.preventDefault();
}
/* Set data type to 'text' and id of draggable image */
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
/* allow drop in element cancelling browser default and append/drop text image*/  
/* also will invoke testctr to show 'Thank You Message' */
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
   testctr (); 
}

function testctr() {
    $(document).ready(function(){
       $("#congrads2").fadeOut();
       $("#congrads2").fadeIn("slow");
    });
}



function initvalue () {
    var hldTotamt = document.getElementById("ctr");
    hldTotamt.innerHTML = 0.00;
}