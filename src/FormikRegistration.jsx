import "./App.css";
import { useFormik } from "formik";

const FormikRegistration = () => {
    const formik = useFormik({
        initialValues: {
            email: "mulaz.d@westagilelabs.com",
            password: "",
            age: 18,
            fullName: "",
        },
        onSubmit(values) {
            console.log(values);
            let registeredUsers = [];
            if (localStorage.getItem("RegisteredUsers")) {
                registeredUsers = JSON.parse(
                    localStorage.getItem("RegisteredUsers")
                );
                registeredUsers.push({
                    email: values.email,
                    password: values.password,
                    age: values.age,
                    fullName: values.fullName,
                });
                localStorage.setItem(
                    "RegisteredUsers",
                    JSON.stringify(registeredUsers)
                );
            } else {
                registeredUsers.push({
                    email: values.email,
                    password: values.password,
                    age: values.age,
                    fullName: values.fullName,
                });
                localStorage.setItem(
                    "RegisteredUsers",
                    JSON.stringify(registeredUsers)
                );
            }
        },
        validate() {
            const errors = {};
            let mail = formik.values.email;
            let pwd = formik.values.password;
            let Age = parseInt(formik.values.age);
            let fname = formik.values.fullName;

            if (mail.length < 5 || mail.length > 30) {
                errors.email = "*Email length should be in 5-30 chars";
            }
            if (pwd.length < 4 || pwd.length > 20) {
                errors.password = "*Password length should be in 4-20 chars";
            }
            if (Age < 18 || Age > 120) {
                errors.age = "*Age should be in between 18-120";
            }
            if (fname.length < 5 || fname.length > 20) {
                errors.fullName = "*Full Name length should be in 4-20 chars";
            }
            return errors;
        },
    });
    return (
        <div className="regForm">
            <h1 className="text-center">Formik Registration</h1>
            <form onSubmit={formik.handleSubmit} noValidate>
                <div className="input">
                    <input
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="form-control"
                    />
                    <p className="error">
                        {formik.errors.email ? formik.errors.email : null}
                    </p>
                </div>
                <div className="input">
                    <input
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className="form-control"
                    />
                    <p className="error">
                        {formik.errors.password ? formik.errors.password : null}
                    </p>
                </div>
                <div className="input">
                    <input
                        type="number"
                        name="age"
                        onChange={formik.handleChange}
                        value={formik.values.age}
                        className="form-control"
                    />
                    <p className="error">
                        {formik.errors.age ? formik.errors.age : null}
                    </p>
                </div>
                <div className="input">
                    <input
                        type="text"
                        name="fullName"
                        onChange={formik.handleChange}
                        value={formik.values.fullName}
                        className="form-control"
                    />
                    <p className="error">
                        {formik.errors.fullName ? formik.errors.fullName : null}
                    </p>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-success m-auto">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};
export default FormikRegistration;
