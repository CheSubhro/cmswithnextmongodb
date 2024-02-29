import connectMongoDB from "@/libs/mongodb"
import Cms from "@/models/cms"
import { NextResponse } from "next/server"

export async function POST(request){
    const {title,content,author,category,pub_date,mod_date,status,action} = await request.json();
    await connectMongoDB();
    await Cms.create({title,content,author,category,pub_date,mod_date,status,action});
    return NextResponse.json({message:"Cms Page Created"},{status:201})
}

export async function GET(){
    await connectMongoDB();
    const cms = await Cms.find();
    return NextResponse.json({ cms });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Cms.findByIdAndDelete(id);
    return NextResponse.json({ message: "Cms deleted" }, { status: 200 });
}