import type { ReactNode } from "react";
import { useEffect, useState } from "react";

function App() {
  const [MyComponent, setMyComponent] = useState<() => ReactNode>(
    () => () => null
  );

  useEffect(() => {
    import("./MyComponent").then((module) => {
      setMyComponent(() => module.default);
    })
  }, []);

  return <MyComponent />;

}

export default App;
