import Sidebar from "@/pages/Sidebardash/Sidebar";
import React from "react";
import Navbarreal from "./Navbarreal";
import Container from "@mui/material/Container";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { JsonToExcel } from "react-json-to-excel";
import readXlsxFile from "read-excel-file";
import FileReaderInput from "react-file-reader-input";
function Phonenumbers() {
  const [contacts, setContacts] = useState([]);
  const formik = useFormik({
    initialValues: {
      //   compaignName: "",
      //   description: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object().shape({
      //   compaignName: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      const formData = {
        // compaignName: values.compaignName,
        // description: values.description,
        // firstName: values.firstName,
        // lastName: values.lastName,
        // phoneNumber: values.phoneNumber,
        contacts: contacts,
      };
      console.log(formData, "formdata");
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
  };

  const handleAddContact = () => {
    if (
      formik.values.firstName.trim() !== "" &&
      formik.values.lastName.trim() !== "" &&
      formik.values.phoneNumber.trim() !== ""
    ) {
      const newContact = {
        firstName: formik.values.firstName.trim(),
        lastName: formik.values.lastName.trim(),
        phoneNumber: formik.values.phoneNumber.trim(),
      };
      setContacts([...contacts, newContact]);
      formik.setFieldValue("firstName", "");
      formik.setFieldValue("lastName", "");
      formik.setFieldValue("phoneNumber", "");
    }
  };

  const handleFileUpload = (e, results) => {
    results.forEach((result) => {
      const [e, file] = result;
      readXlsxFile(file).then((rows) => {
        const header = rows[0];
        const contactsData = rows.slice(0).map((row) => {
          return {
            firstName: row[0],
            lastName: row[1],
            phoneNumber: row[2],
          };
        });
        setContacts([...contacts, ...contactsData]);
      });
    });
  };
  return (
    <>
      <Sidebar />
      <div className='relative   md:ml-64 md:-mt-24'>
        <Navbarreal />
      </div>

      <Container maxWidth='lg'>
        <form onSubmit={formik.handleSubmit}>
          <div className='relative md:ml-64  md:mt-32  lg:mt-48'>
            <div className=''>
              <h1 className='block uppercase text-blueGray-600 text-lg flex justify-center font-bold mt-10'>
                {" "}
                Contact/Phone Number
              </h1>
            </div>
            <div className='relative w-full mt-10'>
              <label
                className='block uppercase text-blueGray-600 text-xs font-bold '
                htmlFor='firstName'
              >
                First Name
              </label>
              <input
                id='firstName'
                name='firstName'
                type='text'
                className='input-styl'
                placeholder='First Name'
                value={formik.values.firstName}
                onChange={handleInputChange}
              />
              <label
                className='block uppercase text-blueGray-600 text-xs mt-6 font-bold '
                htmlFor='firstName'
              >
                Last Name
              </label>
              <input
                id='lastName'
                name='lastName'
                type='text'
                className='input-styl '
                placeholder='Last Name'
                value={formik.values.lastName}
                onChange={handleInputChange}
              />
              <label
                className='block uppercase text-blueGray-600 text-xs font-bold mt-6'
                htmlFor='firstName'
              >
                Phone Number
              </label>
              <input
                id='phoneNumber'
                name='phoneNumber'
                type='number'
                className='input-styl '
                placeholder='Add Phone Number'
                value={formik.values.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className='flex justify-center'>
              <button
                className='border-2 bg-green-500 text-white p-4 rounded-lg flex justify-center mt-10'
                onClick={handleAddContact}
                type='button'
              >
                Add Phone Number
              </button>
              <div>
                <FileReaderInput
                  as='text'
                  id='fileInput'
                  onChange={handleFileUpload}
                >
                  <button className='border-2 bg-green-500 text-white p-4 rounded-lg flex justify-center mt-10'>
                    Upload File
                  </button>
                </FileReaderInput>
              </div>
            </div>

            {/* <div className='flex justify-center'></div> */}
            <table className='mt-10'>
              <thead>
                <tr className=''>
                  <th className='ysfdiasyfdifi'>First Name</th>
                  <th className=''>Last Name</th>
                  <th className=''>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => (
                  <tr key={index}>
                    <td>{contact.firstName}</td>
                    <td>{contact.lastName}</td>
                    <td>{contact.phoneNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='flex justify-center'>
              <button
                className='border-2 bg-green-500 text-white p-4 rounded-lg flex justify-center mt-10'
                type='submit'
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Phonenumbers;
