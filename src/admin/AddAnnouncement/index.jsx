import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, useQuery } from 'react-query';
import ErrorService from 'services/formatError/ErrorService';
import userServices from 'services/httpService/userAuth/userServices';
import { toast } from 'react-toastify';

import { localStorageData } from 'services/auth/localStorageData';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ViewAnnouncement from './ViewAnnouncement';

function AddAnnouncement() {
  const [isEdit, setisEdit] = useState(false);
  const [list, setList] = useState([]);

  const getAnnouncement = useQuery(
    'news',
    () => userServices.commonGetService(`/places/getAllNews`),
    {
      refetchOnWindowFocus: false,
      onError: (error) => {
        toast.error(ErrorService.uniformError(error));
      },
      onSuccess: (res) => {
        console.log(res.data.data);
        setList(res.data.data);
      },
    }
  );

  let user = {
    _id: '',

    title: '',
    desc: '',
    pics: '',
  };

  const [userSechema, setuserSechema] = useState(user);
  const formik = useFormik({
    initialValues: userSechema,
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .min(3, 'Must be more than 4 characters')
        .required('Required'),
      pics: Yup.string().required('Required'),

      desc: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      console.log(values);
      const formData = new FormData();
      formData.append('pics', values.pics);
      formData.append('title', values.title);
      formData.append('desc', values.desc);

      addNewAnnouncement.mutate(formData);
    },
  });

  const onChangeHandler = async (e) => {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById('output');
      output.src = reader.result;
    };
    if (e.target.files[0]) {
      const file = e.target.files[0];
      reader.readAsDataURL(file);
      formik.setFieldValue('pics', file);

      //   formData.append('pics', e.target.files[0]);
    }
  };

  const deleteService = useMutation(
    (deleteService) =>
      userServices.commonPostService('/places/Deletenews', deleteService),
    {
      onError: (error) => {
        toast.error(ErrorService.uniformError(error));
      },
      onSuccess: (res) => {
        toast.success('Announcement has been deleted');
        getAnnouncement.refetch();
      },
    }
  );

  const addNewAnnouncement = useMutation(
    (NewAnnouncement) =>
      userServices.commonPostService('/places/uploadNews', NewAnnouncement),
    {
      onError: (error) => {
        toast.error(ErrorService.uniformError(error));
      },
      onSuccess: (res) => {
        getAnnouncement.refetch();

        setuserSechema(user);
        formik.resetForm({ NewAnnouncement: '' });
        toast.success('Announcement has been created');
      },
    }
  );

  return (
    <div>
      <Container maxWidth='sm'>
        <div className='flex-auto px-2 lg:px-10 py-10 pt-0'>
          <div className='text-blueGray-400 text-center text-xl mb-3 font-bold'>
            Add Announcement
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className='relative w-full mb-3'>
              <div className='center-styl'>
                <img
                  id='output'
                  src='https://ui-avatars.com/api/?name=John+Doe'
                  className='w-24 h-24 rounded object-cover'
                  alt=''
                />
              </div>

              <div className='center-styl'>
                <label htmlFor='contained-button-file' className='mt-6'>
                  <input
                    accept='image/*'
                    id='contained-button-file'
                    type='file'
                    onChange={onChangeHandler}
                    className='img-upload'
                  />
                  <Button variant='contained' component='span'>
                    Upload
                  </Button>
                </label>
              </div>

              {formik.touched.pics && formik.errors.pics ? (
                <div className='text-red-500 text-xs mt-2'>
                  {formik.errors.pics}
                </div>
              ) : null}
            </div>

            <div className='relative w-full mb-3'>
              <label
                className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                htmlFor='grid-name'
              >
                Title
              </label>
              <input
                id='title'
                name='title'
                type='text'
                className='input-styl'
                placeholder='Title'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className='text-red-500 text-xs'>
                  {formik.errors.title}
                </div>
              ) : null}
            </div>

            <div className='relative w-full mb-3'>
              <label
                className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                htmlFor='grid-name'
              >
                Description
              </label>
              <textarea
                type='text'
                rows='4'
                cols='50'
                name='desc'
                id='desc'
                value={formik.values.desc}
                onChange={formik.handleChange}
                className='input-styl desc-styl'
                placeholder='Description'
              ></textarea>
              {formik.touched.desc && formik.errors.desc ? (
                <div className='text-red-500 text-xs'>{formik.errors.desc}</div>
              ) : null}
            </div>

            <div className='text-center mt-6'>
              <button className='btn-styl' type='submit'>
                Add Announcement
              </button>
            </div>
          </form>
        </div>
        {/* eslint-disable-next-line */}
      </Container>
      <div className='mx-10'>
        {getAnnouncement.isLoading == false && list != '' ? (
          <ViewAnnouncement
            data={list}
            deleteService={deleteService}
            formik={formik}
            // setisEdit={setisEdit}
          />
        ) : null}
      </div>
    </div>
  );
}

export default AddAnnouncement;
