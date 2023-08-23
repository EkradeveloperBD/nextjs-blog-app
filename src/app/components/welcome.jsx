import React from "react";
import Link from "next/link";

export default function Welcome() {
  return (
    <section className='bg-blue-400 p-2'>
      <div className='container mx-3'>
        <div className='flex justify-center items-center'>
          <h1 className='text-3xl text-white font-bold mb-4'>Welcome to Our Blog</h1>
        </div>

        <div className='text-lg text-white text-justify w-11/12'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        </div>
        <Link href={"/about"}>
          <p className='py-3 text-lg text-red-200 hover:underline underline-offset-4 hover:text-green-400'>
            Read More Our About Us.
          </p>
        </Link>
      </div>
    </section>
  );
}
