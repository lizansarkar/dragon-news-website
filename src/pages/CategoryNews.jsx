import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

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
        console.log(filterNews);

        setCategoryNews(filterNews);
      }

    }, [data, id]);
  return (
    <div>CategoryNews : {categoryNews.length}</div>
  );
}