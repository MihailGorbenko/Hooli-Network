
const popoverTemlate = document.querySelector('#follow_popover_template')
const followButtons = document.querySelectorAll('#follow_button')
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const followingButtonTemlate = document.querySelector('#folowing_button_template')


const popoverList = [...popoverTriggerList].map(popTriggerEl => new bootstrap.Popover(popTriggerEl,{
    content: popoverTemlate.innerHTML,
    title: 'You may want to follow:',
    html:true,
    trigger:'focus',
    placement:'auto',
    sanitize:false,
    delay: { hide:1000 }
}))


followButtons.forEach((button) => {
    button.addEventListener('click', e => {
        follow_button_click(e.target) 
       const pop_buttons = document.querySelectorAll('button[data-pop-suggest-id]')
       pop_buttons.forEach(button => {
            button.addEventListener('click',e => {
                follow_button_click(e.target)
            })
       })
        
    })
})

function follow_button_click (button) {
    button.innerHTML = followingButtonTemlate.innerHTML
    button.classList.remove('btn-outline-primary')
    button.classList.add('btn-outline-success')

}