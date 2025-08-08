
export const popupForm = ()=>{
        const closeFormBtn = document.querySelector('.form-popup__close')
        const openPopupBtns = document.querySelectorAll('.form-popup__open')

        //Open popup for every item with class form-popup__open
        openPopupBtns.forEach(btn=>{
            btn.addEventListener("click", ()=>{
                document.body.classList.add('form-popup-open')
            })
        })

        if(closeFormBtn){
            //Close form popup event
            closeFormBtn.addEventListener("click", ()=>{
                document.body.classList.remove('form-popup-open')
            })
        }
}