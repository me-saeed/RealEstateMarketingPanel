import React, { useState } from "react";

const index = () => {
  const [provider, setProvider] = useState("");
  const [market, setMarket] = useState("");
  const [numberOfPhones, setNumberOfPhones] = useState("");
  const [phoneType, setPhoneType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation and submit the form data to the server
    // Here you can make an API call to purchase the phone number

    // Reset the form fields after submission
    setProvider("");
    setMarket("");
    setNumberOfPhones("");
    setPhoneType("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Buy Phone Number</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="provider">
            Provider:
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            id="provider"
            value={provider}
            onChange={(event) => setProvider(event.target.value)}
            required
          >
            <option value="">Select Provider</option>
            <option value="Twilio">Twilio</option>
            <option value="Provider2">Provider 2</option>
            <option value="Provider3">Provider 3</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="market">
            Market:
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            id="market"
            value={market}
            onChange={(event) => setMarket(event.target.value)}
            required
          >
            <option value="">Select Market</option>
            <option value="Market1">Market 1</option>
            <option value="Market2">Market 2</option>
            <option value="Market3">Market 3</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold"
            htmlFor="numberOfPhones"
          >
            Number of Phones:
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            id="numberOfPhones"
            value={numberOfPhones}
            onChange={(event) => setNumberOfPhones(event.target.value)}
            required
          >
            <option value="">Select Number of Phones</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="phoneType">
            Phone Type:
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            id="phoneType"
            value={phoneType}
            onChange={(event) => setPhoneType(event.target.value)}
            required
          >
            <option value="">Select Phone Type</option>
            <option value="Local">Local</option>
            <option value="International">International</option>
          </select>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Buy
        </button>
      </form>
    </div>
  );
};

export default index;
