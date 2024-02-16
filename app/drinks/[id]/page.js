// import React from 'react'
// In Next.js, it is a convention to use [id] as part of the file name
//显示component中的Drinkslist
import Link from 'next/link';
import Image from 'next/image';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import drinkImg from './drinImg.jpg'//因为有些没有图片API中
const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch drinks')
  }
  const data = await res.json();
  return data
}

const SingleDrankPage = async ({ params }) => {
  // console.log(params.id)
  const data1 = await getSingleDrink(params.id)
  const title = data1?.drinks[0]?.strDrink
  const imgSrc = data1?.drinks[0]?.strDrinkThumb
  // console.log(title,imgSrc)
  // console.log(data1)
  return (

    < div >
      <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>Back to drink</Link>
      {/* 使用 Image 组件来显示图片 */}
      {/* <img src={imgSrc} /> */}
      {/* <Image src={imgSrc ?imgSrc:drinkImg} className='w-48 h-48 rounded' alt='' /> */}
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className='w-48 h-48 rounded-lg shadow-lg
        priority' alt='{title}' />
      <h1 className='text-4xl mb-8'>{title}</h1>
    </div >
  )
}

export default SingleDrankPage