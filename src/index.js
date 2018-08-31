import React from 'react';
import { render } from 'react-dom';
import { Steps } from 'antd';
import './styles.scss';
import 'antd/dist/antd.css'

const Step = Steps.Step;

const App = () => {
  return (
    <div>
        <h3>Good Luck</h3>
        <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
        </Steps>
    </div>
  );
}

render(<App />, document.getElementById('app'));