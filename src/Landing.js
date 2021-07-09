import React from 'react';
import { useHistory } from 'react-router-dom';

const Landing = () => {

    const history = useHistory();

    return (
        <div>
            <button onClick={() => history.push('/create-quiz')}>Create Quiz</button>
            <button onClick={() =>history.push('/create-question')}>Create Question</button>
        </div>
    );
}

export default Landing;
