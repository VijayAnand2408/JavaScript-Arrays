var x = document.getElementById('f1');
var y = document.getElementById('f2');
var result = document.getElementById('res');
var form = document.getElementById('pro');
form.addEventListener('submit', function (Event) {

    if (!x.value || !y.value) {
        alert("Enter the Values");
    } else {

        let page = document.body.id;
        switch (page) {
            case 'add':
                var a = parseFloat(f1.value);
                var b = parseFloat(f2.value);
                var c = a + b;
                result.innerText = "Answer : " + c;
                Event.preventDefault();
                break;
            case 'sub':
                var a = parseFloat(f1.value);
                var b = parseFloat(f2.value);
                var c = a - b;
                result.innerText = "Answer : " + c;
                Event.preventDefault();
                break;
            case 'multi':
                var a = parseFloat(f1.value);
                var b = parseFloat(f2.value);
                var c = a * b;
                result.innerText = "Answer : " + c;
                Event.preventDefault();
                break;
            case 'divi':
                var a = parseFloat(f1.value);
                var b = parseFloat(f2.value);
                var c = a / b;
                var d = a % b;
                result.innerText = "Quotient : " + c + " Reminder :" + d;
                Event.preventDefault();
                break;
            case 'perc':
                var a = parseFloat(f1.value);
                var b = parseFloat(f2.value);
                var c = a / b;
                var d = c * 100;
                result.innerText = "Answer : " + d;
                Event.preventDefault();
            case 'hei':
                var a = parseFloat(f1.value);
                var b = parseFloat(f2.value);
                var c = (a / 2.5) / 12;
                var g = (a - 100);
                var f = g - 15;
                var e = c.toFixed(1);
                if (g < b) {
                    result.innerText = "your are : " + e + "feet" + " /  " + "You should go to Gym";
                } else if (f >= b) {
                    result.innerText = "your are : " + e + "feet" +  " / " + "You should eat well,Try to take some protiens";
                } else if (g==b){
                    result.innerText = "your are : " + e + "feet" +  " / " + "Maintain your figure your are perfect";
                } else {
                    result.innerText = "your are : " + e + "feet" +  " / " + "You seems normal";
                }
                Event.preventDefault();





        }






    }

});