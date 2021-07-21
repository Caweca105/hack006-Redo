import React from 'react';


class LandingPage extends React.Component {
    constructor(props) {
      super(props);

    }


    render() {
        return (
            <>
                <div>
                    <button onClick={this}>Log in</button>
                    <button onClick={this}>Sign In</button>
                </div>
                <div>
                    <h1>Redo</h1>
                    <p>Your New path</p>
                </div>
            </>
        )
      
    }


}
export default LandingPage;