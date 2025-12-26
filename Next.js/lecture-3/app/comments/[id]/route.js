import { comments } from "../data";

// GET particular comment by id
export async function GET(request, {params}){
    const {id} = await params;
    const comment = comments.find((comment)=>comment.id===parseInt(id));
    return Response.json(comment);
}

// PATCH particular comment by id
export async function PATCH(request, {params}){
    const {id} = await params;
    const body = await request.json();
    const {text} = body;
    const index = comments.findIndex((comment)=>comment.id===parseInt(id));
    comments[index].text = text;
    return Response.json(comments[index]);
}

// DELETE particular comment by id
export async function DELETE(request,{params}){
    const {id} = await params;
    const index = comments.findIndex((comment)=>comment.id===parseInt(id));
    const deleteComment = comments[index];
    comments.splice(index,1);
    return Response.json(deleteComment);
}