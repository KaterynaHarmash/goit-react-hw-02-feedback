import { Button } from "./Button"
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(option => {
        return <Button key={option} text={option} onLeaveFeedback={onLeaveFeedback} />
    })
}