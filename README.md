# Product Listing App

A modern, responsive product listing application built with Next.js 15, featuring full CRUD operations, real-time search, and category filtering.

## 🚀 Features

- **Product Management**: Full CRUD operations (Create, Read, Update, Delete)
- **Real-time Search**: Debounced search functionality across product names and descriptions
- **Category Filtering**: Filter products by category with dropdown selection
- **Responsive Design**: Mobile-first design that works on all screen sizes
- **Individual Product Pages**: Detailed product view with delete functionality
- **Loading States**: Skeleton loaders and loading indicators for better UX
- **Error Handling**: Comprehensive error handling with user feedback
- **Toast Notifications**: Success/error messages for user actions

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 18** - UI library with Server Components
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework for styling
- **shadcn/ui** - Modern UI component library
- **Lucide React** - Beautiful icon library

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **RESTful Architecture** - Standard HTTP methods (GET, POST, DELETE)
- **In-memory Data Store** - Simple data persistence (easily replaceable with database)

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **Tailwind CSS** - Responsive design utilities

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd product-listing-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

### 4. Open Your Browser

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
product-listing-app/
├── app/                          # Next.js App Router directory
│   ├── api/                      # API routes
│   │   └── products/             # Product API endpoints
│   │       ├── route.ts          # GET /api/products, POST /api/products
│   │       └── [id]/
│   │           └── route.ts      # GET, DELETE /api/products/[id]
│   ├── products/                 # Product pages
│   │   ├── page.tsx              # Product listing page
│   │   ├── loading.tsx           # Loading component
│   │   └── [id]/
│   │       └── page.tsx          # Individual product page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── loading.tsx               # Global loading component
│   └── not-found.tsx             # 404 page
├── components/                   # Reusable components
│   ├── ui/                       # shadcn/ui components
│   ├── add-product-form.tsx      # Product creation form
│   ├── delete-product-button.tsx # Product deletion component
│   ├── navigation.tsx            # Navigation bar
│   ├── product-card.tsx          # Product display card
│   └── search-filter.tsx         # Search and filter component
├── hooks/                        # Custom React hooks
│   ├── use-debounce.ts           # Debounce hook for search
│   └── use-toast.ts              # Toast notification hook
├── lib/                          # Utility functions and data
│   ├── products-data.ts          # Mock data and data operations
│   ├── types.ts                  # TypeScript type definitions
│   └── utils.ts                  # Utility functions
└── public/                       # Static assets
```

## 🔌 API Endpoints

### Products API

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| GET | `/api/products` | Get all products | `?search=term&category=category` |
| POST | `/api/products` | Create new product | Body: `{name, price, imageUrl, category, description}` |
| GET | `/api/products/[id]` | Get single product | Path: `id` |
| DELETE | `/api/products/[id]` | Delete product | Path: `id` |

### Example API Usage

#### Get All Products
```bash
curl http://localhost:3000/api/products
```

#### Search Products
```bash
curl "http://localhost:3000/api/products?search=headphones&category=electronics"
```

#### Create Product
```bash
curl -X POST http://localhost:3000/api/products \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "New Product",
    "price": 99.99,
    "imageUrl": "/placeholder.svg?height=300&width=300",
    "category": "Electronics",
    "description": "Product description"
  }'
```

#### Delete Product
```bash
curl -X DELETE http://localhost:3000/api/products/1
```

## 🎨 Key Components

### ProductCard
Displays individual product information with image, name, price, and category.

### SearchFilter
Provides real-time search and category filtering functionality with debounced input.

### AddProductForm
Modal form for creating new products with validation and error handling.

### DeleteProductButton
Confirmation dialog for safely deleting products.

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Mobile (< 640px)**: Single column layout
- **Tablet (640px - 1024px)**: 2-3 column grid
- **Desktop (> 1024px)**: 4 column grid

## 🔍 Search Functionality

- **Real-time Search**: Results update as you type (debounced for performance)
- **Multi-field Search**: Searches across product names, descriptions, and categories
- **Case-insensitive**: Search works regardless of capitalization
- **Combined Filters**: Search and category filters work together

## 📝 Notes and Assumptions

### Data Storage
- **In-Memory Storage**: Currently uses an in-memory array for data storage
- **Data Persistence**: Data resets when the server restarts
- **Production Ready**: Easily replaceable with a real database (PostgreSQL, MongoDB, etc.)

### Image Handling
- **Placeholder Images**: Uses placeholder.svg for demo purposes
- **Image URLs**: Accepts any valid image URL
- **Future Enhancement**: Could be extended with image upload functionality

### Authentication
- **No Authentication**: Currently no user authentication system
- **Public Access**: All API endpoints are publicly accessible
- **Future Enhancement**: Can be extended with NextAuth.js or similar

### Performance Considerations
- **Debounced Search**: 300ms debounce to prevent excessive API calls
- **Server Components**: Uses React Server Components for better performance
- **Image Optimization**: Next.js Image component for optimized loading

### Browser Support
- **Modern Browsers**: Supports all modern browsers (Chrome, Firefox, Safari, Edge)
- **ES6\+**: Uses modern JavaScript features
- **Mobile Browsers**: Fully responsive and mobile-friendly

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Heroku
- AWS
- Google Cloud Platform

## 🔮 Future Enhancements

- **Database Integration**: Connect to PostgreSQL, MongoDB, or Supabase
- **User Authentication**: Add user login/signup functionality
- **Shopping Cart**: Implement cart functionality
- **Payment Integration**: Add Stripe or PayPal integration
- **Image Upload**: Allow users to upload product images
- **Admin Dashboard**: Create admin interface for product management
- **Product Reviews**: Add review and rating system
- **Inventory Management**: Track product stock levels

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Include steps to reproduce the problem
4. Provide your environment details (Node.js version, OS, etc.)

---

**Happy coding! 🎉**
