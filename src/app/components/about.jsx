const AboutPage = () => {
  return (
    <div className='bg-gray-100 py-12'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold mb-4'>About Us</h1>
        <div className='mb-8'>
          <p className='text-lg leading-relaxed'>
            Welcome to our Blog! Here, we strive to provide you with a diverse
            collection of articles and insights that cater to a wide range of
            interests and passions. Our team is dedicated to curating and
            creating content that informs, entertains, and sparks curiosity.
          </p>
        </div>
        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>Our Mission</h2>
          <p className='text-lg leading-relaxed'>
            Our mission is to create a platform where readers can discover and
            explore captivating stories, informative articles, and
            thought-provoking pieces. We believe in the power of knowledge and
            the joy of learning, and we aim to share that with our readers
            through our carefully selected content.
          </p>
        </div>
        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>What We Offer</h2>
          <ul className='list-disc list-inside text-lg leading-relaxed pl-4'>
            <li>
              In-Depth Exploration: From the latest trends in science to the
              rich history of civilizations, we delve deep into various topics
              to provide you with a comprehensive understanding.
            </li>
            <li>
              Diverse Perspectives: Our articles cover a wide range of
              categories, ensuring that every reader can find something that
              resonates with them.
            </li>
            <li>
              Engaging Content: We prioritize creating content that engages and
              captivates our readers. Whether it is a personal story, a
              scientific discovery, or a timeless fable, our articles aim to
              keep you hooked.
            </li>
            <li>
              Quality Writing: We take pride in our writing quality. Each
              article is carefully crafted to provide clarity, accuracy, and a
              pleasant reading experience.
            </li>
          </ul>
        </div>
        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>Our Categories</h2>
          <ul className='list-disc list-inside text-lg leading-relaxed pl-4'>
            <li>
              Library: Immerse yourself in the world of literature, book
              reviews, and literary discussions.
            </li>
            <li>
              History: Explore the annals of history and discover intriguing
              tales from different eras.
            </li>
            <li>
              Sports: Stay updated with the latest sports news, analyses, and
              stories from the world of athletics.
            </li>
            <li>
              Bangladesh: Delve into the culture, heritage, and achievements of
              Bangladesh, a land rich in history and diversity.
            </li>
            <li>
              International: Gain insights into global events, politics, and
              stories that shape our world.
            </li>
            <li>
              Science: Uncover the wonders of the universe through scientific
              discoveries, advancements, and explorations.
            </li>
            <li>
              Biography: Journey through the lives of remarkable individuals who
              have made significant contributions to society and humanity.
            </li>
            <li>
              Fable: Immerse yourself in the enchanting world of fables, where
              moral lessons and timeless tales come to life.
            </li>
          </ul>
        </div>
        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>Connect With Us</h2>
          <p className='text-lg leading-relaxed'>
            We value your feedback and engagement. Feel free to leave comments,
            share your thoughts, and connect with us through our social media
            channels. Thank you for being a part of our blog community. Happy
            reading!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
