import React from "react";
import { createRoot } from "react-dom/client";

import "@dsy/scss/lib/global.css";
import "@dsy/scss/lib/utilities.css";
import "@dsy/scss/lib/chip.css";
import "@dsy/scss/lib/margin.css";

import { Chip, ChipTypes, Text, Margin } from "@dsy/react";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <div>
    <Chip model={ChipTypes.deletableLarge}>
      <Margin size="xs">
        <Text> Tag Name A a long tale that </Text>
      </Margin>
    </Chip>
  </div>
);
