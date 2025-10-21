import ThemedButton from './ThemedButton';

function Toolbar() {
  console.log('Toolbar render oldu.');

  return (
    <div>
      <p>Ben Toolbar componentiyim. Tema;danm haberim bile yok.</p>
      <ThemedButton />
    </div>
  );
}

export default Toolbar;
