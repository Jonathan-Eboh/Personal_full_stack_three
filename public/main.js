var updateProgress = document.getElementsByClassName("updateProgress");
var trash = document.getElementsByClassName("fa-trash");

console.log(updateProgress);

Array.from(updateProgress).forEach(function (element) {
  element.addEventListener('change', function () {
    const id = this.id
    const value = this.value; //
    console.log("This is id, value in main.js : ", id, value);



    fetch('updateProjectStatus', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        newProjectProgress: value

      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});

//on change event 


Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const _id = this.parentNode.parentNode.childNodes[1].getAttribute('id')
    // const msg = this.parentNode.parentNode.childNodes[3].innerText
    fetch('removeProject', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // 'name': name,
        // 'msg': msg
        _id
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
