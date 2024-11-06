---
layout: default
title: "Report"
permalink: /courses/galois/
---

**Supervisor**: [Prof. Alexei Poltoratski](https://people.math.wisc.edu/~poltoratski/), Department of Mathematics, UW-Madison

This project involves solving a series of complex analysis problems that delve into advanced topics to deepen understanding. Covered areas include modulus estimates for subcollections of complex numbers, injective extensions of holomorphic functions, and zeros analysis of transcendental equations. Additionally, the project applies Gauss-Lucas theorem to convex hulls, explores subharmonicity and Laplacians in strict harmonicity problems, and investigates "Swiss Cheese" sets related to Mergelyan’s theorem, illustrating limits of polynomial approximation on non-dense subsets in the complex plane.


## 1. Modulus Estimate

Prove that there is a constant $$C$$, independent of $$n$$, such that if $$\{z_j\}$$ are complex numbers and if 

$$
\sum_{j=1}^n |z_j| \geq 1,
$$

then there exists a subcollection $$\{z_{j_1}, \dots, z_{j_k}\} \subseteq \{z_1, \dots, z_n\}$$ such that 

$$
\left| \sum_{m=1}^k z_{j_m} \right| \geq C.
$$

Find the best constant $$C$$.

## 2. Injective Extension

Let $$f$$ be holomorphic on a neighborhood of $$D(0, 1)$$. Assume that the restriction of $$f$$ to $$D(0, 1)$$ is one-to-one and $$f'$$ is nowhere zero on $$D(0, 1)$$. Prove that $$f$$ is one-to-one on a neighborhood of $$D(0, 1)$$.

## 3. Zeros Analysis

Prove that the equation 

$$
az^3 - z + b = e^{-z}(z + 2),
$$

where $$a > 0$$ and $$b > 2$$, has exactly $$2$$ roots in $$\{ z \in \mathbb{C} : \text{Re}(z) \geq 0 \}$$.

## 4. Gauss-Lucas Theorem

If $$f$$ is a polynomial on $$\mathbb{C}$$, then the zeros of $$f'$$ are contained in the closed convex hull of the zeros of $$f$$.

<div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center;">
   <div style="width: 45%; text-align: center;">
       <img src="/Complex/figures/440px-Steiner-inellipse-1.svg.png" alt="Steiner Inellipse" style="width: 100%; height: auto; border-radius: 8px;">
       <p>Source: <a href="https://en.wikipedia.org/w/index.php?title=Steiner_inellipse&oldid=1126942784">Wikipedia contributors</a></p>
   </div>

   <div style="width: 45%; text-align: center;">
       <img src="/Complex/figures/Steiner_Inellipse.svg.png" alt="Another Steiner Inellipse" style="width: 100%; height: auto; border-radius: 8px;">
       <p>Source: <a href="https://en.wikipedia.org/w/index.php?title=Steiner_inellipse&oldid=1126942784">Wikipedia contributors</a></p>
   </div>
</div>

## 5. Strict Harmonicity

If $$f : U \rightarrow \mathbb{R}$$ is merely continuous, we might call $$f$$ *strictly subharmonic* if whenever $$D(z, r) \subseteq U$$, then

$$
f(z) < \frac{1}{2\pi} \int_0^{2\pi} f(z + re^{i\theta}) \, d\theta.
$$

For $$C^2$$ functions, is this equivalent to the assertion that $$\nabla^2 f > 0$$? Does one definition imply the other? Can you think of a definition that applies to continuous functions and is equivalent to $$\nabla^2 f > 0$$ when $$f$$ is $$C^2$$?

## 6. The Swiss Cheese

Let $$D(a_j, r_j)$$ be pairwise disjoint closed discs in $$D(0, 1)$$ such that the union of discs $$\bigcup_{j=1}^{\infty} D(a_j, r_j)$$ is dense in $$D(0, 1)$$. Let $$K = D(0, 1) - \bigcup_{j=1}^{\infty} D(a_j, r_j)$$. Prove that such discs can be chosen so that $$\sum_{j=1}^{\infty} r_j < 1$$ and that, in this case, the conclusion of Mergelyan's theorem fails on $$K$$.

<div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center;">
   <!-- Centered third image in the second row -->
   <div style="width: 45%; text-align: center; display: flex; justify-content: center; margin: 0 auto;">
       <img src="/Complex/figures/Swiss%20cheese.jpeg" alt="Swiss Cheese" style="width: 100%; height: auto; border-radius: 8px;">
       <p>Source: <a href="https://explainingmaths.wordpress.com/2022/03/08/alice-roth-and-swiss-cheeses/">Explaining Maths</a></p>
   </div>
</div>

## PDF Document
For a detailed presentation of the project, view the full PDF below.

<div style="position: relative;">
    <!-- PDF iframe -->
    <iframe id="pdf-viewer-selected" src="/Complex/Selected_problems_in_Complex_Analysis.pdf" width="100%" height="600px" style="border: none;">
        This browser does not support PDFs. Please download the PDF to view it:
        <a href="/Complex/Selected_problems_in_Complex_Analysis.pdf">Download PDF</a>.
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

<script type="text/javascript" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

<script src="/assets/js/pdf-fullscreen.js"></script>

<a href="javascript:history.back()" style="display: inline-block; margin: 10px 0; padding: 8px 16px; background-color: #4CAF50; color: white; border-radius: 4px; text-decoration: none; font-weight: bold;">
    Go Back
</a>
