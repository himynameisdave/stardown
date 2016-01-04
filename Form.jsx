//  Wrapper for the form component
Form = React.createClass({

  validateForm(userOne, userTwo) {
    let isValid = true;
    if ((userOne === '' || userTwo === '') || userOne === userTwo)
      isValid = false;
    return isValid;
  },

  compareUsers(e) {
    e.preventDefault();
    //  get usernames
    let userOne = ReactDOM.findDOMNode(this.refs.userOne).value,
        userTwo = ReactDOM.findDOMNode(this.refs.userTwo).value;

    if( !this.validateForm(userOne, userTwo) ){
      return false;
    }

    this.props.grabUsernames(userOne, userTwo);

  },

  render() {
    return (
      <form className="form" onSubmit={this.compareUsers}>
        <UserInput ref="userOne" />
        <span className="form-vs">
          vs
        </span>
        <UserInput ref="userTwo" />
        <button type="submit" className="form-button">
          COMPARE
        </button>
      </form>
    )
  }
});
