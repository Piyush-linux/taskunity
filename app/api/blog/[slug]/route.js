import { Blog } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

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

export async function POST(request, { params }) {
  const { slug } = params;

  try {
    connectToDb();

    const blog = await Blog.findOne({ slug });
    return NextResponse.json(blog);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export async function DELETE(request, { params }) {
  const { slug } = params;

  try {
    connectToDb();
    await Blog.deleteOne({ slug });
    return NextResponse.json("Post deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
};
