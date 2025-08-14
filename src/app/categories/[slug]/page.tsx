import React from 'react'

async function CategoryPage({params}:{params: Promise<{slug:string}>}) {
    const { slug } = await params
  return (
    <div>CategoryPage: {slug}</div>
  )
}

export default CategoryPage;