import Sidebar from "@/pages/Sidebardash/Sidebar";
import React from "react";
import Navbarreal from "./Navbarreal";
import Container from "@mui/material/Container";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
// import Select from "react-select";

function Compaign() {
  const [contacts, setContacts] = useState([]);
  const [selectedphonenumbers, setSelectedPhonenumbers] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const formik = useFormik({
    initialValues: {
      compaignName: "",
      description: "",
      //   firstName: "",
      //   lastName: "",
      //   phoneNumber: "",
    },
    validationSchema: Yup.object().shape({
      compaignName: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      const formData = {
        compaignName: values.compaignName,
        description: values.description,
        // firstName: values.firstName,
        // lastName: values.lastName,
        // phoneNumber: values.phoneNumber,
        // contacts: contacts,
      };
      console.log(formData, "formdata");
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
  };

  //   const handleAddContact = () => {
  //     if (
  //     //   formik.values.firstName.trim() !== "" &&
  //       formik.values.lastName.trim() !== "" &&
  //       formik.values.phoneNumber.trim() !== ""
  //     ) {
  //       const newContact = {
  //         firstName: formik.values.firstName.trim(),
  //         lastName: formik.values.lastName.trim(),
  //         phoneNumber: formik.values.phoneNumber.trim(),
  //       };
  //       setContacts([...contacts, newContact]);
  //       formik.setFieldValue("firstName", "");
  //       formik.setFieldValue("lastName", "");
  //       formik.setFieldValue("phoneNumber", "");
  //     }
  //   };
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];

  const handleSelectChange = (selectedOptions) => {
    const selectedphonenumbers = selectedOptions.map((option) => option.value);
    setSelectedPhonenumbers(selectedphonenumbers);
    formik.setFieldValue("email", selectedphonenumbers);
  };

  const handleSelectAll = () => {
    const selectedphonenumbers = selectAll
      ? []
      : options.map((option) => option.value);
    setSelectedPhonenumbers(selectedphonenumbers);
    formik.setFieldValue("email", selectedValues);
    setSelectAll(!selectAll);
  };

  return (
    <>
      <Sidebar />
      <div className='relative  md:ml-64 md:-mt-24'>
        <Navbarreal />
      </div>
      <Container maxWidth='lg'>
        <div className='relative  md:ml-64 md:mt-32  lg:mt-48'>
          <form onSubmit={formik.handleSubmit}>
            <div className='relative w-full '>
              <label
                className='block uppercase text-blueGray-600 text-xs font-bold '
                htmlFor='compaignName'
              >
                Compaign Name
              </label>
              <input
                id='compaignName'
                name='compaignName'
                type='text'
                className='input-styl'
                placeholder='Add Compaign'
                value={formik.values.compaignName}
                onChange={handleInputChange}
              />
              {formik.errors.compaignName && formik.touched.compaignName && (
                <div className='text-red-500'>{formik.errors.compaignName}</div>
              )}
            </div>
            <div className='relative w-full mt-10'>
              <label
                className='block uppercase text-blueGray-600 text-xs font-bold '
                htmlFor='description'
              >
                Description
              </label>
              <input
                id='description'
                name='description'
                type='text'
                className='input-styl'
                placeholder='Add Description'
                value={formik.values.description}
                onChange={handleInputChange}
              />
            </div>
            <div className=' input-styl mt-10'>
              <input
                type='checkbox'
                id='select-all'
                checked={selectAll}
                onChange={handleSelectAll}
                className=''
              />
              <label htmlFor='select-all' className='ml-1 font-semibold'>
                Select All
              </label>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Compaign;
