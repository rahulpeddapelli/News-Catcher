import React, { useState, useEffect } from 'react'
import NeweItem from './NewsItem'
import Loading from './loading'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



export default function NewsContainer(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const  NewsForCountry = props.country;


  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${NewsForCountry}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${1}&pageSize=${props.pageSize}`;


    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalArticles(parsedData.totalResults)

    props.setProgress(100);

  }




  useEffect(() => {
    document.title = `NewsCatcher-${capitalizeFirstLetter(props.category)}`;
    updateNews();
    // eslint-disable-next-line
  }, [])


  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${NewsForCountry}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page + 1}&pageSize=${props.pageSize}`;

    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json()

    setArticles(articles.concat(parsedData.articles))
    setTotalArticles(parsedData.totalResults)

  };

  
  //& handling initial news loadiing after country change
  useEffect(()=>{updateNews()},[props.country]);




  return (
    <>
      <div className="container fixed-top" style={{ zIndex: "1", backgroundColor: "rgb(224, 221, 221)", color: "black" }}>

          <div>
            <h4 className='text-center' style={{ marginTop: "70px", marginBottom: "10px" }}>News Catcher - Top {capitalizeFirstLetter(props.category)} Headlines From {props.countryName}</h4>
          </div>      
    
      </div>


      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length !== totalArticles}
        loader={<Loading />}
      >
        <div className="container" style={{ marginTop: "120px" }} >
          <div className="row my-2">
            {articles.map((el) => {
              return (
                <div className="col-md-3" key={el.url}>
                  <NeweItem title={el.title} descript={el.description} url={el.url} imgurl={el.urlToImage} date={new Date(el.publishedAt).toGMTString()} author={el.author} />
                </div>
              )
            })}
          </div>
        </div>
      </InfiniteScroll>

    </>

  )


}



NewsContainer.defaultProps = {
  pageSize: 8,
  country: "in",
  countryName : "India",
  category: "general",
  startingPage: 1
}

NewsContainer.PropsTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  countryName: PropTypes.string,
  category: PropTypes.string,
  startingPage: PropTypes.number
}