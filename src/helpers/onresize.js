const onResize = () => {
    const container = document.querySelector('.page-container')
    const containerWidth = container.clientWidth
    const containerHeight = container.clientHeight
    const pageOfTemplate = document.querySelector('.page')
    //scale to fit deleting the whitespace
    pageOfTemplate.style.transform = `scale(${(containerWidth/1024)})`
    const heightPage = pageOfTemplate.clientHeight
    
    container.style.height = `${heightPage*(containerWidth/1024)}px`
    
}
module.exports = onResize