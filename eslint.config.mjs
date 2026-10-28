import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  { ignores: ["node_modules/**", ".next/**", "out/**", "build/**"] },
  ...nextVitals,
  {
    // Regla nueva de eslint-config-next 16. Hay 5 usos existentes (About,
    // ExposicionesData, ImageLayout, FetchQuery, Bio) que se corrigen en el
    // refactor de hooks; mientras tanto se mantiene como aviso.
    rules: { "react-hooks/set-state-in-effect": "warn" },
  },
];

export default eslintConfig;
