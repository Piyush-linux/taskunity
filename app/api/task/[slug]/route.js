import { Task } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";
// import { auth } from "@clerk/nextjs/server";

export async function GET(request, { params }) {
  const { slug } = params;

  try {
    connectToDb();
    const task = await Task.findById(slug);
    // const task = await Task.findOne();
    return NextResponse.json(task);
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
    const task = await Task.findByIdAndDelete(slug);
    return NextResponse.json(task);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
};
