
function myRequest()
{
  fetch('http://localhost:8087/test')
      .then(result => result.json())
      .then(json => console.log(json));
}
