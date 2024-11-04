---
layout: default
title: "Some thoughts on Marcinkiewicz Interpolation"
permalink: /courses/interpolation/
---

<script type="text/javascript" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

# Problem

If $$0 < \alpha < n$$, define an operator $$T_\alpha$$ on functions on $$\mathbb{R}^n$$ by 

$$
T_\alpha(x) = \int |x - y|^{-\alpha} f(y) \, dy
$$

Then $$T_\alpha$$ is weak type $$(1, n\alpha^{-1})$$ and strong type $$(p, r)$$ with respect to the Lebesgue measure on $$\mathbb{R}^n$$, where $$1 < p < \frac{n}{n - \alpha}$$ and $$\frac{1}{r} = \frac{1}{p} - \frac{n - \alpha}{n}$$.

## Proof using Marcinkiewicz Interpolation

Given $$f \in L^p(\mathbb{R}^n)$$, we assume without loss of generality that $$\| f \|_{L^p} = 1$$. For a non-negative $$\mu$$, which will be specified later, define

$$
K(x) := |x|^{-\alpha} = K(x) \chi_{\{|x| > \mu\}} + K(x) \chi_{\{|x| \leq \mu\}} := K_1(x) + K_2(x)
$$

where 

$$
K_1(x) = K(x) \chi_{\{|x| > \mu\}}, \quad K_2(x) = K(x) \chi_{\{|x| \leq \mu\}}.
$$

Then 

$$
T_\alpha f(x) = K * f(x) = K_1 * f(x) + K_2 * f(x).
$$

Note that $$K_1 \in L^{\infty}$$ implies $$K_1 * f \in L^{\infty}$$, and $$K_2 \in L^1$$ implies $$K_2 * f \in L^p$$, due to Young's Inequality. Moreover, for all $$\lambda > 0$$, 

$$
m(\{ |K * f| > 2\lambda \}) \leq m(\{ |K_1 * f| > \lambda \}) + m(\{ |K_2 * f| > \lambda \}).
$$

Let $$1 < q < \infty$$ be the conjugate exponent of $$p$$: $$\frac{1}{p} + \frac{1}{q} = 1$$, and note that $$\alpha q > n$$.

$$
\| K_1 * f \|_{L^{\infty}} \leq \| K_1 \|_{L^q} \cdot \| f \|_{L^p} = \| K_1 \|_{L^q} = \left( \int_{\{|x| > \mu\}} |x|^{-\alpha q} \, dx \right)^{\frac{1}{q}}
$$

$$
= \left( \int_{\mu}^{\infty} \omega_n t^{n - 1 - \alpha q} \, dt \right)^{\frac{1}{q}} = \left( \frac{\omega_n}{\alpha q - n} \right)^{\frac{1}{q}} \mu^{-\frac{n}{r}} := C_1 \mu^{-\frac{n}{r}}
$$

where $$\omega_n = \int_{\partial B(0, 1)} dS$$ denotes the area of $$\partial B(0, 1)$$. Let $$C_1 \mu^{-\frac{n}{r}} = \lambda$$, i.e., $$\mu = C_1^{\frac{r}{n}} \lambda^{-\frac{r}{n}}$$. Hence, $$\| K_1 * f \|_{L^{\infty}} > \lambda$$, and $$m(\{ |K_1 * f| > \lambda \}) = 0$$. 

Besides,

$$
m(\{ |K_2 * f| > \lambda \}) \leq \lambda^{-p} \| K_2 * f \|_{L^p}^p \leq \lambda^{-p} \| f \|_{L^p}^p \| K_2 \|_{L^1}^p
$$

$$
= \lambda^{-p} \| K_2 \|_{L^1}^p = \lambda^{-p} \left( \int_{\{|x| \leq \mu\}} |x|^{-\alpha} \, dx \right)^p
$$

$$
= \left( \frac{\omega_n}{n - \alpha} \right)^p \left( \frac{\mu^{n - \alpha}}{\lambda} \right)^p = C_2 \lambda^{-r}.
$$

