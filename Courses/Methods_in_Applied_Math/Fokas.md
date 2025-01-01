---
layout: default
title: "Fokas Method for IBVPs of Heat Equations"
permalink: /courses/fokas/
---

# Fokas Method for IBVPs of Heat Equations

**Supervisor**: [Prof. Jean-Luc Thiffeault](https://people.math.wisc.edu/~thiffeault/), Chair, Department of Mathematics, UW-Madison

In this project, I explore solutions to various Initial Boundary Value Problems (IBVPs) for the heat equation using the [Fokas method (unified transform method)](https://en.wikipedia.org/wiki/Fokas_method). In the first example, I address a problem on the half-line with a general Robin boundary condition and a general initial condition. I derive the solution in the [Ehrenpreis's form](https://en.wikipedia.org/wiki/Ehrenpreis%27s_fundamental_principle) and prove its validity, excluding the straightforward verification of uniqueness. Additionally, I provide a comparison between the Fokas method and the classical image method, highlighting key differences and advantages. In the second example, I examine a finite interval with general Dirichlet boundary conditions and a general initial condition. Here, I derive a solution in the same form and retrieve the traditional series solution using the Half-Residue Theorem. 

## Visual Highlights

<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: space-between;">

   <div style="width: 45%; text-align: center;">
       <img src="/Fokas/figures/D%5E%2B.pic.jpg" alt="Figure 1" style="width: 100%; height: auto; border-radius: 8px;">
   </div>

   <div style="width: 45%; text-align: center;">
       <img src="/Fokas/figures/344821711499232_.pic_hd.jpg" alt="Figure 2" style="width: 100%; height: auto; border-radius: 8px;">
   </div>

   <div style="width: 45%; text-align: center;">
       <img src="/Fokas/figures/Fokas_2.5.1.png" alt="Figure 3" style="width: 100%; height: auto; border-radius: 8px;">
   </div>

   <div style="width: 45%; text-align: center;">
       <img src="/Fokas/figures/Fokas_2.5.png" alt="Figure 4" style="width: 100%; height: auto; border-radius: 8px;">
   </div>

</div>

<div style="position: relative;">
    <!-- PDF iframe -->
    <iframe id="pdf-viewer-selected" src="/Fokas/Exploring the Fokas Method for Heat Equation IBVPs.pdf" width="100%" height="600px" style="border: none;">
        Your browser does not support viewing PDFs directly. Please consider using 
        <a href="https://www.google.com/chrome/" style="display: inline-flex; align-items: center; text-decoration: none; color: #007BFF;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png" alt="Google Chrome" style="width: 16px; height: 16px; margin-right: 5px;">
            Google Chrome
        </a>
    </iframe>

    <!-- Full-Screen Button -->
    <button id="fullscreen-button-selected" onclick="openFullScreen('pdf-viewer-selected', 'fullscreen-button-selected', 'exit-fullscreen-button-selected')" style="position: absolute; top: 10px; right: 10px; padding: 8px 16px; background-color: #007BFF; color: white; border: none; border-radius: 4px; cursor: pointer; z-index: 10;">
        Full Screen
    </button>

    <!-- Exit Full-Screen Button -->
    <button id="exit-fullscreen-button-selected" onclick="exitFullScreen()" style="position: absolute; top: 10px; right: 10px; padding: 8px 16px; background-color: #FF0000; color: white; border: none; border-radius: 4px; cursor: pointer; z-index: 10; display: none;">
        Exit Full Screen
    </button>
</div>


<a href="javascript:history.back()" style="display: inline-block; margin: 10px 0; padding: 8px 16px; background-color: #4CAF50; color: white; border-radius: 4px; text-decoration: none; font-weight: bold;">
    Go Back
</a>
