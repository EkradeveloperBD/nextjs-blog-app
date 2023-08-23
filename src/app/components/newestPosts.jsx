import Link from "next/link";
import postNewest from "../lib/apiRequest/postNewest";

export default async function NewestPosts() {
  const posts = await postNewest();

  return (
    <div>
      <div className='my-6 mx-4'>
        <div className='flex'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {posts.map((post) => (
              <div
                key={post.id}
                className='shadow-lg hover:scale-95 transition delay-100'
              >
                <Link href={`/single-blog/${post.id}`}>
                  <img src={post.img} width={350} />
                  <p className='font-bold py-2'>{post.title}</p>
                  <p className='mt-1'>{post.short}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
