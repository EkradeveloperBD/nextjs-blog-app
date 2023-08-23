import Link from "next/link";

export default function Menu() {
  return (
    <div>
      <div className='container mx-auto px-4 py-2 flex justify-between items-center'>
        <div className='flex space-x-6'>
          <Link href={"/home"}>
            <div className='text-white hover:text-gray-300 cursor-pointer'>
              Home
            </div>
          </Link>
          <Link href={"/about"}>
            <div className='text-white hover:text-gray-300 cursor-pointer'>
              About
            </div>
          </Link>
          <Link href={"/blog"}>
            <div className='text-white hover:text-gray-300 cursor-pointer'>
              Blog
            </div>
          </Link>
          {/* <Link href={"/single-blog/53"}>
            <div className='text-white hover:text-gray-300 cursor-pointer'>
              Single-Blog
            </div>
          </Link> */}
          <Link href={"/contact"}>
            <div className='text-white hover:text-gray-300 cursor-pointer'>
              Contact
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
