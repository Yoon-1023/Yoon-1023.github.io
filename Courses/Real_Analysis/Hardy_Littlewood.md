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

Suppose $$f: \mathbb{R}^n \rightarrow \mathbb{R} \in L^{1}(\mathbb{R}^n)$$, with

$$
\mathcal{M}f(x) := \sup\limits_{r > 0} \frac{1}{|B(x, r)|} \int_{B(x, r)} |f| \, dm.
$$

Define

$$
\mathcal{N}f(x) := \sup\limits_{t > 0} \left\{ \frac{1}{t} \int_{B_{t}} |f| \, dm \right\},
$$

where $$B_{t} = B(y, r) \subseteq \mathbb{R}^n$$, $$m(B_{t}) = t$$, and $$x \in B_{t}$$. Show that

$$
\lambda \cdot m(\{ \mathcal{N}f(x) > \lambda \}) \leq 6^n \| f \|_{L^1(\mathbb{R}^n)}, \quad \forall \lambda > 0.
$$

**Proof**. For any $$t > 0$$, if $$x \in B_{t} = B(y, r)$$, then $$B_{t} \subset B(x, |y - x| + r) \subset B(x, 2r)$$. Thus, we have the estimate:

$$
\int_{B_t} |f| \, dm \leq \int_{B(x, 2r)} |f| \, dm.
$$

Therefore,

$$
\frac{1}{t} \int_{B_{t}} |f| \, dm \leq 2^n \frac{1}{|B(x, 2r)|} \int_{B(x, 2r)} |f| \, dm \leq 2^n \mathcal{M}f(x).
$$

Taking the $$\sup$$ with respect to $$t$$ on the left side, we get the inequality $$\mathcal{N}f(x) \leq 2^n \mathcal{M}f(x)$$. Then observe that $$\{ \mathcal{N}f(x) > \lambda \} \subset \{ \mathcal{M}f(x) > 2^{-n} \lambda \}$$. So,

$$
m(\{ \mathcal{N}f(x) > \lambda \}) \leq m(\{ \mathcal{M}f(x) > 2^{-n} \lambda \}).
$$

Notice that

$$
\lambda \cdot m(\{ \mathcal{M}f(x) > \lambda \}) \leq 3^n \| f \|_{L^1(\mathbb{R}^n)}.
$$

Finally, we conclude:

$$
\lambda \cdot m(\{ \mathcal{N}f(x) > \lambda \}) \leq \lambda \cdot m(\{ \mathcal{M}f(x) > 2^{-n} \lambda \}) \leq 6^n \| f \|_{L^1(\mathbb{R}^n)}, \quad \forall \lambda > 0.
$$

### (Strong) Hardy-Littlewood Maximal Inequality

Suppose $$f: \mathbb{R}^n \rightarrow \mathbb{R}$$, with $$f \in L^p(\mathbb{R}^n) \cap L^1(\mathbb{R}^n)$$, where $$1 < p \leq \infty$$. Show that there exists $$C_{p, n} > 0$$ such that

$$
\| \mathcal{M}f \|_{L^p(\mathbb{R}^n)} \leq C_{p, n} \| f \|_{L^p(\mathbb{R}^n)}.
$$

**Proof**. Set $$g_t(x) := f(x) \chi_{\{ |f(x)| > t/2 \}}(x)$$ and $$\varphi_t(x) := f(x) \chi_{\{ |f(x)| \leq t/2 \}}(x)$$ for any $$0 < \varepsilon < 1$$. Then $$f(x) = g_t(x) + \varphi_t(x)$$ implies

$$
\mathcal{M}f(x) \leq \mathcal{M}g_t(x) + \mathcal{M}\varphi_t(x).
$$

Apparently, $$\mathcal{M} \varphi_t(x) \leq t/2$$. For any $$x \in \{ \mathcal{M}f(x) > t \}$$, we have $$\mathcal{M}g_t(x) \geq \mathcal{M}f(x) - \mathcal{M}\varphi_t(x) > t/2$$. So,

$$
m(\{ \mathcal{M}f(x) > t \}) \leq m(\{ \mathcal{M}g_t(x) > t/2 \}).
$$

Applying the weak estimate to $$m(\{ \mathcal{M}g_t(x) > t/2 \})$$, we get:

$$
m(\{ \mathcal{M}f(x) > t \}) \leq \frac{2 \cdot 3^n}{t} \| g_t \|_{L^1(\mathbb{R}^n)} = \frac{2 \cdot 3^n}{t} \int_{\{ |f(x)| > t/2 \}} |f| \, dm.
$$

Now, consider shifting the integrand using the distribution function and the Fubini-Tonelli theorem:

$$
\text{LHS} = \| \mathcal{M}f \|^p_{L^p(\mathbb{R}^n)} = \int_{\mathbb{R}^n} |\mathcal{M}f(x)|^p \, dx = \int_{\mathbb{R}^n} \int_{0}^{\mathcal{M}f(x)} p t^{p-1} \, dt \, dx.
$$

$$
= \int_{\mathbb{R}^n} \int_{0}^{\infty} p t^{p-1} \chi_{\{ 0 \leq t \leq \mathcal{M}f(x) \}}(t) \, dt \, dx.
$$

