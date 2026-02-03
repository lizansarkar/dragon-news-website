import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import NewsCard from '../components/NewsCard';

export default function CategoryNews() {
    const {id} = useParams();
    
    const data = useLoaderData();
    // console.log(id, data);

    const [categoryNews, setCategoryNews] = useState([]);


    useEffect(() => {

      if(id == "0") {
        setCategoryNews(data);
        return;
      }
      else if(id == "1"){
        const todayNews = data.filter((news) => news.others.is_today_pick);
        setCategoryNews(todayNews);
      }
      else {
        const filterNews = data.filter(news => news.category_id == id);
        // console.log(filterNews);

        setCategoryNews(filterNews);
      }

    }, [data, id]);
  return (
    <div>
      <h4 className='font-bold py-5 text-center'>
        CategoryNews : <span className='text-secondary'>{categoryNews.length}</span>
      </h4>
      <div className='grid grid-cols-1 gap-5'>
        {
          categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
}