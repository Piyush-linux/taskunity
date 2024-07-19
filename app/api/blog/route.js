import { Blog } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET (request) {
  try {
    connectToDb();

    const blogs = await Blog.find();
    return NextResponse.json(blogs);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export async function POST(request) {
  // If there is no signed in user, this will return a 404 error
  // auth().protect();
  // const { slug } = params;
  let data = await request.json()
  try {
    connectToDb();

    const blog = await Blog.create(data);
    return NextResponse.json(blog);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};