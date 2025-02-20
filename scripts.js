// Currency value today

const USD = 5.7;
const GBP = 7.2;
const EUR = 5.97;

// getting elements
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

// Converter function

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    let total = amount * price;
    if (isNaN(total)) {
      return alert(
        "Por favor, digite o valor correto para realizar a conversão"
      );
    }

    total = formatCurrencyBRL(total).replace("R$", "");
    result.textContent = `${total} Reais`;

    footer.classList.add("show-result");
  } catch (error) {
    console.log(error);
    footer.classList.remove("show-result");
    alert("Não foi possível realizar a conversão, tente novamente mais tarde!");
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
