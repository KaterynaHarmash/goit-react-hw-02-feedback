import { Component } from "react";
import { Statistic } from "./Statistic";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section";
import { Notification } from "./Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  countFeedback = (evt) => {
    const option = evt.target.value;
    this.setState(prevState => {
      switch (option) {
        case 'Good':
          return { good: prevState.good + 1 }
        case 'Neutral':
          return { neutral: prevState.neutral + 1 }
        case 'Bad':
          return { bad: prevState.bad + 1 }
        default:
          break
      }
    })
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    if (good !== 0 || neutral !== 0 || bad !== 0) {
      return Math.round(good / this.countTotalFeedback()*100).toFixed();
    }
  }

  render() {
    const options = ['Good', 'Neutral', 'Bad'];
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          color: '#010101',
          gap: '30px'
        }}
      >
        
        <Section title="Please leave feedback"><FeedbackOptions options={options} onLeaveFeedback={this.countFeedback} /></Section>
        {this.countTotalFeedback() === 0 && <Notification message="There is no feedback" />}
        {this.countTotalFeedback() !== 0 && <Section title="Statistic"><Statistic good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /></Section>}
      </div>
    );
  }
  
};