Hence,

$$
(2\lambda)^r m(\{ |K * f| > 2\lambda \}) \leq 2^r C_2.
$$

where $$C_2$$ does not depend on $$\lambda$$. Therefore, by letting $$p = 1$$ and $$r = n\alpha^{-1}$$, $$T_\alpha$$ is weak type $$(1, n\alpha^{-1})$$. For any fixed $$1 < p < \frac{n}{n - \alpha}$$, let $$p < \tilde{p} < \frac{n}{n - \alpha}$$, $$\frac{1}{\tilde{r}} = \frac{1}{\tilde{p}} - \frac{n - \alpha}{n}$$, then $$T_\alpha$$ is also weak type $$(\tilde{p}, \tilde{r})$$. Let

$$
\frac{1}{p} = \frac{1 - t}{1} + \frac{t}{\tilde{p}}, \quad \frac{1}{r} = \frac{1 - t}{n\alpha^{-1}} + \frac{t}{\tilde{r}} \Rightarrow r = \frac{1}{p} - \frac{n - \alpha}{n}.
$$

It follows from the Marcinkiewicz Interpolation Theorem that $$T_\alpha$$ is strong type $$(p, r)$$.

## A Direct Proof using Dyadic Decomposition

Suppose $$f \in L^q(\mathbb{R}^n)$$, $$0 < a < n$$, $$p > q > 1$$, $$\frac{1}{p} - \frac{1}{q} + 1 = \frac{a}{n}$$, and define $$\mathcal{C} f(x) := f * (id)^{-a} = \int_{\mathbb{R}^n} \frac{f(y)}{|x - y|^a} \, dy$$. Show that there exists $$C_{n, a, q} > 0$$ such that 

$$
\| \mathcal{C} f \|_{L^p(\mathbb{R}^n)} \leq C_{n, a, q} \| f \|_{L^q(\mathbb{R}^n)}.
$$

(Note: $$q$$ is the same as $$r$$ from the above section.)

### Proof

Without loss of generality, assume $$m(\{ |f(x)| > 0 \}) > 0$$. For any $$x \in \mathbb{R}^n$$ and $$r > 0$$,

$$
\left| \int_{B(x, r)} \frac{f(y)}{|y - x|^a} \, dy \right| \leq \int_{B(x, r)} \frac{|f(y)|}{|y - x|^a} \, dy = \sum_{j=0}^{\infty} \int_{B(x, \frac{r}{2^j}) \setminus B(x, \frac{r}{2^{j+1}})} \frac{|f(y)|}{|y - x|^a} \, dy
$$

$$
\leq \sum_{j=0}^{\infty} \int_{B(x, \frac{r}{2^j}) \setminus B(x, \frac{r}{2^{j+1}})} \left( \frac{2^{j+1}}{r} \right)^a |f(y)| \, dy \leq \sum_{j=0}^{\infty} \int_{B(x, \frac{r}{2^j})} \left( \frac{2^{j+1}}{r} \right)^a |f(y)| \, dy
$$

$$
= \sum_{j=0}^{\infty} \left( \frac{2^{j+1}}{r} \right)^a \alpha(n) \left( \frac{r}{2^j} \right)^n \frac{1}{|B(x, \frac{r}{2^j})|} \int_{B(x, \frac{r}{2^j})} |f(y)| \, dy
$$

$$
\leq \left( \alpha(n) 2^a \sum_{j=0}^{\infty} 2^{j(a - n)} \right) r^{n - a} \mathcal{M} f(x) := C_{n, a} r^{n - a} \mathcal{M} f(x), \quad C_{n, a} < \infty.
$$

Consider $$\frac{1}{q} + \frac{1}{q'} = 1$$, then $$\frac{1}{p} + \frac{1}{q'} = \frac{a}{n}$$.

$$
\left| \int_{\mathbb{R}^n \setminus B(x, r)} \frac{f(y)}{|y - x|^a} \, dy \right| \leq \left( \int_{\mathbb{R}^n \setminus B(x, r)} |f|^q \, dm \right)^{\frac{1}{q}} \left( \int_{\mathbb{R}^n \setminus B(x, r)} |y - x|^{-q' a} \, dy \right)^{\frac{1}{q'}}
$$

