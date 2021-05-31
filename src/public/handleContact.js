
// var handleValidate = function () {
//     var fullname = document.getElementById("fullname").textContent;
//     var mail = document.getElementById("mail").textContent;
//     var dt = document.getElementById("dt").textContent;
//     var mess = document.getElementById("mess").textContent;

//     console.log(fullname, mail, dt, mess);
//     return (e) => {
//         e.preventDefault();
//     }
// }


var x = document.getElementById("handle");
var y = document.getElementsByClassName("alert-danger");
var z = document.getElementsByClassName("alert-success");
console.log(x, y, z);
x.onclick = function(e) {
    var countErr = 0;
    var fullname = document.getElementById("fullname").value;
    var mail = document.getElementById("mail").value;
    var dt = document.getElementById("dt").value;
    var mess = document.getElementById("mess").value;
    var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var phoneno = /^\d{10}$/;
    if (fullname.length<5)  countErr++;
    if (mail.length<3 || !regExp.test(mail))  countErr++;
    if (!dt.match(phoneno))  countErr++;
    if (mess.length<4) countErr++;
    if (countErr != 0 ) {
        y[0].style.display = "block";
        console.log("co loi" + countErr+ dt);
        e.preventDefault();
        countErr = 0;
    } else {
        z[0].style.display = "block";
        y[0].style.display = "none";
    }
        
}

// window.onload = handleValidate;