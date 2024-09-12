import React, { Fragment } from "react";
import VsClonePage from "./components/VsClonePage";
import { VsCloneProvider } from "./components/VsCloneContext";

export default function App() {
  return (
    <VsCloneProvider>
      <VsClonePage />
    </VsCloneProvider>
  );
}
