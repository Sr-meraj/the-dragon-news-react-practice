import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../newsCard/NewsCard";

const News = () => {
    const LoadedNews = useLoaderData();
    const [news, setNews] = useState([])
    const [showNews, setShowNews] = useState(3)

    useEffect(() => {
        setNews(LoadedNews)
    }, [LoadedNews])

    return (
        <div className="pb-2">
            {
                news.slice(0, showNews).map(item => <NewsCard key={item._id} news={item} />)
            }
            <div className="text-center">

                <Button className="btn-primary"
                    onClick={() => {
                        setShowNews(
                            showNews < 26 ? showNews + 3 : showNews - 23
                        )
                    }}>
                    {showNews < 26 ? 'Load More' : 'Show Less'}
                </Button>
            </div>
        </div>
    );
};

export default News;