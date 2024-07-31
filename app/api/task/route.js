import { Task } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET (request) {
  try {
    connectToDb();
    let {params} = await request;
    // console.log(params)
    // connectToDb();
    const task = await Task.find();
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