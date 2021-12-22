import React, { useEffect,useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [pageno, setPageno] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const fetchData = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
        props.setProgress(40); 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(70);
        let passeddata = await data.json()
        setArticles(passeddata.articles)
        setTotalResults(passeddata.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect( () => {
        document.title = `${props.category} - News App`
        fetchData();    
    // eslint-disable-next-line 
    }, []) 

    

  

    const fetchMoreData = async () => {
        
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${pageno + 1}&pageSize=${props.pageSize}`;
        setPageno(pageno+1)
        // setLoading(true)
        let data = await fetch(url);
        let passeddata = await data.json()
        setArticles(articles.concat(passeddata.articles))
        setTotalResults(passeddata.totalResults)
        // setLoading(false)

    }


        return (
            <div>

                <h2 className='my-3 text-center'>My News App</h2>
                <p className='text-center'>{loading && <Spinner />}</p>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                let total_count = 200 - (element.title.length)
                                return <div className="col-md-4 my-1" key={element.url}>
                                    <Newsitem title={element.title ? element.title : "Something"} description={element.description ? element.description.slice(0, total_count) + "..." : "Something"} imageUrl={element.urlToImage ? element.urlToImage : "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0725%2Fr574762_1296x729_16%2D9.jpg"} newsUrl={element.url} pub={element.publishedAt.slice(0, 10)} author={element.author ? element.author : "Unknown"} />
                                </div>

                            })}

                        </div>
                    </div>
                </InfiniteScroll>
            </div>

        )
    
}
News.defaultProps = {
    pageSize: '6',
    category: 'science'
}

News.propTypes = {
    pageSize: PropTypes.string,
    category: PropTypes.string
}
export default News
