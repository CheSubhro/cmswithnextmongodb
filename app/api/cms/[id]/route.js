import connectMongoDB from "@/libs/mongodb"
import Cms from "@/models/cms"
import { NextResponse } from "next/server"

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newContent: content, newAuthor: author, newCategory:category,newPub_date:pub_date, newMod_date:mod_date,newStatus:status,newAction:action } = await request.json();

    await connectMongoDB();
    await Cms.findByIdAndUpdate(id, { title,content,author,category,pub_date,mod_date,status,action });
    return NextResponse.json({ message: "Cms updated" }, { status: 200 });
  }
  
  export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const cms = await Cms.findOne({ _id: id });
    return NextResponse.json({ cms }, { status: 200 });
  }