(function() {

    const img = document.querySelector('.left__img')
    const list = document.querySelector('.js')
    const sizeBtns = document.querySelectorAll('.btn__size-link')
    const activeClass = 'btn__size--active'
    
    list.addEventListener('click', function(event) {
        event.preventDefault()
        if (event.target.classList.contains('btn__black')) {
            img.setAttribute('src', './img/tshirts/tshirt_07.png')
        }
        if (event.target.classList.contains('btn__white')) {
            img.setAttribute('src', './img/tshirts/tshirt_08.png')
        }
        if (event.target.classList.contains('btn__green')) {
            img.setAttribute('src', './img/tshirts/tshirt_09.png')
        }
        if (event.target.classList.contains('btn__blue')) {
            img.setAttribute('src', './img/tshirts/tshirt_10.png')
        }
        if (event.target.classList.contains('btn__red')) {
            img.setAttribute('src', './img/tshirts/tshirt_11.png')
        }
    }) 
    sizeBtns.forEach(function(control){
        control.addEventListener("click", function(e) {
            e.preventDefault()
            if(e.target.classList.contains('btn__size--hover')){
                sizeBtns.forEach(function(control){
                    control.classList.remove(activeClass)
                })
                control.classList.add(activeClass)
            }
           
        })
    }) 
})();