import * as yup from "yup";

const userValidationRules = yup.object({

    username: yup
        .string()
        .email("Enter a valid email address")
        .required("Email is Mandatory"),

    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(20, "Password must be at most 20 characters")
        .matches(
            /^(?=.*[a-z])/,
            "Password must contain at least one lowercase letter"
        )
        .matches(
            /^(?=.*[A-Z])/,
            "Password must contain at least one uppercase letter"
        )
        .matches(
            /^(?=.*\d)/,
            "Password must contain at least one digit"
        )
        .matches(
            /^(?=.*[@$!%*?&])/,
            "Password must contain at least one special character"
        )
        .required("Password is Mandatory")

})


export default userValidationRules