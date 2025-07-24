
const MyComponent = ({ title, description }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default MyComponent;

{
    /*
        const MyComponent = (props) => {
            return (
                <div>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            );
        }
    */
}
