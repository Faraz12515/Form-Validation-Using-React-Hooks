import React, { useState } from "react";

export default function FormValidation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  const { name, email, password, nameError, emailError, passwordError } = form;

  const Valid = () => {
    if (!email.includes("@")) {
      setForm((prevState) => {
        return {
          ...prevState,
          emailError: "Invalid Email",
          passwordError: "Invalid Password",
        };
      });
    } else if (password.length < 5) {
      setForm((prevState) => {
        return {
          ...prevState,

          passwordError: "Password should be more than 5",
        };
      });
    } else if (!email.includes("@") && password.length < 5) {
      setForm((prevState) => {
        return {
          ...prevState,
          emailError: "Invalid email",
          passwordError: "Password should be more than 5",
        };
      });
    } else {
      return true;
    }
  };
  const Submit = () => {
    if (Valid()) {
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <div>
      <h2>Form Validation</h2>
      <label>Name: </label>
      <input
        type="text"
        placeholder="faraz e.g"
        onChange={(e) =>
          setForm((prevState) => {
            return {
              ...prevState,
              name: e.target.value,
            };
          })
        }
      />
      <p style={{ color: "#F52E46", fontSize: "16px" }}>{nameError}</p>

      <label>Email: </label>
      <input
        type="text"
        placeholder="faraz@example.com"
        onChange={(e) =>
          setForm((prevState) => {
            return {
              ...prevState,
              email: e.target.value,
            };
          })
        }
      />
      <p style={{ color: "#F52E46", fontSize: "16px" }}>{emailError}</p>

      <label>Password: </label>
      <input
        type="text"
        placeholder="password"
        onChange={(e) =>
          setForm((prevState) => {
            return {
              ...prevState,
              password: e.target.value,
            };
          })
        }
      />
      <p style={{ color: "#F52E46", fontSize: "16px" }}>{passwordError}</p>
      <button onClick={() => Submit()}>Submit</button>
    </div>
  );
}
