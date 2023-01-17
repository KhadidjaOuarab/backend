const CurrencyModel = require("../Models/Currency.model.js");
const currencyController = {};

currencyController.getAllCurrencies = async function (req, res) {
  console.log("getAllCurrencies");
  let currency;
  try {
    console.log("inside try getAllCurrencies");
    currency = await CurrencyModel.find();
    console.log(await CurrencyModel.find());
    res.send(currency);
  } catch (error) {
    res.status(500).send(error);
  }
};

/*cityController.createCity = async function (req, res) {
  console.log("createCity");
  console.log(req.body);

  const cityAdd = {
    "City Code Alpha": "AAA",
    "City Name": "ANAA",
    "Country Alpha Code": "PF",
    "Country Name": "FRENCH POLYNESIA",
    "Main City": "AAA",
  };
  //const { username, password } = req.body;
  const city = new CityModel(cityAdd);

  try {
    await city.save();

    res.status(201).json({
      message: "city created successfully",
      city,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while creating city",
      error: error,
    });
  }
};*/
module.exports = currencyController;