$$
\leq \| f \|_{L^q(\mathbb{R}^n)} \left( \int_{r}^{\infty} \int_{\partial B(0, \rho)} \rho^{-q' a} \, dS \, d\rho \right)^{\frac{1}{q'}} = \| f \|_{L^q(\mathbb{R}^n)} \cdot \left( \int_{r}^{\infty} \omega_n \rho^{n - 1 - q' a} \, d\rho \right)^{\frac{1}{q'}}
$$

$$
= \| f \|_{L^q(\mathbb{R}^n)} \left( \frac{\omega_n}{q' a - n} \right)^{\frac{1}{q'}} \cdot r^{\frac{n}{q'} - a} := \tilde{C}_{n, a, q} \cdot r^{-\frac{n}{p}} \| f \|_{L^q(\mathbb{R}^n)}.
$$

Let $$C := \max\{ C_{n, a}, \tilde{C}_{n, a, q} \}$$. We have the following estimate for $$|\mathcal{C} f(x)|$$:

$$
|\mathcal{C} f(x)| = \left| \int_{\mathbb{R}^n} \frac{f(y)}{|x - y|^a} \, dy \right| \leq C \left( r^{n - a} \mathcal{M} f(x) + r^{-\frac{n}{p}} \| f \|_{L^q(\mathbb{R}^n)} \right).
$$

By the Strong Hardy-Littlewood maximal inequality: $$\| \mathcal{M} f \|_{L^q(\mathbb{R}^n)} \leq C_{q, n} \| f \|_{L^q(\mathbb{R}^n)}$$, where $$C_{q, n} = \left( \frac{3^n 2^p p}{p - 1} \right)^{1/p}$$. Besides, by our assumption, $$m(\{ |f(x)| > 0 \}) > 0 \Rightarrow \mathcal{M} f(x) > 0$$. Let $$r^{n - a} \mathcal{M} f(x) = r^{-\frac{n}{p}} \| f \|_{L^q(\mathbb{R}^n)}$$.

Then $$r = (\| f \|_{L^q(\mathbb{R}^n)})^{\frac{q}{n}} (\mathcal{M} f(x))^{-\frac{q}{n}}$$.

Thus, equation \eqref{3.1} yields that $$|\mathcal{C} f(x)|^p \leq (2C)^p (\mathcal{M} f(x))^q (\| f \|_{L^q(\mathbb{R}^n)})^{p - q}$$. Then integrating on both sides:

$$
\| \mathcal{C} f \|_{L^p(\mathbb{R}^n)} = \left( \int_{\mathbb{R}^n} |\mathcal{C} f(x)|^p \, dx \right)^{\frac{1}{p}} \leq 2C (\| f \|_{L^q(\mathbb{R}^n)})^{1 - \frac{q}{p}} \left( \int_{\mathbb{R}^n} (\mathcal{M} f(x))^q \, dx \right)^{\frac{1}{p}}
$$

$$
\leq 2C (\| f \|_{L^q(\mathbb{R}^n)})^{1 - \frac{q}{p}} (C_{q, n})^{\frac{q}{p}} \cdot \| f \|_{L^q(\mathbb{R}^n)}^{\frac{q}{p}} = 2C \cdot C^{\frac{q}{p}}_{q, n} \cdot \| f \|_{L^q(\mathbb{R}^n)} := C_{n, a, q} \cdot \| f \|_{L^q(\mathbb{R}^n)}.
$$

where

$$
C_{n, a, q} = 2 \max \left\{ \alpha(n) 2^a \sum_{j=0}^{\infty} 2^{j(a - n)}, \left( \frac{\omega_n}{q' a - n} \right)^{\frac{1}{q'}} \right\} \cdot \left( \frac{3^n 2^p p}{p - 1} \right)^{\frac{q}{p^2}}.
$$
