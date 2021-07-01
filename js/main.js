const foxImg = document.querySelector('#fox')
const foxSays = new Audio('../audio/fox.mp3')
const notFoxImg = document.getElementById('notFox')

foxImg.addEventListener('click',()=>{
    foxSays.volume =.01
    foxSays.play()
})

notFoxImg.addEventListener('click',(evt)=>{
    if (evt.target.id !== 'notFox') {
        const audioElement = new Audio(`../audio/${evt.target.id}.mp3`)
        audioElement.volume = .06
        audioElement.play()

    }
})
