fetch('./src/special-action.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    // console.log(JSON.stringify(myJson));

    var actionMain = document.querySelector('#special-action');

    actionMain.querySelector('p:first-child').innerHTML = myJson.name;
    actionMain.querySelector('h3').innerHTML = myJson.title;
    actionMain.querySelector('p:last-child').innerHTML = myJson.text;
    return;
  });
