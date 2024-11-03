---
layout: default
title: "Home"
permalink: /
---

<style>
/* Home-specific container for layout */
.home-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
}

/* Box with photo and titles */
.photo-box {
  width: 250px;
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.photo-box img {
  width: 100%;
  border-radius: 50%;
  margin-bottom: 10px;
}

/* About Me section */
.about-me {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
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
  within a semi- infinite nematic liquid crystal. This project utilizes a blend of applied mathematical techniques, including asymptotic 
  analysis, numerical methods, and complex analysis, to tackle the unique challenges presented by such interactions in anisotropic environments.
  </p>

  <p>
      More broadly, I am fascinated by the application of analytical mathematics to model physical systems, particularly where intricate 
  mathematical methods reveal insights into real-world phenomena. For example, I am interested in the interactions of bodies and boundaries in 
  three-dimensional unsteady Stokes flow, which generally involves exploring the Maxey-Riley equation using the Laplace transform method and 
  Lorentz reciprocity principles.
  </p>
  </div>
</div>
