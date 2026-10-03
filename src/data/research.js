// Bibliographic metadata transcribed from the existing Research page.
// Titles, author initials, venues, and years follow that source; update here as needed.
const paper = (year, authors, title, venue, url = null) => ({ year, authors, title, venue, url });

export const publications = [
  paper(2026, 'Dizon, N. D., Jeyakumar, V., Li, G., Zhao, L.', 'Primal-Dual Proximal Splitting Methods for Wasserstein Distributionally Robust Convex Semidefinite Optimization', 'Applied Mathematics & Optimization.', 'https://doi.org/10.1007/s00245-026-10524-x'),
  paper(2026, 'Dizon, N. D., Huang, Q. Y., Jeyakumar, V., Li, G.', 'Piecewise Sum-of-Squares Convexity and Wasserstein Distributionally Robust Optimization: Exact Semi-definite Program Reformulations with Data-Driven Decision-Making under Uncertainty', 'European Journal of Operational Research.', 'https://doi.org/10.1016/j.ejor.2026.05.039'),
  paper(2026, 'Dizon, N. D., Jeyakumar, V.', 'Characterization and Recovery of Worst-Case Distributions in Wasserstein Distributionally Robust Optimization with Non-convex Quadratic Loss via Single SDP', 'Optimization Letters.', 'https://doi.org/10.1007/s11590-026-02321-w'),
  paper(2026, 'Dizon, N. D., Huang, Q. Y., Chuong, T.D., Li, G., Jeyakumar, V.', 'Convergent Lifted Lasserre Hierarchy of SDPs for Minimizing Expectation of Piecewise Polynomial Loss over Wasserstein Balls', 'Journal of Optimization Theory and Approximation, 209(2), 61.', 'https://doi.org/10.1007/s10957-026-02999-z'),
  paper(2026, 'Caldwell, B.I., Dizon, N. D., Jeyakumar, V., Li, G.', 'A Duality-Guided Proximal Splitting Method for Robust Constrained Best Approximation via Convex Semi-Definite Program Reformulations', 'Set-Valued Variational Analysis, 34(1), 7.', 'https://doi.org/10.1007/s11228-026-00793-7'),
  paper(2025, 'Dizon, N. D., Huang, Q. Y., & Jeyakumar, V.', 'Portfolio selection under data uncertainty: A blended distributionally robust approach of support vector machine and Mean-CVaR portfolio optimization', 'Optimization and Engineering, 1-37.', 'https://link.springer.com/article/10.1007/s11081-025-10056-3'),
  paper(2025, 'Dizon, N. D., Huang, Q. Y., Jeyakumar, V., Li, G.', 'Hidden Convexity of Separable Polynomial Systems: Exact Semi-Definite Programs for a Class of Moment-Ambiguity Distributionally Robust Optimization Problems', 'Optimization (2025): 1-32.', 'https://doi.org/10.1080/02331934.2025.2548879'),
  paper(2025, 'Dizon, N. D., Huang, Q. Y., Jeyakumar, N., Jeyakumar, V.', "A Distributionally Robust Machine Learning Model of Simultaneous Classification and Feature Selection under Data Uncertainty: Theory, Methods and Application to the Identification of Alzheimer's Disease using Handwriting", 'EURO Journal on Computational Optimization (2025): 100111.', 'https://doi.org/10.1016/j.ejco.2025.100111'),
  paper(2025, 'Dizon, N. D., Jauhiainen, J., Valkonen, V.', 'Online Optimization for Dynamic Electrical Impedance Tomography', 'Inverse Problems, 41.5 (2025): 055005.', 'https://doi.org/10.1088/1361-6420/adcb66'),
  paper(2024, 'Dizon, N. D., Jauhiainen, J., Valkonen, V.', 'Prediction techniques for dynamic imaging with primal-dual methods.', 'Journal of Mathematical Imaging and Vision, 66.6 (2024): 1109-1134.', 'https://doi.org/10.1007/s10851-024-01214-w'),
  paper(2024, 'Dizon, N. D., Hogan, J. A.', 'Holistic processing of colour images using novel quaternion-valued wavelets on the plane', 'IEEE Signal Processing Magazine, 41(2), 51-63.', 'https://ieeexplore.ieee.org/document/10558736'),
  paper(2022, 'Dizon, N. D., Hogan, J. A., Lindstrom, S. B.', 'Circumcentering reflection methods for nonconvex feasibility problems', 'Set-Valued and Variational Analysis, 30(3), 943-973.', 'https://link.springer.com/article/10.1007/s11228-021-00626-9'),
  paper(2022, 'Dizon, N. D., Hogan, J. A., Lakey, J. D.', 'Optimization in the construction of cardinal and symmetric wavelets on the line', 'International Journal of Wavelets, Multiresolution and Information Processing, 20(02), 2150048.', 'https://www.worldscientific.com/doi/abs/10.1142/S021969132150048X'),
  paper(2021, 'Dao, M. N., Dizon, N. D., Hogan, J. A., Tam, M. K.', 'Constraint reduction reformulations for projection algorithms with applications to wavelet construction', 'Journal of Optimization Theory and Applications, 190(1), 201-233.', 'https://link.springer.com/article/10.1007/s10957-021-01878-z'),
  paper(2021, 'Dizon, N. D., Hogan, J. A., Lindstrom, S. B.', 'Centering projection methods for wavelet feasibility problems', 'In Current Trends in Analysis, its Applications and Computation: Proceedings of the 12th ISAAC Congress, Aveiro, Portugal, 2019 (pp. 661-669). Cham: Springer International Publishing.', 'https://link.springer.com/chapter/10.1007/978-3-030-87502-2_66'),
  paper(2020, 'Dizon, N. D., Hogan, J. A., Lindstrom, S. B.', 'Circumcentered reflections method for wavelet feasibility problems', 'ANZIAM Journal, 62, C98-C111.', 'https://journal.austms.org.au/ojs/index.php/ANZIAMJ/article/view/16118'),
  paper(2019, 'Dizon, N. D., Hogan, J. A., Lakey, J. D.', 'Optimization in the construction of nearly cardinal and nearly symmetric wavelets', 'In 2019 13th International Conference on Sampling Theory and Applications (SampTA) (pp. 1-4). IEEE.', 'https://ieeexplore.ieee.org/document/9030889'),
];

