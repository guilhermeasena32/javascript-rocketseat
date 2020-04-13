axios.get('https://api.github.com/users/guilhermeasena32')
  .then(function(response){
    console.log(response.data);
  })
  .catch(function(error){
    console.warning(error);
  });
