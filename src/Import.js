import { useEffect, useState } from "react";

// If screen is small enough - serve the mobile version
const isMobile = window.matchMedia("(max-width: 768px)").matches;

export default function Import({ touch, desktop, children }) {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    // Dynamic import call based on the 'isMobile' flag
    const importCallback = isMobile ? touch : desktop;

    // 'desktop' prop might be empty fx.
    if (importCallback) {
      // Executes the `import()` call that returns a promise with
      // component details passed as an argument
      importCallback().then((componentDetails) => {
        // Store imported component data in the local state
        setComponent(componentDetails);
      });
    }
  }, [desktop, touch]);

  // The actual component is assigned to the 'default' prop
  return children(Component ? Component.default : () => null);
}
