//dragstart:当用户开始拖动一个元素或者一个选择文本的时候 dragstart 事件就会触发。
//dragend:拖放事件在拖放操作结束时触发 (通过释放鼠标按钮或单击 escape 键)。
//dragover:当元素或者选择的文本被拖拽到一个有效的放置目标上时，触发 dragover 事件（每几百毫秒触发一次）。
//dragenter:当拖动的元素或被选择的文本进入有效的放置目标时， dragenter 事件被触发。
//dragleave:当一个被拖动的元素或者被选择的文本离开一个有效的拖放目标时，将会触发dragleave 事件。
//drop:当一个元素或是选中的文字被拖拽释放到一个有效的释放目标位置时，drop 事件被抛出。这个事件在可被放置元素的节点上触发。
const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    this.className += ' hold' 
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}