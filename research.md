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
</style>

# Ongoing Research

Supervisors: [Prof. Saverio Spagnolie](https://people.math.wisc.edu/~spagnolie/) and [Dr. Thomas G. J. Chandler](https://people.math.wisc.edu/~tgchandler/)

Nematic liquid crystals, composed of rod-like molecules with directional order, exhibit complex behaviors due to the elasticity of their orientational structure. When immersed bodies are introduced into these materials, they disrupt the local orientation, creating defects and elastic stresses that lead to intricate body-boundary interactions. These interactions are influenced by factors such as anchoring conditions, defect positioning, and the geometric configuration of boundaries, all of which contribute to the unique physical properties of the system. A semi-infinite configuration, in particular, is of broad experimental and theoretical interest, as it effectively simulates realistic conditions encountered in many laboratory and industrial applications.

Based on the resent work including [*A nematic liquid crystal with an immersed body: equilibrium, stress, and paradox*](#key-references) and [*Exact and approximate solutions for elastic interactions in a nematic liquid crystal*](#key-references), I examine the equilibrium configurations of a semi-infinite nematic liquid crystal with an immersed body in two dimensions, as well as the associated body forces, torques and tractions. Inspired by the previous work by Crowdy for [*Solving problems in multiply connected domains*](#key-references), a complex variable approach is adopted to derive an analytic solution. Free periods (circulations) of a complex director field, which correspond to topological defect positioning and net topological charge, are determined asymptotically or numerically to minimize the elastic energy within the entire bulk. With a far-field condition that depends on the geometry and type of anchoring, a general, analytical description of body-boundary interactions will be provided, along with illustrations of examples using an arbitrary cylinder in a half-plane and a triangle of arbitrary position and orientation in an arbitrary wedge domain.

## Current Draft

<div style="position: relative;">
    <!-- PDF iframe -->
    <iframe id="pdf-viewer-lc" src="/LC/Interaction_of_an_immersed_body_in_a_semi_infinite_nematic_liquid_crystal.pdf" width="100%" height="600px" style="border: none;">
        This browser does not support PDFs. Please download the PDF to view it:
        <a href="/LC/Interaction_of_an_immersed_body_in_a_semi_infinite_nematic_liquid_crystal.pdf">Download PDF</a>.
    </iframe>

    <!-- Full-Screen Button -->
    <button id="fullscreen-button-lc" onclick="openFullScreen('pdf-viewer-lc', 'fullscreen-button-lc', 'exit-fullscreen-button-lc')" style="position: absolute; top: 10px; right: 10px; padding: 8px 16px; background-color: #007BFF; color: white; border: none; border-radius: 4px; cursor: pointer; z-index: 10;">
        Full Screen
    </button>

    <!-- Exit Full-Screen Button -->
    <button id="exit-fullscreen-button-lc" onclick="exitFullScreen()" style="position: absolute; top: 10px; right: 10px; padding: 8px 16px; background-color: #FF0000; color: white; border: none; border-radius: 4px; cursor: pointer; z-index: 10; display: none;">
        Exit Full Screen
    </button>
</div>

<script src="/assets/js/pdf-fullscreen.js"></script>

## Key References

1. **Chandler, T. G. J., & Spagnolie, S. E.** (2023). *A nematic liquid crystal with an immersed body: equilibrium, stress, and paradox*. Journal of Fluid Mechanics, 967. Cambridge University Press. DOI: [10.1017/jfm.2023.488](http://dx.doi.org/10.1017/jfm.2023.488)

2. **Chandler, T. G. J., & Spagnolie, S. E.** (2024). *Exact and approximate solutions for elastic interactions in a nematic liquid crystal*. arXiv preprint, [arXiv:2311.17708](https://arxiv.org/abs/2311.17708)

3. **Crowdy, D.** (2020). *Solving problems in multiply connected domains*. SIAM.

<script type="text/javascript" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

