let tipCalculate = () => {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;
  if (isNaN(billAmt)) {
    alert("Please Enter The Amount In Rupees");
    return;
  }
  else if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }
  else if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }
  var total = (billAmt * serviceQual) / numOfPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("calculate").onclick = function() {
  tipCalculate();
};

const btn = document.getElementById('calculate');
btn.addEventListener('click', function handleClick(event) {
  document.getElementById('billamt').value = '';
  document.getElementById('serviceQual').value = '';
  document.getElementById('peopleamt').value = '';
});