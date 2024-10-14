export default async function Page() {
    let data = await fetch('https://api.vercel.app/blog');
    let json = await data.json();
    return(

        <ul>
            {post.map((post) => (
                <li key={post.id} className="mt-2 ml-4">{post.title}</li>
            ))}
        </ul>
    )
}