import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
            <div>
                <div className='splash-image me'>
                    <div className='site-description'>
                        <img src=''/>
                        <p> Hello, I'm Eric Jonelunas.  I am a full stack web developer looking for new opportunities.</p>
                    </div>
                </div>
            </div>
            <div className='splash-image skills'>
                <p>I have spent the last three months learning in General Assembly.  I have learned to create full-stack CRUD apps, RESTful routes, and DRY code.</p>
                <h4>I have worked with:</h4>
                <div className='row'>
                    <p>React &bull; Node.js &bull; Express &bull; MongoDB &bull; POSTGres &bull; Ruby &bull; Rails</p>
            </div>
            </div>
            </div>
        );
    }
}

export default Home;