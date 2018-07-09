import React, {Component} from 'react';

class ThemedParty extends Component {
  render() {
    const decorations = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })

    return (
      <div className="decorations">{decorations}</div>
    )
  }
}

export default ThemedParty