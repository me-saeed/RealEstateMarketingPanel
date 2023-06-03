import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, useQuery } from 'react-query';
import ErrorService from 'services/formatError/ErrorService';
import userServices from 'services/httpService/userAuth/userServices';
import { toast } from 'react-toastify';
import ViewAssociate from 'admin/ViewAssociate';
import { localStorageData } from 'services/auth/localStorageData';
import { useDispatch, useSelector } from 'react-redux';

function ViewAllAssociate() {
  const [isEdit, setisEdit] = useState(false);
  const [listAssociate, setListAssociate] = useState([]);
  const getAllAssociate = useQuery(
    'ordersAssociate',
    () =>
      userServices.commonGetService(
        `/employee/fetchAllEmployee/${localStorageData('_id')}`
      ),
    {
      refetchOnWindowFocus: false,
      onError: (error) => {
        toast.error(ErrorService.uniformError(error));
      },
      onSuccess: (res) => {
        setListAssociate(res.data);
      },
    }
  );
  return (
    <div>
      <div className='mt-10 mx-10'>
        {getAllAssociate.isLoading == false && listAssociate != '' ? (
          <ViewAssociate
            data={listAssociate.data}
            deleteService=''
            formik={useFormik}
            setisEdit={setisEdit}
            showoption={false}
          />
        ) : null}
      </div>
    </div>
  );
}

export default ViewAllAssociate;
