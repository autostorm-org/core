import React from "react";

import { Button } from "@autofica/common/lib/components/Button";
import { ThemeProvider } from "@autofica/common/lib/components/Themeing";

function App() {
  console.log(React);
  console.log("s");

  return (
    <ThemeProvider>
      <div>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
