export function calculateReadingTime(content) {


let text = ""

content.forEach(block => {

if(block.type === "section"){

if(block.heading){
text += " " + block.heading
}

block.content?.forEach(item => {

if(item.type === "paragraph" || item.type === "subheading"){
text += " " + item.text
}

if(item.type === "bullet"){
item.items.forEach(point=>{
text += " " + point
})
}

})

}

if(block.type === "quote"){
text += " " + block.text
}

})

const words = text.trim().split(/\s+/).filter(Boolean).length

const minutes = Math.max(1, Math.ceil(words / 200))

return `${minutes} min read`

}