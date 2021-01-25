

export default function toText(node) { //move this to utilities later and import from there
    console.log(node)
    let tag = document.createElement('div')
    tag.innerHTML = node
    node = tag.innerText
    return node

} //end of toText