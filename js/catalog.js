function check() {
    try {
        return ('localStorage' in window && window['localStorage'] !== null);
    } catch (e) {
        return false;
    }
}

if (check()) {
    window.alert("");
} else {
    window.alert();
}

function initializeStorage() {
    var prices = [720,576,528,1152,576,576,528,576,624];
    var names = [
        "Нож охотничий 2565 L (кожа)",
        "Нож охотничий 2287 L",
        "Нож охотничий 2284 WP",
        "Нож охотничий 2282 BWP",
        "Нож охотничий 2290 LP (кожа)",
        "Нож охотничий 2290 BLP",
        "Нож охотничий 2564 BL",
        "Нож охотничий 2287 W",
        "Нож охотничий 2282 VWP"];
    
    for(var i=1; i<10; i++) {
        localStorage.setItem(i+'number', 0);
        localStorage.setItem(i+'price', prices[i]);
        localStorage.setItem(i+'sum', 0);
        localStorage.setItem(i+'name', names[i]);
    }
}

function makeOrder() {
    initializeStorage();
    window.alert("Thank you for purchasing!");
}

function addItem(a, b) {
    var num = parseInt(b, 10);
    var id = a;
    if (num < 0) {
        window.alert("Введите положительное количество товара!");
        return;
    }
    if (num.toString() === "NaN") {
        window.alert("Введите положительное количество товара!");
        return;
    }
    if (num > 100) {
        window.alert("За вами уже выехали!");
        return;
    }
    if ((localStorage.getItem(id+'number')+num) > 100) {
        window.alert("За вами уже выехали!");
        return;
    }
    num = localStorage.getItem(id+'number')+num;
    localStorage.setItem(id+'number', num);
    var sum = localStorage.getItem(id+'sum'); 
    localStorage.setItem(id+'sum', sum+(num*(localStorage.getItem[i+'price'])));
}

function deleteItem(id) {
    localStorage.setItem(id+'number', 0);
    localStorage.setItem(id+'sum', 0);
}

function generatePage() {

}

//http://hashcode.ru/questions/185188/%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-html-%D0%BA%D0%BE%D0%B4%D0%B0-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-javascript