const background = document.querySelectorAll(".background")
const paragraphWrapper = document.querySelectorAll(".txt_wrapper")
const paragraph = document.querySelectorAll(".txt_with_fade")

window.addEventListener(
    "load",
    (e) => {

        ObjectObserveToChangeBackground(0);
        ObjectObserveToChangeBackground(1);

        ObjectObserveToFadeText(0);
        ObjectObserveToFadeText(1)
        
    },
    false
  );
  

const ObjectObserveToChangeBackground = (index) => {


    const options = {
        root: null,
        rootMargin: "-33%",
        threshold: 0.05,
    }

    const observer = new IntersectionObserver(Elentries =>{
        background[index].classList.toggle("show-background", Elentries[0].isIntersecting)
    }, 
        options
    )

    return  observer.observe(paragraphWrapper[index]);
}

const ObjectObserveToFadeText = (index) => {


    const options = {
        root: null,
        rootMargin: "-10% 0px 200px 0px",
        threshold: 0.80,
    }

    const observer = new IntersectionObserver(Elentries =>{
        paragraph[index].classList.toggle("hideTxt", !Elentries[0].isIntersecting)
        console.log(Elentries);
    }, 
        options
    )

    return  observer.observe(paragraphWrapper[index]);
}