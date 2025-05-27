export default async function Page({ params }) {
    let languages =["python","c#","cpp","java"]
    if(languages.includes(params.slug)){
        return <div>My Post: {params.slug}</div>
    }
    else{
        return <div>Post not found</div>
    }
//   const { slug } = await params
//   return <div>My Post: {slug}</div>
}