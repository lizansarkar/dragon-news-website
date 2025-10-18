import React, { use } from 'react'
import { NavLink } from 'react-router-dom';

const categoryPromise = fetch("/categories.json").then(res => res.json())
console.log(categoryPromise);

export default function Categories() {
    const categories = use(categoryPromise);

  return (
    <div>
        <h2 className='font-bold py-5 text-center'>All Categories {categories.length}</h2>
        <div className='grid grid-cols-1 gap-5'>
            {
                categories.map(category => <NavLink key={category.id} to={`/category/${category.id}`} className="btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent">{category.name}</NavLink>)
            }
        </div>
    </div>
  )
}
