const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const contents = $$('.tab-pane')
const line = $('.tabs .line')

let tabActive = $('.tab-item.active')
line.style.width = tabActive.offsetWidth + 'px'
line.style.left = tabActive.offsetLeft + 'px'

tabs.forEach((tab, index) => {
    const currentContent = contents[index]
    tab.onclick = function () {
        $('.tab-item.active').classList.remove('active')
        this.classList.add('active')
        $('.tab-pane.active').classList.remove('active')
        currentContent.classList.add('active')
        line.style.width = this.offsetWidth + 'px'
        line.style.left = this.offsetLeft + 'px'
    }

})
