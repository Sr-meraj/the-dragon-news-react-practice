const NewsLoader = async () => {
    const news = await fetch('http://localhost:5000/news')
    const data = await news.json()
    return data
}

export { NewsLoader }