export default async function postNewest() {
    const res = await fetch('https://basic-blog.teamrabbil.com/api/post-newest',
        {
            method: 'GET',
        })
    const posts = res.json();
    return posts;
}