---
layout: default
title: "Hardy-Littlewood inequalities"
permalink: /courses/hardy_littlewood/
---

<script type="text/x-mathjax-config">
MathJax = {
  tex: {
    packages: ['base', 'ams', 'amscd', 'color', 'newcommand', 'bbox'],
  },
  svg: {
    fontCache: 'global'
  }
};
</script>
<script type="text/javascript" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

## Hardy-Littlewood Inequality for Uncentered Balls

Suppose \( f: \mathbb{R}^n \rightarrow \mathbb{R} \in L^{1}(\mathbb{R}^n) \), with
\[
\mathcal{M}f(x):= \sup_{r>0} \dfrac{1}{|B(x,r)|}\int_{B(x,r)} |f| \, dm,
\]
and
\[
\mathcal{N}f(x):= \sup_{t>0} \left\{\dfrac{1}{t}\int_{B_{t}}|f|\,dm \mid B_{t}=B(y,r)\subseteq \mathbb{R}^n, m(B_{t})=t, x\in B_{t}\right\}.
\]

Show that 
\[
\lambda \cdot m(\{\mathcal{N}f(x)>\lambda\}) \leq 6^n \| f \|_{L^1(\mathbb{R}^n)}, \quad \forall{\lambda>0}.
\]

**Proof**. For any \( t >0 \), if \( x \in B_{t} = B(y, r) \) and \( B_{t} \subset B(x, |y-x|+r) \subset B(x, 2r) \), then we have:
\[
\int_{B_t} |f| \, dm \leq \int_{B(x,2r)} |f| \, dm.
\]
Therefore,
\[
\dfrac{1}{t}\int_{B_{t}} |f|\,dm \leq 2^{n} \dfrac{1}{|B(x,2r)|} \int_{B(x,2r)} |f| \, dm \leq 2^n \mathcal{M}f(x).
\]

Taking the \(\sup\) with respect to \(t\) on the left-hand side, we get the inequality \( \mathcal{N}f(x) \leq 2^n \mathcal{M}f(x) \). Then observe that \(\{\mathcal{N}f(x)>\lambda\} \subset \{\mathcal{M}f(x) > 2^{-n} \lambda\}\). Thus,
\[
m(\{\mathcal{N}f(x) > \lambda\}) \leq m(\{\mathcal{M}f(x) > 2^{-n} \lambda\}).
\]
Since \( \lambda \cdot m(\{\mathcal{M}f(x) > \lambda\}) \leq 3^n \| f \|_{L^1(\mathbb{R}^n)} \), we conclude:
\[
\lambda \cdot m(\{\mathcal{N}f(x) > \lambda\}) \leq \lambda \cdot m(\{\mathcal{M}f(x) > 2^{-n} \lambda\}) \leq 6^n \| f \|_{L^1(\mathbb{R}^n)}, \quad \forall \lambda > 0.
\]

## (Strong) Hardy-Littlewood Maximal Inequality

Suppose \( f:\mathbb{R}^n \rightarrow \mathbb{R} \), \( f \in L^p(\mathbb{R}^n) \cap L^1(\mathbb{R}^n) \) with \( 1 < p \leq \infty \). Show that there exists \( C_{p, n} > 0 \) such that
\[
\| \mathcal{M}f \|_{L^p(\mathbb{R}^n)} \leq C_{p, n} \| f \|_{L^{p}(\mathbb{R}^n)}.
\]

**Proof**. Set \( g_t(x):= f(x) \chi_{\{|f(x)| > t/2\}}(x) \) and \( \varphi_{t}(x):= f(x) \chi_{\{|f(x)| \leq t/2\}}(x) \). For any \( 0 < \varepsilon < 1 \),
\[
f(x) = g_t(x) + \varphi_t(x) \Rightarrow \mathcal{M}f(x) \leq \mathcal{M}g_t(x) + \mathcal{M}\varphi_{t}(x).
\]
Since \( \mathcal{M}\varphi_t(x) \leq t/2 \), for any \( x \in \{\mathcal{M}f(x) > t\} \), we have \( \mathcal{M}g_t(x) \geq \mathcal{M}f(x) - \mathcal{M}\varphi_t(x) > t/2 \). Thus, 
\[
m(\{\mathcal{M}f(x) > t\}) \leq m(\{\mathcal{M}g_t(x) > t/2\}).
\]

Applying the weak estimate to \( m(\{\mathcal{M}g_t(x) > t/2\}) \), we get:
\[
m(\{\mathcal{M}f(x) > t\}) \leq \frac{2 \cdot 3^n}{t} \| g_t \|_{L^1(\mathbb{R}^n)} = \frac{2 \cdot 3^n}{t} \int_{\{|f(x)| > t/2\}} |f| \, dm.
\]

Using Fubini-Tonelli theorem and the distribution function, we compute:
\[
\| \mathcal{M}f \|^p_{L^p(\mathbb{R}^n)} = \int_{\mathbb{R}^n} |\mathcal{M}f(x)|^p \, dx = \int_{0}^{\infty} pt^{p-1} m(\{\mathcal{M}f(x) > t\}) \, dt.
\]
Thus, we conclude that
\[
\| \mathcal{M}f \|_{L^p(\mathbb{R}^n)} \leq C_{p, n} \| f \|_{L^{p}(\mathbb{R}^n)}, \quad \text{where} \quad C_{p, n} = \left( \frac{3^n 2^p p}{p - 1} \right)^{\frac{1}{p}}.
\]

## (Weak) Hardy-Littlewood Maximal Inequality

Suppose \( f: \mathbb{R}^n \rightarrow \mathbb{R} \in L^1(\mathbb{R}^n) \), \( E \subset \mathbb{R}^n \) with \( m(E) < \infty \). Then for any \( 0 < q < 1 \), show that
\[
\| \mathcal{M}f(x) \|^q_{L^q(E)} \leq C_q m(E)^{1-q} \| f \|^q_{L^1(\mathbb{R}^n)}, \quad C_q > 0.
\]

**Proof**. Without loss of generality, we assume \( m(E) > 0 \) and \( \| f \|_{L^1(\mathbb{R}^n)} > 0 \). Using the same trick as above, we have:
\[
\| \mathcal{M}f(x) \|^q_{L^q(E)} = \int_{E} |\mathcal{M}f(x)|^q \, dx = \int_{0}^{\infty} qt^{q-1} m(\{ E \cap \mathcal{M}f(x) > t \}) \, dt.
\]
Thus, we conclude:
\[
\| \mathcal{M}f(x) \|^q_{L^q(E)} \leq \frac{2q \cdot 3^{nq}}{\min\{q, 1-q\}} m(E)^{1-q} \| f \|^q_{L^1(\mathbb{R}^n)}.
\]
