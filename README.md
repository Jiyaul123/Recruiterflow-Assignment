# Recruiterflow-Assignment

A simple React + Bootstrap dashboard to view and manage user data using a mock API. Includes functionalities for viewing, adding, and deleting users (handled locally).

---

## Getting Started

###  Prerequisites

- Node.js (v16 or higher)
- npm or yarn

###  Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jiyaul123/Recruiterflow-Assignment.git

2. **Install dependencies**
   npm install / yarn install
   
## Mock API Limitation

This project uses a **mock API** such as JSONPlaceholder for fetching user data. The `UserService.getAllUsers()` function makes a GET request to this public mock API.

### Limitations:

-   **GET (Read)**: Real API call — retrieves a static list of users from the mock API.
    
-   **POST (Add)** and **DELETE (Remove)**:
    
    -   These are **not sent to the server**.
        
    -   All changes (adding or deleting users) are handled **locally using React state**.
        
    -   **Refreshing the page** will reset all changes and reload the original data from the mock API.
        

### Add User

-   Triggered via a modal.
    
-   Adds the new user to the `userData` array in memory.
    

### Delete User

-   Prompts a confirmation modal.
    
-   Removes the user from `userData` in memory.
    

----------

## Features

-   View a list of users (name, email, phone, address, company, website)
    
-    Add user modal with form
    
-    Delete user with confirmation modal
    
-    Bootstrap styling for responsive layout
    
-   Framer Motion animations on card render
    
-    Modular components structure
    

----------

## Animations

Framer Motion is used to add smooth animation when rendering the list of user cards. Each card fades in and slides up slightly with a staggered delay for a polished look.

----------

##  Tech Stack

-    React
    
-   React Bootstrap
    
-    TypeScript
    
-    CSS + Bootstrap utility classes
    
-    Framer Motion for animation
    
-    Axios (inside `UserService`) for API calls

