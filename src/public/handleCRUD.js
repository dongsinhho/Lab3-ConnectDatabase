console.log("ĐƯỢC SỬ DỤNG");
var edit = document.getElementsByClassName('edit');
var details = document.getElementsByClassName('details');
var delete1 = document.getElementsByClassName('delete');
var price = document.getElementsByClassName("price");
var state = document.getElementsByClassName("state");

for(let i=0; i<edit.length; i++){

    // sự kiện nhấn nút edit
    edit[i].onclick = function() {
        console.log("edit"+ i);
    }

    // sự kiện nhấn nút details
    details[i].onclick = function() {
        alert("Tính năng đang cập nhật");
    }

    // sự kiện nhấn nút delete
    delete1[i].onclick = function() {
        console.log("delete");
    }

    // xử lý hiển thị giá 
    var x = price[i].textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    x = x + " VND"
    price[i].textContent= x;

    // xử lý hiển thị tình trạng hàng
    if (state[i].textContent == "(0)") {
        state[i].previousElementSibling.textContent = "Hết hàng";
        state[i].previousElementSibling.style.color = "red";
        //state[i].parentElement.parentElement.lastElementChild.firstElementChild.style.color = "gray";
        //state[i].parentElement.parentElement.lastElementChild.firstElementChild.setAttribute("href", "#");
    }
}

var page = document.getElementsByClassName("page-link");
for (let i=0; i<=2; i++) {
    if (page[i].textContent == "0") 
        page[i].hidden = true;
    page[i].setAttribute("href", "?page="+page[i].textContent);
}



