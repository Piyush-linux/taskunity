// users/{user_id}/metadata' | "role": "shopper"
import { NextResponse } from 'next/server';
import { clerkClient } from "@clerk/nextjs/server";
// import { useRouter } from "next/navigation";

// UserData: username, role
export async function POST(request) {
  try {
    const { userId, username, role } = await request.json();
    // console.log(userId)  
    const data = await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role,
        username
      }
    })
    if(data.publicMetadata.role == 'admin'){
      router.push('/onboard');
      return NextResponse.redirect('/admin') 
    }else if(data.publicMetadata.role == 'user'){
      return NextResponse.redirect('/user') 
    }
    
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: err });
  }
  // user ID : user_2jMtk05OJ2QF0lDzZvVNv0591ya
  // return NextResponse.json('--- res');
  
}