---
layout: default
title: "Research"
permalink: /research/
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

  /* Styling for the PDF Button */
.pdf-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    margin: 20px 0;
}

.pdf-button:hover {
    background-color: #0056b3; /* Darker blue for hover effect */
}
/* Content box styling */
.research-content-box {
    max-width: 1100px; 
    margin: 20px auto; /* Center the content */
    background-color: white; /* White background for readability */
    padding: 60px; /* Add some padding */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for aesthetics */
    border-radius: 8px; /* Rounded corners */
    border: 1px solid #ddd; /* Optional border for contrast */
    line-height: 1.6; /* Improve readability */
}
/* Subtitle styling */
/* General styling for content box headers */
.research-content-box h1 {
    font-size: 2.5rem; /* Large title size */
    margin-top: 30px; /* Add spacing above the title */
    margin-bottom: 50px; /* Add spacing below the title */
    color: #222; /* Darker color for prominence */
    font-weight: bold; /* Highlight importance */
}

.research-content-box h2 {
    font-size: 2rem; /* Medium subtitle size */
    margin-top: 35px; /* Add spacing above the subtitle */
    margin-bottom: 25px; /* Add spacing below the subtitle */
    color: #333; /* Slightly lighter than h1 */
    font-weight: bold; /* Maintain emphasis */
    padding-bottom: 8px; /* Space below the text */
}

.research-content-box h3 {
    font-size: 1.5rem; /* Smaller subtitle size */
    margin-top: 30px; /* Add spacing above */
    margin-bottom: 20px; /* Add spacing below */
    color: #555; /* Lighter than h2 */
    font-weight: bold; /* Stand out */
    padding-bottom: 5px; /* Space below text */
}

/* General paragraph spacing */
.research-content-box p {
    margin-top: 15px;
    line-height: 1.6; /* Improve readability */
}
/* Separation line styling */
.research-content-box hr {
    border: none; /* Remove default border */
    border-top: 2px solid #ddd; /* Custom border style */
    margin-top: 60px; /* Space above the line */
    margin-bottom: 60px; /* Space below the line */
    width: 99%; /* Slightly reduced width for better aesthetics */
    margin-left: auto; /* Center the line */
    margin-right: auto; /* Center the line */
}
  /* Center the video */
.video-container {
    display: flex;
    justify-content: center; /* Horizontally center */
    align-items: center; /* Vertically center if needed */
    margin: 20px 0; /* Optional margin for spacing */
    text-align: center; /* Fallback for older browsers */
}
</style>

<div class="research-content-box">
    <h1>Research Overview</h1>
    <p>
        <strong>Advisor:</strong> 
        <a href="https://people.math.wisc.edu/~spagnolie/">Prof. Saverio Spagnolie</a>.
    </p>
    <p>
      The independent research is about the
interaction of an immersed body and boundary in two-dimensional semi-infinite nematic
liquid crystals. The nematic liquid crystals consist of rod-like molecules that exhibit directional order and elastically deformable
orientational structure, hence displaying rich phenomenology. defects and elastic
stresses lead to complicated body-boundary interactions. These depend on boundary anchoring
conditions, the positioning of topological defects, and geometric configuration of
boundaries, thus giving rise to the peculiar physical properties of the system. Of particular
interest is the semi-infinite configuration whereby the bulk defects are taken to the
far field. In two dimensions, the orientation of the liquid crystals is described by a director
field, which, at equilibrium, satisfies the Laplace equations. This harmonicity allows
the director field to be embedded within a locally analytic function, allowing the entire
problem to be phrased and solved using techniques from complex analysis.
    </p>
    <p>
      I have given
analytical solutions for equilibrium configurations by using methods of complex variables
and overcoming some difficulties in assembling modified Green’s functions to represent solutions in
multiply-connected domains. The positioning of topological defects is determined numerically
to minimize the elastic energy within the bulk nematic fluid. Additionally, far-field
asymptotics for the energy and body forces are calculated, and the quasi-static evolution
of the cylinder’s motion is explored. This work represents an unprecedented understanding
of the way geometry and elasticity interact in an anisotropic material, enhancing both
theoretical insight and practical implementation. Current efforts concern elastic response
towards relaxation of the free energy within the bulk, and anchoring induced flow in
multiply-connected configurations. An article covering Analytical Solutions to Boundary-
Body Interactions and Deformations in Nematic Liquid Crystals is estimated to be submitted
to Physical Review E or Soft Matter in the upcoming year.
    </p>
    
  <!-- Separation line -->
    <hr>
    <h2>Example 1: An immersed cylinder in a half-plane liquid crystal with tangential anchoring</h2>
    <h3>Varying circulation/Period</h3>
    <div class="video-container">
    <video autoplay loop muted playsinline style="width: 80%; height: auto;">
        <source src="/LC/Movies/Half_Plane_Cylinder/integral_curves_Gamma.mp4" type="video/mp4">
        Your browser does not support the video tag. Please update your browser.
    </video>
    </div>
    
    <h3>Varing anchoring strength</h3>
    <div class="video-container">
    <video autoplay loop muted playsinline style="width: 80%; height: auto;">
        <source src="/LC/Movies/Half_Plane_Cylinder/integral_curves_omega.mp4" type="video/mp4">
        Your browser does not support the video tag. Please update your browser.
    </video>
    </div>
    
    <h3>Quasi-stable Evolution</h3>
    <div class="video-container">
    <video id="video1" autoplay loop muted playsinline style="width: 80%; height: auto;">
        <source src="/LC/Movies/Half_Plane_Cylinder/Quasi_Stable_Evolution.mp4" type="video/mp4">
        Your browser does not support the video tag. Please update your browser.
    </video>
</div>
<p style="font-size: 19px;"><strong>Evolution of free energy and body force</strong></p>
<div class="video-container">
    <video id="video2" autoplay loop muted playsinline style="width: 100%; height: auto;">
        <source src="/LC/Movies/Half_Plane_Cylinder/combined_evolution.mp4" type="video/mp4">
        Your browser does not support the video tag. Please update your browser.
    </video>
</div>
</div>

# Key References

1. **Chandler, T. G. J., & Spagnolie, S. E.** (2023). *A nematic liquid crystal with an immersed body: equilibrium, stress, and paradox*. Journal of Fluid Mechanics, 967. Cambridge University Press. DOI: [10.1017/jfm.2023.488](http://dx.doi.org/10.1017/jfm.2023.488)

2. **Chandler, T. G. J., & Spagnolie, S. E.** (2024). *Exact and approximate solutions for elastic interactions in a nematic liquid crystal*. arXiv preprint, [arXiv:2311.17708](https://arxiv.org/abs/2311.17708)

3. **Crowdy, D.** (2020). *Solving problems in multiply connected domains*. SIAM.

<script type="text/javascript" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

<script>
    // Get the two video elements
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');

    // Synchronize the playback
    function syncVideos() {
        // Adjust video2's current time to match video1
        if (Math.abs(video1.currentTime - video2.currentTime) > 0.1) {
            video2.currentTime = video1.currentTime;
        }
        // Match the playback rates
        video2.playbackRate = video1.playbackRate;
    }

    // Add event listeners to video1 (master) to sync video2 (slave)
    video1.addEventListener('play', () => video2.play());
    video1.addEventListener('pause', () => video2.pause());
    video1.addEventListener('seeked', syncVideos);
    video1.addEventListener('timeupdate', syncVideos);
</script>

