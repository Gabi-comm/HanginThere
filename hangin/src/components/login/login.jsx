import React, { useState } from "react";
import * as Components from "./laman";
import { supabase } from "../../services/supabaseClients";
import { useNavigate } from "react-router-dom";
import './loginstyle.css';

function Login() {
  const [signIn, toggle] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const { name, email, password } = formData;


    const { data, error } = await supabase.from("Sign in").insert([
      { Name: name, Email: email, Password: password },
    ]);

    if (error) {
      alert("Error signing up: " + error.message);
    } else {
      alert("Signup successful!");
      console.log(data);
      toggle(true); 
      setFormData({ name: "", email: "", password: "" });}
  };

  // Handle Sign In
  const handleSignIn = async (e) => {
  e.preventDefault();

  const email = e.target.email.value.trim();
  const password = e.target.password.value.trim();

  const { data, error } = await supabase
    .from('Sign in')
    .select('Email, Password, Name');

  if (error) {
    alert("Error fetching users: " + error.message);
    console.error(error);
    return;
  }

  console.log("Fetched data:", data);
  console.log("Entered email:", email);
  console.log("Entered password:", password);

  const user = data.find(
    (row) => row.Email.trim() === email && row.Password.trim() === password
  );

  if (user) {
    alert("Login successful! Welcome " + user.Name);
    navigate("/dashboard");
  } else {
    alert("Wrong Credentials");
  }
};


  return (
    <Components.Container>
      {/* signup */}
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form onSubmit={handleSignUp}>
          <Components.Title style={{ color: "#8e2bff" }}>Create Account</Components.Title>
          <Components.Input style={{ color: "#8e2bff" }}
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <Components.Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <Components.Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <Components.Button type="submit">Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      {/*signin form */}
      <Components.SignInContainer signinIn={signIn}>
        <Components.Form onSubmit={handleSignIn}>
          <Components.Title style={{ color: "#8e2bff" }}>Log In</Components.Title>
          <Components.Input type="email" name="email" placeholder="Email" required />
          <Components.Input type="password" name="password" placeholder="Password" required />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button type="submit">Log In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Hangin There</Components.Title>
            <Components.Paragraph>Your Air, Your Move</Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>Log In</Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hangin There</Components.Title>
            <Components.Paragraph>Your Air, Your Move</Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>Sign Up</Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default Login;
