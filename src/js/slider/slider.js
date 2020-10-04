function Slider(id){
    this.target = document.getElementById(id)
    let list = this.target.querySelector('ul')
    this.numberOfSlides = list.children.length
    this.currentIndexSlide = 0
    console.log(list);
    // console.log(numberOfSlides);

    this.target.addEventListener('click', (event)=>{
        event.preventDefault();
        const arrowLink = event.target.closest('[data-direction]');

        if(arrowLink) {
            const dataDirection = arrowLink.dataset.direction

            this[dataDirection]()
        }

    })
    
    this.next = function(){
        currentIndexSlide++;
        translateSlide(this.currentIndexSlide)
    }
    this.previous = function(){
        currentIndexSlide--;
        translateSlide(this.currentIndexSlide)
    }

    function translateSlide(index){
        list.style.transform = `translateX(${-(index * 100)}%)`
    }
}
