import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../newsCard/NewsCard';

const Category = () => {
    const loadedcatNews = useLoaderData()
    const [catNews, setCatNews] = useState(loadedcatNews);
    const [showNews, setShowNews] = useState(3)
    useEffect(() => {
        setCatNews(loadedcatNews);
    }, [loadedcatNews]);

    return (
        <div>
            <h4>
                Category: {catNews.length}
            </h4>
            {
                catNews.slice(0, showNews).map(n => <NewsCard key={n._id} news={n} />)
            }
            {
                loadedcatNews.length > 3 &&
                <Button className="btn-primary"
                    onClick={() => {
                        setShowNews(
                            showNews < loadedcatNews.length ? showNews + 3 : 3
                        )
                    }}>
                    {showNews < loadedcatNews.length ? 'Load More' : 'Show Less'}
                </Button>
            }
        </div>
    );
};

export default Category;