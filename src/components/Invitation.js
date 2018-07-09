import React, {Component} from 'react';

class Invitation extends Component {
  render() {
    const messages = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {});
    })

    return (
      <div className='invitation'>
        <h1>You've been invited!</h1>
        <p>{messages}</p>
      </div>
    )
  }
}

export default Invitation;