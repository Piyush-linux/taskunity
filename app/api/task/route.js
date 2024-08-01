import { Task } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET (request) {
  try {
    connectToDb();
    let data  = await request;
    const url = new URL(data.url)
    const userId = url.searchParams.get("userId")
    // console.log('params')
    // console.log(userId)
    // connectToDb();
    const task = await Task.find({userId:userId});
    // console.log(task)
    return NextResponse.json(task);
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
    const task = await Task.create(data);
    return NextResponse.json(task);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};