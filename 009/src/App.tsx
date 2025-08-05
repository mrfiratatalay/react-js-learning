import TemaJs from "./components/context-hook-type-checking/TemaJs";

type AppProps = {
  message: string;
}

function App({ message }: AppProps) {
  return (<div>
    <p>{message}</p>
    <TemaJs />
  </div>)
}

export default App;
