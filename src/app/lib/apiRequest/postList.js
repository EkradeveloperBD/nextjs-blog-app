export default async function postList(id) {

    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-list/${id}`,
        {
            method: 'GET',
        })

    const data = await res.json();
    return data;
}