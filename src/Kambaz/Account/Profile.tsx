import { Form, FormSelect } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form.Control id="wd-username"
             placeholder="username"
             value="alice"
             className="mb-2"/>
      <Form.Control id="wd-password"
             placeholder="password" type="password"
             value="123"
             className="mb-2"/>
      <Form.Control id="wd-first-name"
             placeholder="First Name"
             value="Alice"
             className="mb-2"/>
      <Form.Control id="wd-last-name"
             placeholder="Last Name"
             value="Wonderland"
             className="mb-2"/>
      <Form.Control id="wd-dob"
             placeholder="mm/dd/yyyy"
             value="mm/dd/yyyy"
             className="mb-2"/>
      <Form.Control id="wd-email"
             placeholder="example@example.com" type="email"
             value="alice@wonderland.com"
             className="mb-2"/>
      <FormSelect>
        <option selected>User</option>
        <option>Faculty</option>
        <option>Admin</option>
        <option>Student</option>
      </FormSelect>
      <Link id="wd-signin-btn"
            to="/Kambaz/Account/Signin"
            className="btn btn-danger w-100 mb-2">
            Sign Out </Link>
    </div> );}