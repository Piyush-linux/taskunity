UserButton , auth , useAuth


## Navbar COnditional rendering Login
```jsx
const { userId } = await auth()
const idAuth = !!userId // null > T/F

// Conditional Formatting
{ isAuth?  (<h1>Home + Profile</h1>) : (<h1>Home</h1>)  }

<UserButton afterSignOutUrl="/">
```


## Hide Clerk Branding 
- through Dashboard > setting


## Loading Provider for Clerk

```jsx
{ ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/next"

<ClerkProvider>
    <ClerkLoading>
        Loading...
    <ClerkLoading>
    <ClerkLoaded>
        HTML... Navbar,Content,Footer
    <ClerkLoaded>
</ClerkProvider>
```

## Cenetr Absokute

```html
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">   H E R O   </div>
```

## Feather Data of LogedIn User
- `{ currentUser, useUser } from "@clerk/nextjs"`
- https://clerk.com/docs/references/nextjs/current-user
- https://clerk.com/docs/reference/backend-api/tag/Users#operation/GetUser

## Forgot Password
- `{ isLoaded, signIn, setActive } = useSignIn();`
- `{ isSignedIn } = useAuth();`
- https://clerk.com/docs/custom-flows/forgot-password

## Custom Flow
- https://clerk.com/docs/custom-flows/overview
- Custom Login, Signout, Forgot Password