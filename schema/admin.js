import * as Yup from "yup";

export const AdminSchema = Yup.object({
  username: Yup.string().required("Username İs Required"),

  password: Yup.string()
    .required("Password required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(=?.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/,
      "Password must contain at least one uppercase, one lowercase, one number and one spacial charecter."
    ),
});