$$
= \int_{0}^{\infty} \int_{\mathbb{R}^n} p t^{p-1} \chi_{\{ \mathcal{M}f(x) > t \}}(x) \, dx \, dt.
$$

$$
= \int_{0}^{\infty} p t^{p-1} m(\{ \mathcal{M}f(x) > t \}) \, dt.
$$

Substitute the weak bound on $$m(\{ \mathcal{M}f(x) > t \})$$:

$$
\leq \int_{0}^{\infty} p t^{p-1} \left( \frac{2 \cdot 3^n}{t} \int_{\{ |f(x)| > t/2 \}} |f(x)| \, dx \right) \, dt.
$$

$$
= 2 \cdot 3^n p \int_{0}^{\infty} t^{p-2} \int_{\mathbb{R}^n} \chi_{\{ |f(x)| > t/2 \}}(x) |f(x)| \, dx \, dt.
$$

$$
= 2 \cdot 3^n p \int_{\mathbb{R}^n} \int_{0}^{\infty} t^{p-2} \chi_{\{ t < 2 |f(x)| \}}(t) |f(x)| \, dt \, dx.
$$

Evaluating the inner integral, we get:

$$
= \frac{3^n 2^p p}{p - 1} \int_{\mathbb{R}^n} |f(x)|^{p-1} |f(x)| \, dx := C^p_{p, n} \| f \|^p_{L^{p}(\mathbb{R}^n)}.
$$

Therefore,

$$
\| \mathcal{M}f \|_{L^p(\mathbb{R}^n)} \leq C_{p, n} \| f \|_{L^{p}(\mathbb{R}^n)},
$$

where $$C_{p, n} = \left( \frac{3^n 2^p p}{p - 1} \right)^{1/p}$$.




## (Weak) Hardy-Littlewood Maximal Inequality

Suppose $$f: \mathbb{R}^n \rightarrow \mathbb{R} \in L^1(\mathbb{R}^n)$$, with $$E \subset \mathbb{R}^n$$ and $$m(E) < \infty$$. Then for any $$0 < q < 1$$, show that

$$
\| \mathcal{M} f(x) \|^q_{L^q(E)} \leq C_q m(E)^{1 - q} \| f \|^q_{L^1(\mathbb{R}^n)},
$$

where $$C_q > 0$$.

**Proof**. Without loss of generality, assume $$m(E) > 0$$ and $$\| f \|_{L^1(\mathbb{R}^n)} > 0$$. Using the same trick as above, we have:

$$
\| \mathcal{M} f(x) \|^q_{L^q(E)} = \int_{E} |\mathcal{M} f(x)|^q \, dx = \int_{E} \int_{0}^{\mathcal{M} f(x)} q t^{q-1} \, dt \, dx
$$

$$
= \int_{E} \int_{0}^{\infty} q t^{q-1} \chi_{\{ 0 < t < \mathcal{M} f(x) \}}(t) \, dt \, dx = \int_{0}^{\infty} \int_{E} q t^{q-1} \chi_{\{ \mathcal{M} f(x) > t \}}(x) \, dx \, dt
$$

$$
= \int_{0}^{\infty} q t^{q-1} m(\{ E \cap \mathcal{M} f(x) > t \}) \, dt
$$

$$
\leq \int_{0}^{\infty} q t^{q-1} \min\{ m(E), m(\{ \mathcal{M} f(x) > t \}) \} \, dt
$$

$$
= \int_{0}^{A} + \int_{A}^{\infty} q t^{q-1} \min\{ m(E), \frac{3^n}{t} \| f \|_{L^1(\mathbb{R}^n)} \} \, dt
$$

$$
= \int_{0}^{A} q 3^{n(q - \delta)} t^{\delta - 1} m(E)^{1 - q + \delta} \| f \|^{q - \delta}_{L^1(\mathbb{R}^n)} \, dt
$$

$$
+ \int_{A}^{\infty} q 3^{n(q + \delta)} t^{-\delta - 1} m(E)^{1 - q - \delta} \| f \|^{q + \delta}_{L^1(\mathbb{R}^n)} \, dt
$$

$$
= \frac{q}{\delta} A^{\delta} 3^{n(q - \delta)} \left( \frac{m(E)}{\| f \|_{L^1(\mathbb{R}^n)}} \right)^{\delta} m(E)^{1 - q} \| f \|^q_{L^1(\mathbb{R}^n)}
$$

$$
+ \frac{q}{\delta} A^{-\delta} 3^{n(q + \delta)} \left( \frac{\| f \|_{L^1(\mathbb{R}^n)}}{m(E)} \right)^{\delta} m(E)^{1 - q} \| f \|^q_{L^1(\mathbb{R}^n)}
$$

$$
= \frac{2q}{\delta} 3^{nq} m(E)^{1 - q} \| f \|^q_{L^1(\mathbb{R}^n)}, \quad A = \frac{3^n \| f \|_{L^1(\mathbb{R}^n)}}{m(E)}, \quad \delta < \min\{ q, 1 - q \}.
$$

Let $$\delta \rightarrow \min\{ q, 1 - q \}$$ to conclude:

$$
\| \mathcal{M} f(x) \|^q_{L^q(E)} \leq \frac{2q \cdot 3^{nq}}{\min\{ q, 1 - q \}} m(E)^{1 - q} \| f \|^q_{L^1(\mathbb{R}^n)}.
$$
