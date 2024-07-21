"use client"

import { UserProfile, useUser } from '@clerk/nextjs';
// import { currentUser } from '@clerk/nextjs/server';

const ProfilePage = () => {
  
  const { user } = useUser();
  console.log(user)
  // const user = await currentUser();
  
  // const imageUrl = user.imageUrl ;
  // const email = user.emailAddresses[0].emailAddress ;
  
  // console.log(imageUrl) // : id, imageUrl, emailAddresses.emailAddress
  
  return (
    <>
      {/* <UserProfile /> */}
      {/* { user.id } */}
    </>
  );
};

export default ProfilePage;