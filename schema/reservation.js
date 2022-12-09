import * as Yup from "yup";

export const reservationsSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Full Name must be at least 3 characters"),

  number: Yup.string()
    .required("Number name is required")
    .min(10, "Number must be at least 10 characters"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email İs Required"),

  persons: Yup.string().required("Persons name is required"),

  date: Yup.string().required("Date name is required"),
});
