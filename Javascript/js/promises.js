var promessa = function () {
     return new Promise(function (resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', 'https://api.github.com/users/MrGuizao');
          xhr.send(null);

          xhr.onreadystatechange = function () {
               if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                         resolve(JSON.parse(xhr.responseText));
                    } else {
                         reject('Erro na requisição');
                    }
               }
          }
     });
}
promessa()
.then(function(response){
     console.log(response);
})
.catch(function(error){
     console.warn(error);
});
