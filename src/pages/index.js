import Rating from '@/Components/Rating'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home({products}) {
  return (
    <>
      <Head>
        <title>Hello Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" max-w-screen-xl mx-auto">
        <div className=' grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {
            products.length > 0 &&
             products.map(product=>{
              const { id, image, title, rating, price } = product
              return (
                <Link href={`/product/${id}`} key={id} className=" w-full h-auto">
                  <div className=' w-full h-[160px] relative'>
                    <Image src={image} alt="image" fill sizes='priority'  className=' w-full h-full object-contain' />
                  </div>
                  <h2 className=' text-base font-semibold mt-3 leading-[22px]'>{title.slice(0, 40)}...</h2>
                  <Rating rating={rating} />
                  <h2 className=' text-base font-bold text-gray-800'>${price}</h2>
                </Link>
               )
             })
          }
        </div>
      </main>
    </>
  )
}

export const getServerSideProps = async () =>{
  const response = await fetch('https://fakestoreapi.com/products')
  const products = await response.json()
  return {
    props: {
      products,
    }
  }
}