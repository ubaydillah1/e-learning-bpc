// import fs from "fs";
// import path from "path";
// import { transform } from "@svgr/core";
// import prettier from "prettier";

// const SRC_DIR = "public/assets/icons-svg";
// const OUT_DIR = "src/components/icons";

// fs.mkdirSync(OUT_DIR, { recursive: true });

// const files = fs.readdirSync(SRC_DIR).filter((f) => f.endsWith(".svg"));

// const indexExports = [];

// /**
//  * ✅ SVGR template using `tpl` (CORRECT WAY)
//  */
// const template = ({ componentName, jsx }, { tpl }) => {
//   return tpl`
// export default function ${componentName}(
//   { className }: { className?: string }
// ) {
//   return ${jsx};
// }
// `;
// };
// for (const file of files) {
//   const svgCode = fs.readFileSync(path.join(SRC_DIR, file), "utf8");

//   const componentName =
//     file
//       .replace(".svg", "")
//       .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
//       .replace(/^[a-z]/, (c) => c.toUpperCase()) + "Icon";

//   const jsCode = await transform(
//     svgCode,
//     {
//       typescript: true,
//       jsxRuntime: "automatic",
//       expandProps: false,
//       dimensions: false,
//       svgProps: {
//         className: "{className}",
//       },
//       prettier: false,
//       plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
//       template,
//     },
//     { componentName }
//   );

//   const formatted = await prettier.format(jsCode, {
//     parser: "typescript",
//     semi: true,
//   });

//   fs.writeFileSync(path.join(OUT_DIR, `${componentName}.tsx`), formatted);

//   indexExports.push(
//     `export { default as ${componentName} } from "./${componentName}";`
//   );
// }

// fs.writeFileSync(path.join(OUT_DIR, "index.ts"), indexExports.join("\n"));

// console.log(`✅ Generated ${files.length} minimal icon components`);

// =============================================================================================

import fs from "fs";
import path from "path";
import { transform } from "@svgr/core";
import prettier from "prettier";

const SRC_DIR = "public/assets/icons-svg";
const OUT_DIR = "src/icons";

fs.mkdirSync(OUT_DIR, { recursive: true });

const files = fs.readdirSync(SRC_DIR).filter((f) => f.endsWith(".svg"));

const indexExports = [];

const template = ({ componentName, jsx }, { tpl }) => {
  return tpl`
export default function ${componentName}(
  { className, ...props }: { className?: string; [key: string]: any }
) {
  return ${jsx};
}
`;
};

for (const file of files) {
  const svgCode = fs.readFileSync(path.join(SRC_DIR, file), "utf8");

  const componentName =
    file
      .replace(".svg", "")
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
      .replace(/^[a-z]/, (c) => c.toUpperCase()) + "Icon";

  const jsCode = await transform(
    svgCode,
    {
      typescript: true,
      jsxRuntime: "automatic",
      expandProps: "end",
      dimensions: false,
      svgProps: {
        className: "{className}",
      },
      replaceAttrValues: {
        "#1A202C": "currentColor",
        "#000": "currentColor",
        "#000000": "currentColor",
        // Tambahkan warna lain sesuai kebutuhan
      },
      prettier: false,
      plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
      template,
    },
    { componentName }
  );

  const formatted = await prettier.format(jsCode, {
    parser: "typescript",
    semi: true,
  });

  fs.writeFileSync(path.join(OUT_DIR, `${componentName}.tsx`), formatted);

  indexExports.push(
    `export { default as ${componentName} } from "./${componentName}";`
  );
}

fs.writeFileSync(path.join(OUT_DIR, "index.ts"), indexExports.join("\n"));

console.log(`✅ Generated ${files.length} minimal icon components`);
