// $(document).ready(function(){
//     $("button").click(function(){
//       $("p").hide();
//     });
//     $(window).load(function(){
//         if($("#tinhtrang").text() == 0 ) {
//             $("#tinhtrang").text("Hết hàng");
//         }
//     })
//   });


var handle = function() {
    var status = document.getElementsByClassName("soluong");
    for( var i=0; i<=9; i++) {
        if (status[i].textContent == "(0)") {
            status[i].previousElementSibling.textContent = "Hết hàng";
            status[i].previousElementSibling.style.color = "red";
            status[i].parentElement.parentElement.lastElementChild.firstElementChild.style.color = "gray";
            status[i].parentElement.parentElement.lastElementChild.firstElementChild.setAttribute("href", "#");
        }
    }
    var money = document.getElementsByClassName("gia");
    for( var i=0; i<=9; i++) {
        var x = money[i].textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        x = x + " VND"
        money[i].textContent= x;
    }
    
}

window.onload = handle;