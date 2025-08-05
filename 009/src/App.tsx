import TemaTs from "./components/context-hook-type-checking/TemaTs";

type AppProps = {
  message: string;
}

function App({ message }: AppProps) {
  return (<div>
    <p>{message}</p>
    <TemaTs />
  </div>)
}

export default App;
