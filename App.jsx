// App component - represents the whole app
App = React.createClass({

  promisifyFetch(user) {
    return new Promise((res, rej)=>{
      this.props.fetchFn( user, (e, data)=>{
        if(e) rej(e);
        res(data);
      });
    });
  },

  grabUsernames(userOne, userTwo) {
    //  Go make both of those fetches
    Promise.all([ this.promisifyFetch(userOne), this.promisifyFetch(userTwo) ])
      .then((vals)=>{
        console.log("SUCCESSFUL REQUESTS!!!!!", vals)
      })
      .catch(console.warn);
  },

  getDefaultProps() {
    return { showResults: false };
  },
  render() {
    return (
      <div className="main-l">
        <Header />
        <Form grabUsernames={this.grabUsernames}/>
        <Results showResults={this.props.showResults} results="" updateResults={this.updateResults} />
      </div>
    );
  }
});
