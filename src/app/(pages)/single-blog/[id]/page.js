import postDetails from "@/app/lib/apiRequest/postDetails";

export default async function singleBlog({ params }) {
    const id = parseInt(params.id);

    const fetchPostDetails = async () => {
        try {
            const post = await postDetails(id);
            const postData = post.postDetails;

            if (postData === null) {
                return null;
            }
            return postData;

        } catch (error) {
            console.error('Error fetching post details:', error);
            return null;
        }
    };

    const postData = await fetchPostDetails();

    if (postData == null) {
        return <div>The details page could not be found</div>;
    }
    return (
        <div>
            <div className='my-7 mx-7'>
                <p className='text-lg font-bold py-2'>{postData.title}</p>
                <div className='mt-4'>
                    <img src={postData.img} />
                </div>
                <div className='py-4 flex justify-center text-justify'>
                    <p>
                        {postData.content}
                    </p>
                </div>
            </div>
        </div >
    );
}