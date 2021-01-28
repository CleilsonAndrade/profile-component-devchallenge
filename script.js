let nameUserNew = document.querySelector('#nameUserNew')
let nameUser = document.querySelector('#nameUser')

let gitUserNew = document.querySelector('#gitUserNew')
let gitUser = document.querySelector('#gitUser')

let picUserNew = document.querySelector('#picUserNew')
let picUser = document.querySelector('#picUser')

const Modal = {
    openModal() {
        document.querySelector('.modal-overlay').classList.add('active')
    },
    closeModal() {
        document.querySelector('.modal-overlay').classList.remove('active')
        nameUserNew.value = ''
        gitUserNew.value = ''
        picUserNew.value = ''
    },
    changeProfile() {
        if (nameUserNew.value === '') {
            alert('Coloque seu nome!')
            document.getElementById('#save').setAttribute("disabled")
        } else if (gitUserNew.value === '') {
            alert('Coloque seu @UserName!')
            document.getElementById('#save').setAttribute("disabled")            
        } else if(picUserNew.value === '') {
            alert('Coloque o link do seu Avatar!')
            document.getElementById('#save').setAttribute("disabled")
        } else {
            nameUser.textContent = nameUserNew.value
            let gitUserNewReplaced = gitUserNew.value.replace('@', '')
            gitUser.href = `https://github.com/${gitUserNewReplaced}`
            gitUser.textContent = gitUserNew.value
            gitUserNew.value = ''
            picUser.src = picUserNew.value
            picUserNew.value = ''

        }
    },
}