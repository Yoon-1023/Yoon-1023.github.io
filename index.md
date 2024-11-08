---
layout: default
title: "Home"
permalink: /
---

<style>
/* Overall page content background below header */
body {
  background-color: #f9f9f9; /* Slight grey background for the whole page */
  margin: 0;
  padding: 0;
}

/* Header area styling */
header {
  background-color: white;
  margin: 0;
  padding: 20px 0;
}

/* Separation line for clarity below the header */
hr {
  border-top: 2px solid #ddd;
  margin: 0;
}

/* Home-specific container for layout */
.home-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  padding: 20px; /* Padding for spacing inside the grey background */
  background-color: #f7f7f7; /* Slightly grey background for content */
  border-radius: 8px; /* Rounded corners for aesthetic */
}

/* Photo container styling */
.photo-box {
  width: 250px; /* Fixed width for the box */
  text-align: center; /* Center-align content */
  padding: 10px; /* Padding inside the box */
  background-color: white; /* White background for contrast */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  margin: 0 auto; /* Center the box horizontally */
}

/* Photo styling */
.photo-box img {
  width: 100%; /* Ensure it scales to the container width */
  max-width: 250px; /* Limit maximum width */
  height: auto; /* Keep the original aspect ratio */
  margin-bottom: 10px; /* Add space below the image */
  display: block; /* Prevent inline spacing issues */
}

/* About Me section */
.about-me {
  flex: 1;
  padding: 20px;
  background-color: white; /* White box background */
  border-radius: 0; /* No rounded edges */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Optional subtle shadow */
}
</style>

<div class="home-container">
  <!-- Left box with photo and titles -->
  <div class="photo-box">
    <img src="/dc55329f32f89fddf885749e03580c5b.jpeg" alt="Junhao Yin's photo">
    <h3>Junhao Yin</h3>
    <p>Senior Undergrad</p>
    <p>Nanjing University</p>
    <p>University of Wisconsin-Madison</p>
  </div>

  <!-- About Me section on the right -->
  <div class="about-me">
    <h2>About Me</h2>
    <p>
      I am majoring in Mathematics and Applied Mathematics at Nanjing University and have been studying at the University of Wisconsin-Madison 
      through its VISP Pre-Master Program since Spring 2024. My research interests span a broad range of topics in physical mathematics, including 
      fluid dynamics, stochastic modeling, and dynamical systems.
    </p>
    <p>
      My current research, supervised by <a href="https://people.math.wisc.edu/~spagnolie/">Prof. Saverio Spagnolie</a> and based on the work of 
      <a href="https://people.math.wisc.edu/~tgchandler/">Dr. Thomas G. J. Chandler</a>, focuses on the elastic interaction of an immersed body 
      within a semi-infinite nematic liquid crystal. This project utilizes a blend of applied mathematical techniques, including asymptotic 
      analysis, numerical methods, and complex analysis, to tackle the unique challenges presented by the multiply-connected geometry in anisotropic 
      environments.
    </p>
    <p>
      More broadly, I am fascinated by the application of analytical mathematics to model physical systems, particularly where intricate 
      mathematical methods reveal insights into real-world phenomena. Recently, I found interest in the interactions of bodies and boundaries in 
      three-dimensional unsteady Stokes flow, which generally involves exploring the Maxey-Riley equation using the Laplace transform method and 
      Lorentz reciprocity principles.
    </p>
  </div>
</div>