export const preprints = [
  paper(2026, 'Dizon, N. D., Huang, Q. Y., Jeyakumar, V., Li, G., C. Tammer', 'Multi-Objective Stochastic Optimisation under Distributional Ambiguity: Data-Driven Robust Efficient Solutions via Semi-Definite Programming', 'Under review, European Journal of Operational Research.'),
  paper(2026, 'Dizon, N. D., Huang, Q. Y., Jeyakumar, V., Li, G.', 'Beyond Optimal Values: SDP-Based Optimal Distribution Recovery in Piecewise Polynomial Expectation over Wasserstein Balls', 'Under review, Journal of Global Optimization.'),
  paper(2026, 'Dizon, N. D., Huang, Q. Y., Jeyakumar, V.', 'Minimizing Worst-Case Polynomial Expectation over Wasserstein Balls: Convergent SDP Hierarchy, Exact SDP Relaxation and Optimal Distribution Extraction', 'Under review, Optimization Methods and Software.'),
  paper(2025, 'Caldwell, B.I., Dizon, N. D., Jeyakumar, V., Li, G.', 'Interwoven SDP in Primal-Dual Proximal Splitting Methods for Adjustable Robust Convex Optimisation with SOS-Convex Polynomial Constraints', 'Under review, Journal of Optimization Theory and Applications.', 'https://doi.org/10.48550/arXiv.2602.14624'),
  paper(2024, 'Dizon, N. D., Hogan, J. A.', 'Quaternion-Valued Wavelets on the Plane: A Construction via the Douglas-Rachford Approach', 'Under review, Applied Computational Harmonic Analysis.', 'https://arxiv.org/abs/2311.12614'),
  paper(2024, 'Dizon, N. D., Valkonen, V.', 'Differential Estimates for Fast First-Order Multilevel Nonconvex Optimization', 'Under review, Computational Optimization and Applications.', 'https://arxiv.org/abs/2412.01481'),
];

export const theses = [
  paper(2021, 'Dizon, N. D.', 'Optimisation in the Construction of Multidimensional Wavelets', 'Doctoral thesis. University of Newcastle, Australia.', 'https://openresearch.newcastle.edu.au/articles/thesis/Optimisation_in_the_construction_of_multidimensional_wavelets/29031236'),
  paper(2016, 'Dizon, N.D.', "Dykstra's Algorithm and Applications to Inverse Best Approximations", "Master's thesis. University of the Philippines, Diliman."),
  paper(2011, 'Dizon, N.D.', 'The Johnson-Loewy and London Inequalities on Trace Zero Nonnegative Matrices', "Bachelor's thesis. University of the Philippines, Diliman."),
];
