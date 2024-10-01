import React from "react";
import { useForm } from "react-hook-form";
function FormVal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const formvalues = watch();
  const password = watch("password");
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState({}); // Changed to an object

  // const validateForm = () => {
  //   const errors = {};
  //   if (!name) {
  //     errors.name = "Name is required";
  //   }
  //   if (!email) {
  //     errors.email = "Email is necessary";
  //   } else if (!/\S+@\S+\.\S+/.test(email)) {
  //     // Fixed regex
  //     errors.email = "Email is Invalid";
  //   }
  //   if (!password) {
  //     errors.password = "Password is necessary";
  //   } else if (password.length < 6) {
  //     errors.password = "Password must be atleast 6 characters";
  //   }
  //   return errors; // Added return statement
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationErrors = validateForm();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //   } else {
  //     console.log("Form Submitted");
  //   }
  // };
  const onsubmit = (data) => console.log(data);
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onsubmit)}>
        {" "}
        {/* Changed from onClick to onSubmit */}
        <h1>Login Form</h1>
        <div className="ui-form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="name"
              {...register("name", { required: "Name is Required" })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: !/\S+@\S+\.\S+/,
                  message: "Email is Invalid",
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
        </div>
        <button type="submit" className="Submitbutton">
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default FormVal;
