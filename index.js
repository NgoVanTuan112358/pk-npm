const { getRepos } = require('check-publish-npm');
getRepos().then((repositories) => console.log(repositories));