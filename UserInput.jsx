//  UserInput component
UserInput = React.createClass({
  render() {
    return (
      <input ref={this.props.ref} className="form-input" type="text" placeholder="username" />
    )
  }
});
