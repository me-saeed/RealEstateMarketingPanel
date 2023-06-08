import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);

    if (option === "New") {
      // Code to handle "New" option
    } else if (option === "History") {
      // Code to handle "History" option
    }
  };

  const jsondata = [
    {
      img: "https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg?size=626&ext=jpg&ga=GA1.2.943323133.1662974246&semt=sph",
      name: "Who Are You ",
      desc: "From Where",

      price: "$56",
      detail: "What do you do",
      date: "DoB",
    },
  ];

  return (
    <>
      <div className="flex justify-between">
        <h3 className="p-5 text-blue-600 font-semibold text-2xl">
          Property Details
        </h3>
        <div className="p-3">
          <button className="bg-blue-600 rounded-full text-white p-2">
            Push to CRH
          </button>
        </div>
      </div>

      <Container maxWidth="sm">
        <div className="flex justify-between">
          <button className="bg-blue-600 px-3 py-2 text-white rounded-full">
            Property
          </button>
          <button className="bg-white px-5 py-2 border-2 rounded-full">
            Notes
          </button>
          <button className="bg-white border-2 px-5 py-2 rounded-full">
            Tasks
          </button>
        </div>
      </Container>

      <div className=" mt-12 h-screen">
        {jsondata.map((item, index) => (
          <div key={index}>
            <div className="flex justify-center w-full">
              {" "}
              <img
                src={item.img}
                alt={`Image ${index}`}
                className=" border-2 w-7/12 h-96"
              />
            </div>

            <Container maxWidth="sm">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  {" "}
                  <div className="mt-12 ">
                    <p>{item.name}</p>
                  </div>
                  <div className="mt-6">
                    <p>{item.desc}</p>
                  </div>
                  <div className="mt-6">
                    <p>{item.detail}</p>
                  </div>
                  <div className="mt-6">
                    <p>{item.price}</p>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <div className="mt-12 ">
                    <p>{item.name}</p>
                  </div>
                  <div className="mt-6">
                    <p>{item.desc}</p>
                  </div>
                  <div className="mt-6">
                    <p>{item.detail}</p>
                  </div>
                  <div className="mt-6">
                    <p>{item.price}</p>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        ))}
      </div>

      <br />
      <br />

      {/* <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <div className="mt-12">
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
                >
                  {isOpen ? "Close" : "Open"} Dropdown
                </button>
                {isOpen && (
                  <ul className="absolute mt-2 py-1 w-40 bg-white rounded-md shadow">
                    <li
                      onClick={() => handleOptionSelect("New")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      New
                    </li>
                    <li
                      onClick={() => handleOptionSelect("History")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      History
                    </li>
                  </ul>
                )}
                {selectedOption && (
                  <p className="mt-2 text-gray-600">
                    Selected option: {selectedOption}
                  </p>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container> */}
    </>
  );
}

export default Index;
