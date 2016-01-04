//  Wrapper for the results
Results = React.createClass({
  resultsClass() {
    return this.props.showResults ? 'results results-s-visible' : 'results results-s-invisible';
  },

  render() {

    return (
      <section className={this.resultsClass()}>
        <h2 className="results-heading">Results:</h2>

        <div className="results-row">
          <div className="results-box"></div>
          <div className="results-box">
            <h3 className="results-box-text">Total Repos</h3>
          </div>
          <div className="results-box"></div>
        </div>

        <div className="results-row">
          <div className="results-box"></div>
          <div className="results-box">
            <h3 className="results-box-text">Total Stars</h3>
          </div>
          <div className="results-box"></div>
        </div>

        <div className="results-row">
          <div className="results-box"></div>
          <div className="results-box">
            <h3 className="results-box-text">Average Stars</h3>
          </div>
          <div className="results-box"></div>
        </div>

      </section>
    )
  }
});
