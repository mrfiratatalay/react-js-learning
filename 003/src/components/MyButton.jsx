const MyButton = ({ disabled, text }) => {
    return <button disabled={disabled}>{text}</button>;
}

export default MyButton;


{
    /*
        const MyButton = ({ disabled, text }) => (
            <button disabled={disabled}>{text}</button>
        )

        MyButton.defaultProps = {
            disabled: false,
            text: "Click Me"
        }

    */


}

{
    /*
    const MyButton = ({disabled = false, text = "My Button"}) => {
        <button>disabled={disabled}>{text}</button>;
        }

    */
}
