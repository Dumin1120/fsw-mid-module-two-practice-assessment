document.addEventListener("DOMContentLoaded", () => {
    const inLength = document.getElementById("story-length-input")
    const inDesc = document.getElementById("description-input")
    const btnStory = document.getElementById("generate-story-btn")
    const btnSubmit = document.getElementById("submit-description-btn")
    const outStory = document.getElementById("emoji-story")
    const outTitle = document.getElementById("history-title")
    const outList = document.getElementById("history-list")
    btnStory.addEventListener("click", () => {
        if(inLength.value !== ""){
            const emojis = [
                '😀','😆','😅','🤣','🙃','😍','😡','🥶','😱','👻',
                '👾','😻','💋','👅','🧵','👠','🥾','👑','🎓','🐔',
                '🐧','🦄','🦇','🌲','🎄','🌊','🍓','🍍','🥯','🌭',
                '🍕','🍣','🥡','🤸','🎯','🧨','🔮','💉','🦠','❤️',
                '🧡','💛','💚','💙','💜','☢️','🚫','💯','🔱','🎊'
            ]
            let strStory = "Story: "
            for(let i = 0; i < inLength.value; i++){
                strStory += emojis[Math.floor(Math.random() * emojis.length)]
            }
            outStory.textContent = strStory
        }
    })
    btnSubmit.addEventListener("click", () => {
        const strEmojis = outStory.textContent.split(" ")[1]
        if(inDesc.value.trim() !== "" && strEmojis){
            const strDesc = inDesc.value
            const li = document.createElement("li")
            li.textContent = strEmojis + " : " + strDesc
            outList.appendChild(li)
            inLength.value = ""
            inDesc.value = ""
            outStory.textContent = "Story: "
            const arrTitle = outTitle.textContent.split(" ")
            arrTitle[0]++
            arrTitle[2] = arrTitle[0] === 1 ? "Story" : "Stories"
            outTitle.textContent = arrTitle.join(" ")
        }
    })
})