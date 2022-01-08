import React from "react";
import Import from "../Import";

export default function Projects() {
  return (
    <Import
      touch={() => import("./Projects_mobile")}
      desktop={() => import("./Projects_desktop")}
    >
      {(Projects) => <Projects />}
    </Import>
  );
}
