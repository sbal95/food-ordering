import * as Yup from "yup";

export const RegisterSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Full Name must be at least 3 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email İs Required"),

  password: Yup.string()
    .required("Password required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(=?.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/,
      "Password must contain at least one uppercase, one lowercase, one number and one spacial charecter."
    ),
  Confirmpassword: Yup.string()
    .required("Confirm password Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match."),
});
