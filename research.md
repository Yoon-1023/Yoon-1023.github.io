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
        Nematic liquid crystals, composed of rod-like molecules with directional order, exhibit complex behaviors due to the elasticity of their orientational structure. When immersed bodies are introduced into these materials, they disrupt the local orientation, creating defects and elastic stresses that lead to intricate body-boundary interactions. These interactions are influenced by factors such as anchoring conditions, defect positioning, and the geometric configuration of boundaries, all of which contribute to the unique physical properties of the system. A semi-infinite configuration, in particular, is of broad experimental and theoretical interest, as it effectively simulates realistic conditions encountered in many laboratory and industrial applications.
    </p>
    <p>
        Based on the recent work including <a href="#key-references">A nematic liquid crystal with an immersed body: equilibrium, stress, and paradox</a> and <a href="#key-references">Exact and approximate solutions for elastic interactions in a nematic liquid crystal</a>, I examine the equilibrium configurations of a semi-infinite nematic liquid crystal with an immersed body in two dimensions, as well as the associated body forces, torques and tractions. Inspired by the previous work by Crowdy for <a href="#key-references">Solving problems in multiply connected domains</a>, a complex variable approach is adopted to derive an analytic solution. Free periods (circulations) of a complex director field, which correspond to topological defect positioning and net topological charge, are determined asymptotically or numerically to minimize the elastic energy within the entire bulk. With a far-field condition that depends on the geometry and type of anchoring, a general, analytical description of body-boundary interactions will be provided, along with illustrations of examples using an arbitrary cylinder in a half-plane and a triangle of arbitrary position and orientation in an arbitrary wedge domain.
    </p>
  <!-- Separation line -->
    <hr>
    <h2>Example 1: An immersed cylinder in a half-plane liquid crystal with tangential anchoring</h2>
    <p style="font-size: 19px;"><strong>Varying circulation/Period</strong></p>
    <video autoplay loop muted playsinline style="width: 80%; height: auto; margin: auto; display: block;">
    <source src="/LC/Movies/Half_Plane_Cylinder/integral_curves_Gamma.mp4" type="video/mp4">
    Your browser does not support the video tag. Please update your browser.
    </video>
    <p style="font-size: 19px;"><strong>Varing anchoring strength</strong></p>
    <div class="video-container">
    <video autoplay loop muted playsinline style="width: 80%; height: auto;">
        <source src="/LC/Movies/Half_Plane_Cylinder/integral_curves_omega.mp4" type="video/mp4">
        Your browser does not support the video tag. Please update your browser.
    </video>
    </div>
    <p style="font-size: 19px;"><strong>Quasi-stable Evolution</strong></p>
    <div class="video-container">
    <video autoplay loop muted playsinline style="width: 80%; height: auto;">
        <source src="/LC/Movies/Half_Plane_Cylinder/Quasi_Stable_Evolution.mp4" type="video/mp4">
        Your browser does not support the video tag. Please update your browser.
    </video>
    </div>
    <p>
        For more details, view the PDF document below:
    </p>
    <!-- Clickable Button -->
    <a href="/LC/Interaction_of_an_immersed_body_in_a_semi_infinite_nematic_liquid_crystal.pdf" class="pdf-button" target="_blank">
        View Full PDF
    </a>
</div>

## Key References

1. **Chandler, T. G. J., & Spagnolie, S. E.** (2023). *A nematic liquid crystal with an immersed body: equilibrium, stress, and paradox*. Journal of Fluid Mechanics, 967. Cambridge University Press. DOI: [10.1017/jfm.2023.488](http://dx.doi.org/10.1017/jfm.2023.488)

2. **Chandler, T. G. J., & Spagnolie, S. E.** (2024). *Exact and approximate solutions for elastic interactions in a nematic liquid crystal*. arXiv preprint, [arXiv:2311.17708](https://arxiv.org/abs/2311.17708)

3. **Crowdy, D.** (2020). *Solving problems in multiply connected domains*. SIAM.

<script type="text/javascript" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

