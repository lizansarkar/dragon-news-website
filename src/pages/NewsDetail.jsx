import React, { useEffect, useState } from "react";
import Navbar from "../reuseble-components/Navbar";
import Header from "../reuseble-components/Header";
import RightAside from "../home-layout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router-dom";

export default function NewsDetail() {
    const [news, setNews] = useState();

    const data = useLoaderData();
    const {id} = useParams();
    console.log(data, id)

    useEffect(() => {
       const newsDetails = data.find(singleNews => singleNews.id == id);
       setNews(newsDetails);
    },[data, id]);

    return (
        <div>
        <header>
            <Header></Header>
            <Navbar></Navbar>
        </header>
        <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
            <section className="col-span-9">
                <h2 className="font-bold mb-5">News Details</h2>
                <NewsDetailsCard news={news}></NewsDetailsCard>
            </section>
            <aside className="col-span-3">
                <RightAside></RightAside>
            </aside>
        </main>
        </div>
    );
}
