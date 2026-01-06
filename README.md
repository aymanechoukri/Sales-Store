# ShopEasy - E-Commerce Platform

A modern, responsive e-commerce web application built with React, featuring user authentication, shopping cart functionality, and product browsing.

## 🚀 Features

### Core Features
- **Product Catalog**: Browse a wide range of products with detailed views
- **Shopping Cart**: Add/remove items, adjust quantities, persistent cart storage
- **User Authentication**: Register and login functionality with local storage
- **Protected Routes**: Dashboard access only for authenticated users
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Smooth Animations**: Framer Motion animations for enhanced UX

### Additional Features
- Toast notifications for user feedback
- Loading states with custom spinner
- Lazy image loading
- Footer with company info and links
- Animated product cards

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: FontAwesome React
- **Notifications**: React Toastify
- **HTTP Client**: Axios

## 📦 Project Structure

```
e-commerce/
├── public/
│   ├── Data/
│   │   └── Products.json     # Product data
│   └── image/                # Static images
├── src/
│   ├── Components/           # Reusable components
│   │   ├── CardProduct.jsx   # Product card component
│   │   ├── CartPage.jsx      # Shopping cart page
│   │   ├── Content.jsx       # Home page content
│   │   ├── Dashboard.jsx     # User dashboard
│   │   ├── Footer.jsx        # Footer component
│   │   ├── Headers.jsx       # Navigation header
│   │   ├── Loading.jsx       # Loading spinner
│   │   └── Products.jsx      # Product detail page
│   ├── Context/              # React Context providers
│   │   ├── AuthContext.jsx   # Authentication context
│   │   ├── AuthProvider.jsx  # Auth provider component
│   │   ├── CartContext.jsx   # Cart context
│   │   └── CartProvider.jsx  # Cart provider component
│   ├── Pages/                # Page components
│   │   ├── Auth/             # Authentication pages
│   │   │   ├── Login.jsx     # Login page
│   │   │   ├── ProductCart.jsx # Protected cart page
│   │   │   ├── ProtectedRoute.jsx # Route protection
│   │   │   └── Register.jsx  # Registration page
│   │   └── Home.jsx          # Home page
│   ├── App.jsx               # Main app component
│   ├── index.css             # Global styles
│   └── main.jsx              # App entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd e-commerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📱 Pages

| Route | Description | Access |
|-------|-------------|--------|
| `/` | Home page with products | Public |
| `/product/:id` | Product detail page | Public |
| `/cart` | Shopping cart | Protected |
| `/register` | User registration | Guest |
| `/login` | User login | Guest |
| `/dashboard` | User dashboard | Protected |

## 🎨 Key Components

### Context Providers

#### CartProvider
Manages shopping cart state with localStorage persistence:
- `addCart(item)`: Add item to cart
- `removeCart(id)`: Remove item from cart
- `incrementQuantity(id)`: Increase item quantity
- `decrementQuantity(id)`: Decrease item quantity

#### AuthProvider
Manages user authentication state:
- `user`: Current user data
- `setUser(user)`: Update user data
- `removeUser()`: Clear user data (logout)

### Protected Routes
The application uses `ProtectedRoute` to secure routes that require authentication. Users attempting to access protected routes without being logged in will be redirected to the login page.

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=your-api-url
```

### Tailwind CSS
Configuration is available in `tailwind.config.js` for customizing colors, fonts, and other design tokens.

## 📄 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [FontAwesome](https://fontawesome.com/)

