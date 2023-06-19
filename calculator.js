let cont = true;
let table = document.write("<table border='1', bordercolor='black'>");
table += document.write("<tr align='center', bgcolor='#6495ed'>" +
    "<th width='60'> X </th> " +
    "<th width='60'> OP </th>" +
    " <th width='60'> Y </th> " +
    "<th width='60'> Result </th>" +
    "</tr>");
let result;
let avg, total = 0;
const arrResult = [];

do {
    let x = prompt("Value of x", "0");
    let op = prompt("What is the Operator?", "+");
    let y = prompt("Value of y", "0");

    if(isNaN(parseInt(x)) || isNaN(parseInt(y)) ){
        result = "wrong input number";
    }else if(op != "+" && op != "-" && op != "%" && op != "/" && op != "*" ){
        result =  "computation error";
    } else{
        x = parseInt(x);
        y = parseInt(y);
        switch(op) {
            case "+":
                result = x + y;
                break;
            case "-":
                result = x - y;
                break;
            case "%":
                result = x % y;
                break;
            case "/":
                result = x / y;
                break;
            case "*":
                result = x * y;
                break;
            default:
                result = "Not found"
                break;
        }
        arrResult.push(result);
    }

    table += document.write("<tr align='center', bgcolor='yellow'>" +
        "<td width='60'>" + x + "</td>" +
        "<td width='60'>" + op + "</td>" +
        "<td width='60'>" + y + "</td>" +
        "<td width='60'>" + result + "</td>" +
        "</tr>");

    cont = confirm("Continue?");
} while(cont == true)

table += document.write("</table>");

const max = (Math.max(...arrResult));
const min = (Math.min(...arrResult));
for(let i=0;i<arrResult.length;i++){
    total += arrResult[i];
}
avg = total / arrResult.length;

table += document.write("<br/> <table border='1' bordercolor='black'>");
table += document.write("<tr bgcolor='#5f9ea0', align='center'>" +
    "<th width='60'> Min </th> " +
    "<th width='60'> Max </th> " +
    "<th width='60'> Average </th> " +
    "<th width='60'> Total </th>" +
    "</tr>");
table += document.write("<tr align='center', bgcolor='#6495ed'>" +
    "<td>" + min + "</td>" +
    "<td>" + max + "</td>" +
    "<td>" + avg + "</td>" +
    "<td>" + total + "</td>" +
    "</tr>" +
    "</table>");









