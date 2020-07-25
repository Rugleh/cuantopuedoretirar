AOS.init();

$("#money").on("input", function () {
  var moneyValue = $("#money").val();
  var moneyNoPoints = moneyValue.split(".").join("");
  var money = parseInt(moneyNoPoints);

  var calc = 0;
  if (money < 1000001) {
    calc = money;
  } else if (money > 1000000 && money < 10000001) {
    calc = 1000000;
  } else if (money >= 43000000) {
    calc = 4300000;
  } else {
    calc = money * 0.1;
  }

  calc = calc.toFixed(0);

  $("#result").text(formatNum(calc));

  if ($("#money").val() == " " || isNaN(money) == true) {
    $("#result").text(0);
  }
});

const formatNum = (n) =>
  Array.from(String(n))
    .reverse()
    .map((a, i) => {
      if (i % 3 == 0 && i > 0) return a + ".";
      return a;
    })
    .reverse()
    .join("");

$("#money").mask("0.000.000.000.000", { reverse: true });
