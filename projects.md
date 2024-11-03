---
layout: default
title: "Projects"
permalink: /projects/
---

# Projects

## 1. Fokas Method for IBVPs of Heat Equations

**Supervisor**: [Prof. Jean-Luc Thiffeault](https://people.math.wisc.edu/~thiffeault/), Chair, Department of Mathematics, UW-Madison

In this project, I explore solutions to various Initial Boundary Value Problems (IBVPs) for the heat equation using the [Fokas method (unified transform method)](https://en.wikipedia.org/wiki/Fokas_method). In the first example, I address a problem on the half-line with a general Robin boundary condition and a general initial condition. I derive the solution in the [Ehrenpreis's form](https://en.wikipedia.org/wiki/Ehrenpreis%27s_fundamental_principle) and prove its validity, excluding the straightforward verification of uniqueness. Additionally, I provide a comparison between the Fokas method and the classical image method, highlighting key differences and advantages. In the second example, I examine a finite interval with general Dirichlet boundary conditions and a general initial condition. Here, I derive a solution in a similar form and retrieve the traditional series solution using the Half-Residue Theorem. 

### Visual Highlights

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

### PDF Document
For a detailed presentation of the project, view the full PDF below.

<iframe src="/Fokas/Fokas_method_for_heat_equations.pdf" width="100%" height="600px">
    This browser does not support PDFs. Please download the PDF to view it: 
    <a href="/Fokas/Fokas_method_for_heat_equations.pdf">Download PDF</a>.
</iframe>

---
---

## 2. Selected Problems in Complex Analysis

**Supervisor**: [Prof. Alexei Poltoratski](https://people.math.wisc.edu/~poltoratski/), Department of Mathematics, UW-Madison

This project explores a range of challenging problems in Complex Analysis, including applications and notable theorems. Below, you’ll find the exact descriptions of these problems and a link to the full project document.

### 1. Modulus Estimate

Prove that there is a constant $$C$$, independent of $$n$$, such that if $$\{z_j\}$$ are complex numbers and if 

$$
\sum_{j=1}^n |z_j| \geq 1,
$$

then there exists a subcollection $$\{z_{j_1}, \dots, z_{j_k}\} \subseteq \{z_1, \dots, z_n\}$$ such that 

$$
\left| \sum_{m=1}^k z_{j_m} \right| \geq C.
$$

Find the best constant $$C$$.

### 2. Injective Extension

Let $$f$$ be holomorphic on a neighborhood of $$D(0, 1)$$. Assume that the restriction of $$f$$ to $$D(0, 1)$$ is one-to-one and $$f'$$ is nowhere zero on $$D(0, 1)$$. Prove that $$f$$ is one-to-one on a neighborhood of $$D(0, 1)$$.

### 3. Zeros Analysis

Prove that the equation 

$$
az^3 - z + b = e^{-z}(z + 2),
$$

where $$a > 0$$ and $$b > 2$$, has exactly $$2$$ roots in $$\{ z \in \mathbb{C} : \text{Re}(z) \geq 0 \}$$.

### 4. Gauss-Lucas Theorem

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

### 5. Strict Harmonicity

If $$f : U \rightarrow \mathbb{R}$$ is merely continuous, we might call $$f$$ *strictly subharmonic* if whenever $$D(z, r) \subseteq U$$, then

$$
f(z) < \frac{1}{2\pi} \int_0^{2\pi} f(z + re^{i\theta}) \, d\theta.
$$

For $$C^2$$ functions, is this equivalent to the assertion that $$\nabla^2 f > 0$$? Does one definition imply the other? Can you think of a definition that applies to continuous functions and is equivalent to $$\nabla^2 f > 0$$ when $$f$$ is $$C^2$$?

### 6. The Swiss Cheese

Let $$D(a_j, r_j)$$ be pairwise disjoint closed discs in $$D(0, 1)$$ such that the union of discs $$\bigcup_{j=1}^{\infty} D(a_j, r_j)$$ is dense in $$D(0, 1)$$. Let $$K = D(0, 1) - \bigcup_{j=1}^{\infty} D(a_j, r_j)$$. Prove that such discs can be chosen so that $$\sum_{j=1}^{\infty} r_j < 1$$ and that, in this case, the conclusion of Mergelyan's theorem fails on $$K$$.

<div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center;">
   <!-- Centered third image in the second row -->
   <div style="width: 45%; text-align: center; display: flex; justify-content: center; margin: 0 auto;">
       <img src="/Complex/figures/Swiss%20cheese.jpeg" alt="Swiss Cheese" style="width: 100%; height: auto; border-radius: 8px;">
       <p>Source: <a href="https://explainingmaths.wordpress.com/2022/03/08/alice-roth-and-swiss-cheeses/">Explaining Maths</a></p>
   </div>
</div>

### PDF Document
For a detailed presentation of the project, view the full PDF below.

<iframe src="/Complex/Selected_problems_in_Complex_Analysis.pdf" width="100%" height="600px">
    This browser does not support PDFs. Please download the PDF to view it: 
    <a href="/Complex/Selected_problems_in_Complex_Analysis.pdf">Download PDF</a>.
</iframe>

<script type="text/javascript" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>
