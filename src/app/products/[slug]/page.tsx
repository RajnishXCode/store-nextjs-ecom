import React from 'react'

async function ProductPage({params}:{params: Promise<{slug:string}>}) {
    const { slug } = await params
  return (
    <div>ProductPage: {slug}</div>
  )
}

export default ProductPage;