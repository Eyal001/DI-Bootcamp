const apiKey = "0ca08d9f3a0b0f7b103d8032";
const apiBaseUrl = `https://v6.exchangerate-api.com/v6/0ca08d9f3a0b0f7b103d8032/latest/USD`;

const fetchConversionRates = async (baseCurrency) => {
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/0ca08d9f3a0b0f7b103d8032/latest/${baseCurrency}`
    );
    const data = await response.json();
    if (data.result !== "success") {
      throw new Error("Error fetching conversion rates ");
    }
    return data.conversion_rates;
  } catch (error) {
    console.error("Error fetching conversion rates", error);
    return {};
  }
};

const convertCurrency = async (fromCurrency, toCurrency, amount) => {
  const conversionRates = await fetchConversionRates(fromCurrency);
  if (!conversionRates[toCurrency]) {
    console.error("Unsupported target currency");
    return null;
  }
  const convertedAmount = amount * conversionRates[toCurrency];
  return convertedAmount;
};

const currencyDropdown = async () => {
  const initialRates = await fetchConversionRates("USD");
  const currencyList = Object.keys(initialRates);

  const fromCurrency = document.getElementById("from-currency");
  const toCurrency = document.getElementById("to-currency");

  fromCurrency.innerHTML = "";
  toCurrency.innerHTML = "";

  currencyList.forEach((currency) => {
    const optionFrom = document.createElement("option");
    optionFrom.value = currency;
    optionFrom.textContent = currency;
    fromCurrency.appendChild(optionFrom);

    const optionTo = document.createElement("option");
    optionTo.value = currency;
    optionTo.textContent = currency;
    toCurrency.appendChild(optionTo);
  });
};

const displayResult = async () => {
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;
  const amount = parseFloat(
    document.querySelector("input[type='number']").value
  );

  if (!fromCurrency || !toCurrency || isNaN(amount)) {
    console.error("Please enter valid input values.");
    return;
  }

  const convertedAmount = await convertCurrency(
    fromCurrency,
    toCurrency,
    amount
  );

  if (convertedAmount !== null) {
    document.getElementById(
      "result"
    ).textContent = `Converted amount: ${convertedAmount.toFixed(
      2
    )} ${toCurrency}`;
  }
};

document
  .getElementById("convert-button")
  .addEventListener("click", displayResult);

window.onload = currencyDropdown();
