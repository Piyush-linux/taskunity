# Roadmap

- [x] Setup: next , tailwind, shadcn/ui, lucid-react-icon
- [x] UI Pages : @sitemap
- [ ] Auth : zudstand, clerk
- [ ] UI : ColorScheme & Logo

# QnA
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
    - id
    - name
    - status @enum("pending","done")
    - createdAt
    - assigned @relation("UserID")
```

### Resources
- https://github.com/ajayahara/nextjs-14-blog/blob/master/src/app/about/page.tsx
- https://dev.to/musebe/implementing-role-based-access-control-in-nextjs-app-router-using-clerk-organizations-566g
- https://github.com/bradtraversy/clerk-app/
