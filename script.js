
//Adding event listener to divide button

$("#divide").on("click", function (e) {
    let result = Number($("#firstNumber").val())/Number($("#secondNumber").val());
    $("#result").html(result);
   
});


//////// EUGENS MULTIPLY (dont touch) //////


$("#multiply").click(function () {

    let multi1 = Number($("#firstNumber").val());
    let multi2 = Number($("#secondNumber").val());
    let multiResult;

    multiResult = multi1 * multi2;
    $("#result").text(multiResult);

});

let subtract = document.querySelector("#subtract");
let field1 = document.querySelector("#firstNumber");
let field2 = document.querySelector("#secondNumber");
let p = document.querySelector("#result");

subtract.addEventListener("click", subtraction);

function subtraction() {
    let result = parseInt(field1.value - field2.value);
    $("#result").text(result);
    
}


$("#add").on("click", function (add) {
    let result = Number($("#firstNumber").val())
        + Number($("#secondNumber").val());

    $("#result").text(result);
});


//Adding event listener to reset button
$("#reset").on("click", function (e) {
    $("#firstNumber").val("");
    $("#secondNumber").val("");
    $("#result").text("");
});
