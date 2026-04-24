"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./src/sanity/schemaTypes";
import Link from "next/link";

export default defineConfig({
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  studio: {
    components: {
      navbar: (props) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              backgroundColor: "#111111",
              padding: "16px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span
              style={{
                color: "#faf7f3",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontSize: "14px",
                fontFamily: "sans-serif",
              }}
            >
              Administration
            </span>
            <Link
              href="/"
              style={{
                color: "#faf7f3",
                textDecoration: "none",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "sans-serif",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#a2623d")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#faf7f3")}
            >
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Retour au site
            </Link>
          </div>
          {props.renderDefault(props)}
        </div>
      ),
    },
  },

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Gestion du site")
          .items([
            S.listItem()
              .title("Position 1 (Haut Gauche)")
              .id("pos1")
              .child(
                S.document()
                  .schemaType("portfolio")
                  .documentId("portfolio-1")
                  .title("Position 1"),
              ),
            S.listItem()
              .title("Position 2 (Bas Gauche)")
              .id("pos2")
              .child(
                S.document()
                  .schemaType("portfolio")
                  .documentId("portfolio-2")
                  .title("Position 2"),
              ),
            S.listItem()
              .title("Position 3 (Haut Droite)")
              .id("pos3")
              .child(
                S.document()
                  .schemaType("portfolio")
                  .documentId("portfolio-3")
                  .title("Position 3"),
              ),
            S.listItem()
              .title("Position 4 (Bas Droite)")
              .id("pos4")
              .child(
                S.document()
                  .schemaType("portfolio")
                  .documentId("portfolio-4")
                  .title("Position 4"),
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schema.types,
  },
});
