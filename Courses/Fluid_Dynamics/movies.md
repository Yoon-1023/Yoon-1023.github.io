---
layout: default
title: "Movies of Vortex Dynamics"
permalink: /courses/vortex_dynamics/
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
  padding: 0;
}
</style>
# Vortex-dynamics

This page includes my numerical simulations for vortex dynamics in two-dimensional potential flow.

## Instability of the Von Karman vortex Sheet

Initially, we set $$20$$ vortices at $$z=an$$ with $$\Gamma=1$$, and another $$20$$ vortices at $$z=a(n+1/2)+ib$$ with $$\Gamma=-1$$. Then, we let the system evolve.

### Video 1: $$a=b=1$$, $$0\leqslant t\leqslant 400$$
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
    <video width="800" controls>
      <source src="/Courses/Fluid_Dynamics/vortex_animation.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
</div>

### Video 2: $$a=1$$, $$b=3$$, $$0\leqslant t\leqslant 800$$
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
    <video width="800" controls>
      <source src="/Courses/Fluid_Dynamics/vortex_animation_1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
</div>

### Video 3: $$a=1$$, $$b=3+0.01*randn()$$, $$0\leqslant t\leqslant 800$$
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
    <video width="800" controls>
      <source src="/Courses/Fluid_Dynamics/vortex_animation_2.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
</div>

## Discrete approximation of the Kelvin-Helmholtz instability

We initialize the system by placing $$N = 100$$ vortices of equal strength ($$\Gamma=1$$) at the points $$z_n = n+i/10\sin(10\pi n/N)$$.

### Video 4: 
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
    <video width="800" controls>
      <source src="/Courses/Fluid_Dynamics/vortex_animation_3.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
</div>

<a href="javascript:history.back()" style="display: inline-block; margin: 10px 0; padding: 8px 16px; background-color: #4CAF50; color: white; border-radius: 4px; text-decoration: none; font-weight: bold;">
    Go Back
</a>
