# Taskunity

> Efficient Task Management for Your Team

TaskUnity is a powerful web application designed to streamline task management and enhance productivity within your organization. With TaskUnity, administrators can effortlessly assign tasks to users, ensuring that everyone knows their responsibilities and deadlines.

## Key Features:
- __Task Assignment__ : Admins can create and assign tasks to specific users, ensuring clear delegation and accountability.
- __Collaboration__ : Facilitate team collaboration with comment threads and file attachments on each task.


## Setup

```sh
npm i
cp .example.env .env # add require ENV
npm run dev
```

# Roadmap

- [x] Setup: next, tailwind, shadcn/ui, lucid-react-icon
- [x] UI Pages : @sitemap , ColorScheme & Logo
- [x] CRUD: NextSJ with MongoDB
- [x] Featching /API: Render Blogs from MongoDB with SWR
- [ ] Auth: clerk (Profile, Custom Lofin, Custom Signup, Custom Forget Password, public route: /blog /sign-up /sign-in / )
- [ ] NextJS Nested Layout.jsx


# QnA
1. Clerk Role Assign meta Data : role-( Admin / User ) 
2. How to use clerk with cli or Postman for Auth
3. what is `(auth)` dir
- Implementing Role-Based Access Control in Next.js , Safeguarding User Role-Based Private Routes in Next.js 13 or 14 app router: A Step-by-Step Guide
- Difference betwwen `.env` / `.env.local` / `.env.example`
- Customization Clerk UI : Auth , Profile


## Sitemap

```yml
/home
(Admin)
    / 
(User)
    / 
/blogs
    /blog/:slug
/profile
404.js
```

## Schema

```prisma
Admin
    - id @id
    - tasks @relation( Task[] )

User
    - id @id
    - tasks @relation( Task[] )

Task
    - title String
    - status @enum("pending","done")
    - createdAt
    - assigned @relation("UserID")
```


## API

```http
http

```


### Resources
- https://github.com/ajayahara/nextjs-14-blog/blob/master/src/app/about/page.tsx
- https://dev.to/musebe/implementing-role-based-access-control-in-nextjs-app-router-using-clerk-organizations-566g
- https://github.com/bradtraversy/clerk-app/
