import * as ReactDom from 'react-dom/client';
import MyButton from './components/MyButton.jsx';
import MyComponent from './components/MyComponent.jsx';
import MyList from './components/MyList.jsx';

const root = ReactDom.createRoot(document.getElementById('root'));

const appState = {
    text: "My Button",
    disabled: true,
    items: ["First", "Second", "Third"],
}


function render(props) {
    root.render(
        <main>
            <MyComponent
                title="Welcome to My App"
                description="This is a sample component."
            />
            <MyButton
                text={props.text}
                disabled={props.disabled}
            />
            <MyButton
                text="Another Button"
                disabled
            />

            <MyList items={props.items} />
        </main>
    )
}

render(appState);



setTimeout(() => {
    appState.disabled = false;
    appState.items.push("Fourth");
    render(appState);
}, 1000);
