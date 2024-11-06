---
layout: default
title: "Fokas Method for IBVPs of Heat Equations"
permalink: /courses/fokas/
---

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

## PDF Document
For a detailed presentation of the project, view the full PDF below.

<iframe src="/Fokas/Fokas_method_for_heat_equations.pdf" width="100%" height="600px">
    This browser does not support PDFs. Please download the PDF to view it: 
    <a href="/Fokas/Fokas_method_for_heat_equations.pdf">Download PDF</a>.
</iframe>

<div style="position: relative;">
    <!-- PDF iframe -->
    <iframe id="pdf-viewer-fokas" src="/Fokas/Fokas_method_for_heat_equations.pdf" width="100%" height="600px" style="border: none;">
        This browser does not support PDFs. Please download the PDF to view it:
        <a href="/Fokas/Fokas_method_for_heat_equations.pdf">Download PDF</a>.
    </iframe>

    <!-- Full-Screen Button -->
    <button id="fullscreen-button-fokas" onclick="openFullScreen('pdf-viewer-fokas', 'fullscreen-button-fokas', 'exit-fullscreen-button-fokas')" style="position: absolute; top: 10px; right: 10px; padding: 8px 16px; background-color: #007BFF; color: white; border: none; border-radius: 4px; cursor: pointer; z-index: 10;">
        Full Screen
    </button>

    <!-- Exit Full-Screen Button -->
    <button id="exit-fullscreen-button-fokas" onclick="exitFullScreen()" style="position: absolute; top: 10px; right: 10px; padding: 8px 16px; background-color: #FF0000; color: white; border: none; border-radius: 4px; cursor: pointer; z-index: 10; display: none;">
        Exit Full Screen
    </button>
</div>

function openFullScreen(iframeId, fullscreenButtonId, exitButtonId) {
    const iframe = document.getElementById(iframeId);
    const fullscreenButton = document.getElementById(fullscreenButtonId);
    const exitFullscreenButton = document.getElementById(exitButtonId);

    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    }
}

function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('mozfullscreenchange', handleFullscreenChange);
document.addEventListener('MSFullscreenChange', handleFullscreenChange);

function handleFullscreenChange() {
    const fullscreenElements = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    if (fullscreenElements) {
        document.querySelectorAll('.fullscreen-button').forEach(button => button.style.display = 'none');
        document.querySelectorAll('.exit-fullscreen-button').forEach(button => button.style.display = 'block');
    } else {
        document.querySelectorAll('.fullscreen-button').forEach(button => button.style.display = 'block');
        document.querySelectorAll('.exit-fullscreen-button').forEach(button => button.style.display = 'none');
    }
}

<a href="javascript:history.back()" style="display: inline-block; margin: 10px 0; padding: 8px 16px; background-color: #4CAF50; color: white; border-radius: 4px; text-decoration: none; font-weight: bold;">
    Go Back
</a>
