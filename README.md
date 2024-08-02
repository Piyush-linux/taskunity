# 🌸 Taskunity

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

## Techstack
- **Next.js 14:** The React framework that provides an efficient and scalable development experience for modern web applications.

- **Tailwind CSS:** A first-class utility-first CSS framework for web applications, simplifying styling with a class-based approach.

- **Shad/cn:** A pre-built UI components designed to help developers quickly build user interfaces

- **MongoDB:** A widely used NoSQL database for flexible and scalable data storage.

- **Zustand:** A minimalist state management library for React, providing a straightforward way to manage application state.
 

# Roadmap

- [x] Setup: next, tailwind, shadcn/ui, lucid-react-icon
- [x] UI Pages : @sitemap , ColorScheme & Logo
- [ ] CRUD 
    - [x] NextSJ with MongoDB using mongoose
    - [ ] Task CRUD
- [x] Featching /API: Render Blogs from MongoDB with SWR
- [ ] Auth: clerk (Custom Login, Custom Signup, Custom Forget Password, public route: /blog /sign-up /sign-in / )
- [x] OnBoard : update User Meatadata : role, username
- [ ] NextSJ Server Actions
- [ ] NextJS Nested Layout.jsx
- [x] if alreday authentixated then dont allow "/sign-in  /sign-up"
- [ ] Zustand
    - [x] Add Task Modal Popup State
    - [x] Task State
    - [ ] User Info ( Admin / User )
- [ ] routing of auth , redirect , loader animation of clerk, Layout, Clerk metadata
- [x] [Loading UI](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming) 
- [ ] React/NextConcepts : Context API, memo, hooks
- [x] Task CRUD API 
- [x] Clerk Organization Invitation
- [ ] React-Query
    - [ ] Sample PJ
- [ ] Update Task
- [ ] Schema : add (mail)

# QnA
1. Clerk Role Assign meta Data : role-( Admin / User ) 
2. How to use clerk with cli or Postman for Auth
3. what is `(auth)` dir : ignore 
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


```yml
Admin
    - id @id
    - username
    - email
    - 
    - tasks @relation Task_id

User
    - id @id
    - org @relation Org_id

    - tasks @relation Task[] )

Task
    - todo String
    - status @enum("pending","done")
    - createdAt
    - assigned @relation("UserID")
```


## API

```http
http

```


### Resources
- https://github.com/ajayahara/nextjs-14-blog
- https://github.com/safak/next14-tutorial
- https://github.com/clerk/clerk-nextjs-examples
- https://dev.to/musebe/implementing-role-based-access-control-in-nextjs-app-router-using-clerk-organizations-566g
- https://github.com/bradtraversy/clerk-app/
- https://clerk.com/docs/references/nextjs/overview#client-side-helpers
- https://github.com/Shreyas-29/nextjs-clerk-auth-starter/
- https://github.com/boybizarre/budget-tracker.git
- https://github.com/DerikDantas/nextjs-todo.git

## Learning
- `use client` under /Compoenent
- `use server` under /app 
