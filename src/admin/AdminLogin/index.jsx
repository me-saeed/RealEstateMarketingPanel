import React from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import useTranslation from 'common/customHooks/translations';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useMutation } from 'react-query';

import userService from 'services/httpService/userAuth/userServices';
import ErrorService from 'services/formatError/ErrorService';

function AdminLogin() {
  let navigate = useNavigate();
  const t = useTranslation();
  const { mutate } = useMutation(
    (updatePass) =>
      userService.commonPostService('/admin/adminVerify', updatePass),
    {
      onError: (error) => {
        toast.error(ErrorService.uniformError(error));
      },
      onSuccess: (data) => {
        ////  toast.success(data.data);
        localStorage.setItem('admintoken', JSON.stringify(data.data.data));

        navigate('/admin/addplace');
      },
    }
  );
  const params = useParams();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      pass: '',
    },
    validationSchema: Yup.object().shape({
      pass: Yup.string().min(8, t.mincharacters8).required(t.required),
      email: Yup.string().min(4, t.mincharacters4).required(t.required),
    }),
    onSubmit: async (values) => {
      ////// localStorage.setItem('admintoken', JSON.stringify(values));

      //   values.email = decodeURIComponent(params.email);
      //   values.uniqueId = params.id;
      console.log(values);

      mutate(values);
      ////// navigate('/admin/addtreatment');
      //   mutate(values);
    },
  });
  return (
    <div>
      <div className='flex-auto px-4 lg:px-10 py-10 pt-20'>
        <div className='flex content-center items-center justify-center h-full'>
          <div className='w-full lg:w-4/12 px-4'>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0'>
              <div className='rounded-t mb-0 px-6 py-6'>
                <div className='text-center mb-3'>
                  <h6 className='text-blueGray-500 text-sm font-bold'>
                    Admin Login
                  </h6>
                </div>

                <hr className='mt-6 border-b-1 border-blueGray-300' />
              </div>
              <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
                <form onSubmit={formik.handleSubmit}>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-email'
                    >
                      Email
                    </label>
                    <input
                      name='email'
                      id='email'
                      type='email'
                      className='input-styl'
                      placeholder='Email'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className='text-red-500 text-xs'>
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>

                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Passwort
                    </label>
                    <input
                      name='pass'
                      id='pass'
                      type='password'
                      className='input-styl'
                      placeholder='Password'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.pass}
                    />
                    {formik.touched.pass && formik.errors.pass ? (
                      <div className='text-red-500 text-xs'>
                        {formik.errors.pass}
                      </div>
                    ) : null}
                  </div>

                  <div className='text-center mt-6'>
                    <button className='btn-styl' type='submit'>
                      Signin
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className='flex flex-wrap mt-6 relative'>
              <div className='w-1/2'>
                <a href='/' className='text-black'>
                  Signin
                </a>
              </div>
              {/* <div className='w-1/2 text-right'>
                    <Link to='/auth/register' className='text-black'>
                      <small>Create new account</small>
                    </Link>
                  </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
