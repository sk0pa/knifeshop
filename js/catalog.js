function check() {
    try {
        return ('localStorage' in window && window['localStorage'] !== null);
    } catch (e) {
        return false;
    }
}

//if (check()) {
//    window.alert("");
//} else {
//    window.alert();
//}

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
        localStorage.setItem(i+'price', prices[i-1]);
        localStorage.setItem(i+'sum', 0);
        localStorage.setItem(i+'name', names[i-1]);
    }
}

function clearStorage() {
    for(var i=1; i<10; i++) {
        localStorage.removeItem(i+'number');
        localStorage.removeItem(i+'price');
        localStorage.removeItem(i+'sum');
        localStorage.removeItem(i+'name');
    }
}

function makeOrder() {
    initializeStorage();
    window.alert("Thank you for purchasing!");
}

function addItem(a, b) {
    var num = parseInt(b, 10);
    var id = a;
    var summm = 0;
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
    if(localStorage.getItem(id+'name')==undefined) 
        initializeStorage();
    
    if ((parseInt(localStorage.getItem(id+'number'))+num) > 100) {
        window.alert("За вами уже выехали!");
        return;
    }
    num = parseInt(localStorage.getItem(id+'number'))+num;
    localStorage.setItem(id+'number', num);
    summm = num*(localStorage[id+'price']);    
    localStorage.setItem(id+'sum', summm);
    window.alert('Ваш товар успешно добавлен');
}

function deleteItem(id) {
    localStorage.setItem(id+'number', 0);
    localStorage.setItem(id+'sum', 0);
}

function generatePage() {
    var allsum=0;
    var content="";
    for(id=1;id<10;id++) {
        if(localStorage.getItem(id+'number')!=0) {
            content+='<div class="goodinbucket"><span class="good name">'+localStorage[id+'name']+'</span><img src="images/product'+id+'.jpeg" class="goodimage"><p>Цена: <span class="price"> '+localStorage[id+'price']+' грн.</span></p><p>Количество: <span class="price"> '+localStorage[id+'number']+' шт.</span></p><p>Общая сумма: <span class="price"> '+localStorage[id+'sum']+' грн.</span></p><button type="submit" class="deletebutton" onclick="deleteItem('+id+')">Удалить</button></div>';
            allsum = allsum +(1*localStorage[id+'sum']);
            window.alert(allsum);
        }
    }
    if(allsum!=0) {
        content+='<div><p>Общая сумма заказа: '+allsum+' грн. </p><form><button type="submit" onclick="makeOrder()">Купить всё</button></form></div>';
    } else { content+='<h3>Корзина пуста.</h3>'; }
    document.getElementById("buck").innerHTML=content;
}