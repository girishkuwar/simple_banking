var viewtrans = document.getElementById("view-t");
viewtrans.addEventListener("click", displayTrans);
var withdraw = document.getElementById("withdraw");
withdraw.addEventListener("click", withdrawCash);
var deposit = document.getElementById("deposit");
deposit.addEventListener("click", depositCash);
var balance = document.getElementById("totalbalance");
var totalbalance = 0;
var row = 1;


function withdrawCash() {
    var name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;

    if (!name || !amount) {
        alert("please fill all the boxes");
        return;
    }
    document.getElementById("name-d").innerHTML = name;
    var actype = document.getElementById("account-d");
    if (document.getElementById("a1").checked) {
        actype.innerHTML = document.getElementById("a1").value;
    } else {
        actype.innerHTML = document.getElementById("a2").value;
    }

    totalbalance = totalbalance - parseInt(amount);
    if (totalbalance < 0) {
        alert("you have insuficient balance");
        return;
    }

    var display = document.getElementById("display");
    var newRow = display.insertRow(row);


    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);


    document.getElementById("balance").innerHTML = " Rs " + totalbalance.toLocaleString('en-US');
    balance.innerHTML = " Rs " + totalbalance.toLocaleString('en-US');
    cell1.innerHTML = "Withdraw";
    cell2.innerHTML = " Rs " + parseInt(amount).toLocaleString('en-US');
    cell3.innerHTML = " Rs " + totalbalance.toLocaleString('en-US');
}

function depositCash() {
    var name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;

    if (!name || !amount) {
        alert("please fill all the boxes");
        return;
    }
    document.getElementById("name-d").innerHTML = name;
    var actype = document.getElementById("account-d");
    if (document.getElementById("a1").checked) {
        actype.innerHTML = document.getElementById("a1").value;
    } else {
        actype.innerHTML = document.getElementById("a2").value;
    }
    var display = document.getElementById("display");

    var newRow = display.insertRow(row);


    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    totalbalance = parseInt(amount) + totalbalance;
    amount = amount.toLocaleString('en-US');

    document.getElementById("balance").innerHTML = " Rs " + totalbalance.toLocaleString('en-US');
    balance.innerHTML = " Rs " + totalbalance.toLocaleString('en-US');
    cell1.innerHTML = "Deposit";
    cell2.innerHTML = " Rs " + parseInt(amount).toLocaleString('en-US');
    cell3.innerHTML = " Rs " + totalbalance.toLocaleString('en-US');

}

function displayTrans() {
    document.getElementById("trans-dt").style.visibility = "visible";
}