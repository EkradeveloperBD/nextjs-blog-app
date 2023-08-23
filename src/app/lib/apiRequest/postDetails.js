export default async function postDetails(id) {
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`, {
        method: 'GET'
    })

    const data = await res.json();
    return data;
}