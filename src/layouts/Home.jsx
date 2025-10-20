import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from '../reuseble-components/Header'
import LetestNews from '../components/LetestNews'
import Navbar from '../reuseble-components/Navbar'
import LeftAside from '../home-layout/LeftAside'
import RightAside from '../home-layout/RightAside'
import Loader from '../reuseble-components/Loader'

export default function Home() {
    const {state} = useNavigation()
  return (
    <div>
        <header>
            <Header></Header>
            <section className='w-11/12 mx-auto my-3'>
                <LetestNews></LetestNews>
            </section>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
        </header>
        <main className='w-11/12 mx-auto my-3 grid grid-cols-12'>
            <aside className='col-span-3 h-fit sticky top-0'>
                <LeftAside></LeftAside>
            </aside>
            <section className='main-content col-span-6'>
                {state == "loading" ? <Loader></Loader> : <Outlet></Outlet>}
            </section>
            <aside className='col-span-3 h-fit sticky top-0'>
                <RightAside></RightAside>
            </aside>
        </main>
    </div>
  )
}
