import { NextResponse } from "next/server";
import prisma from "../../../lib/prismaClient";

export async function GET(req: Request) {
    // 全件取得する ※件数が増えてきた場合はページネーションの実装等行う。 
    const allBBSPosts = await prisma.post.findMany();
    return NextResponse.json(allBBSPosts);
}

// export async function POST(req: Request) {
//     const {username, title, content} = await req.json();
//     const post = await prisma.post.create({
//         data: {
//             username,
//             title,
//             content,
//         },
//     });
//     return NextResponse.json(post);
// }