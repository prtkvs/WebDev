import { comments } from "./data";


// GET REQUEST
export async function GET(){
    return Response.json(comments);
}

// POST REQUEST
export async function POST(request){
    const comment = await request.json();
    const newComment = {
        id: comments.length+1,
        text: comment.text
    };
    comments.push(newComment);
    return new Response(JSON.stringify(newComment),{
        headers: { 'Content-Type': 'application/json' },
        status: 201
    });
}