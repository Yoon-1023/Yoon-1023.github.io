---
layout: default
title: "Movies of Vortex Dynamics"
permalink: /vortex_dynamics/
---

# Vortex-dynamics

This page includes numerical simulations for two-dimensional vortex dynamics in two-dimensional potential flow.

<button onclick="history.back()" style="margin: 10px 0; padding: 8px 16px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">Go Back</button>

## Instability of the Von Karman vortex Sheet

Initially, we set $$20$$ vortices at $$z=an$$ with $$\Gamma=1$$, and another $$20$$ vortices at $$z=a(n+1/2)+ib$$ with $$\Gamma=-1$$. Then, we let the system evolve.

### Video 1: $$a=b=1$, $$0\leqslant t\leqslant 400$$
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
    <video width="800" controls>
      <source src="/Courses/Fluid_Dynamics/vortex_animation.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
</div>

## Video 2: The Navier-Stokes Equations
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
    <video width="800" controls>
      <source src="/Courses/Fluid_Dynamics/vortex_animation_1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
</div>

**Description**: An introduction to the Navier-Stokes equations for viscous fluid flow. This video derives the equations and discusses their applications:
$$
\rho \left( \frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u} \cdot \nabla) \mathbf{u} \right) = -\nabla p + \mu \nabla^2 \mathbf{u} + \mathbf{f}.
$$

## Video 3: Vorticity Dynamics
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
    <video width="800" controls>
      <source src="/Courses/Fluid_Dynamics/vortex_animation_2.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
</div>

**Description**: This video explores vorticity dynamics, including the evolution of vorticity in two-dimensional flows. We also discuss the vorticity transport equation:
$$
\frac{D \omega}{Dt} = (\omega \cdot \nabla) \mathbf{u} + \nu \nabla^2 \omega.
$$

## Video 4: Boundary Layer Theory
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
    <video width="800" controls>
      <source src="/Courses/Fluid_Dynamics/vortex_animation_3.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
</div>

**Description**: An overview of boundary layer theory, examining the formation and behavior of boundary layers in high Reynolds number flows.
$$
\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0.
$$
