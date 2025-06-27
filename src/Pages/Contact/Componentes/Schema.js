import { object, string } from "yup";

export const contactSchema = object({
  name: string().required("please enter your name"),
  phone: string().max(11).required("please enter your number"),
  email: string().email("invalid email").required("please enter your email"),
  message: string().required("please enter your message"),
});

export const initialValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};