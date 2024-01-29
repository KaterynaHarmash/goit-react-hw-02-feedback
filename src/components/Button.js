export const Button = ({ onLeaveFeedback, text }) => {
    return <button onClick={evt=> onLeaveFeedback(evt) } value={text} >{ text }</button>
}