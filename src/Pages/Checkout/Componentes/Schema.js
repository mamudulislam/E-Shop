import * as Yup from 'yup';

export const billingInitialValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  address: '',
  country: 'Indonesia',
  state: 'Kalimantan Timur',
  city: 'Samarinda',
  zipCode: '',
  orderNotes: ''
};

export const billingDetailsSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  phoneNumber: Yup.string()
    .required('Phone Number is required')
    .matches(/^\+?[0-9\s\-]+$/, 'Invalid phone number'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  address: Yup.string().required('Address is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string().required('City is required'),
  zipCode: Yup.string()
    .required('ZIP Code is required')
    .matches(/^\d{5,6}$/, 'ZIP Code must be 5 or 6 digits'),
  orderNotes: Yup.string()
    .required('Order notes are required')
    .max(150, 'Order Notes cannot exceed 150 characters'),
});
