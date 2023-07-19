(function(){
    const sliders = [...document.querySelectorAll(".testimonio-body")];
    const btnNext = document.querySelector("#next");
    const btnBefore = document.querySelector("#before");
    let value;

    btnNext.addEventListener("click", ()=>{
        changePosition(1);
    });
    btnBefore.addEventListener("click", ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimonio = document.querySelector(".testimonio-body__show").dataset.id;
        value = Number(currentTestimonio);
        value+= add;

        sliders[Number(currentTestimonio)-1].classList.remove("testimonio-body__show");
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value -1].classList.add("testimonio-body__show");
    }
})();