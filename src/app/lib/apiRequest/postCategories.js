export default async function postCategories() {
    const res = await fetch('https://basic-blog.teamrabbil.com/api/post-categories',
        {
            method: 'GET',
        })
    const data = await res.json();
    return data;
}