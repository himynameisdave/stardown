
if (Meteor.isServer) {

  Meteor.methods({
    'fetchGithub': (user) => {
      const octonode = Meteor.npmRequire('octonode'),
            ghClient = octonode.client(Meteor.settings.ghToken)

      var userData = Async.runSync(function(done){
        ghClient.get('/users/'+user+'/repos', {}, function (err, status, body, headers) {
          if(err) return done(err);
          let starData = {
            user: user,
            repo_count: body.length,
            totalStars: 0
          };
          body.forEach((repo)=>{
            starData.totalStars += repo.stargazers_count;
          });
          starData.averageStars = Math.round( starData.totalStars / starData.repo_count );
          done(null, starData);
        })
      });

      return userData.result;
    }
  });

  Meteor.startup(function () {
    //  server startup code
  });

};


if (Meteor.isClient) {
  const fetchFn = (user, cb) => {
    Meteor.call('fetchGithub', user, cb);
  };

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    ReactDOM.render(<App fetchFn={fetchFn} />, document.getElementById("app"));
  });
}
