import { Blog } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";
// import { auth } from "@clerk/nextjs/server";

export async function GET(request, { params }) {
  const { slug } = params;

  try {
    connectToDb();
    // const blog = await Post.findOne({ slug });
    const blog = await Blog.findOne();
    return NextResponse.json(blog);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};



export async function DELETE(request, { params }) {
  // If there is no signed in user, this will return a 404 error
  // auth().protect();
  const { slug } = params;

  try {
    connectToDb();
    const blog = await Blog.findByIdAndDelete(slug);
    return NextResponse.json(blog);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
};
