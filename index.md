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
    <p>Senior Undergraduate</p>
    <p>Nanjing University</p>
    <p>University of Wisconsin-Madison</p>
  </div>

  <!-- About Me section on the right -->
  <div class="about-me">
    <h2>About Me</h2>
    <p>I am a PhD candidate in Applied Mathematics, focusing on complex analysis, fluid dynamics, and mathematical modeling. My research primarily involves using analytical and computational methods to solve problems in mathematical physics, particularly within the field of nematic liquid crystals and boundary value problems.</p>
    
    <p>I am currently working under the supervision of <a href="https://people.math.wisc.edu/~spagnolie/">Saverio Spagnolie</a> on the interaction of immersed bodies in semi-infinite nematic liquid crystals. I have also collaborated with <a href="https://people.math.wisc.edu/~thiffeault/">Jean-Luc Thiffeault</a> and <a href="https://people.math.wisc.edu/~poltoratski/">Alexei Poltoratski</a> on other projects in applied mathematics and complex analysis.</p>
  </div>
</div>
