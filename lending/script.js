// hide plaseholder tel;
const button = document.querySelector("#hide");

button.addEventListener("click", (event) => {
  button.style.display = 'none';
});


// costum select;

document.querySelectorAll('.center').forEach(function(dropDownWrapper){
  dropDownWrapper.querySelector('.dropdown-imput').addEventListener('click', function(){
    dropDownWrapper.querySelector('.dropdown-list').classList.toggle('dropdown-list-visible');
  });
  
  dropDownWrapper.querySelectorAll('.dropdown-list-item').forEach(function(listItem){
    listItem.addEventListener('click', function(){
      dropDownWrapper.querySelector('.dropdown-imput').value= this.dataset.value;
      dropDownWrapper.querySelector('.dropdown-list').classList.remove('dropdown-list-visible')
    })
  })

})

