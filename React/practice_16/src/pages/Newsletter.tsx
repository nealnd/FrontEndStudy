import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Newsletter = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("test@test.com");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (Email !== "test@test.com") {
      e.preventDefault();
      toast.error("only test email allowed", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      e.preventDefault();
      navigate("/");
      toast.success("Success, check your mail", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <section className="page">
      <form
        method="post"
        action="/newsletter"
        className="form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
          our newsletter
        </h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            name="name"
            id="name"
            required={true}
          />
        </div>
        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            last name
          </label>
          <input
            type="text"
            className="form-input"
            name="lastName"
            id="lastName"
            required={true}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="text"
            className="form-input"
            name="email"
            id="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-block"
          style={{ marginTop: "0.5rem" }}
        >
          submit
        </button>
      </form>
    </section>
  );
};
