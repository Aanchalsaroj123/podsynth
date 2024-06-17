# PodSynth

PodSynth is a modern podcast application built using Next.js, Shadcn, Clerk for authentication, Convex for data management, and OpenAI for enhanced features.


## Features
- **User Authentication**: Secure user authentication using Clerk.
- **Data Management**: Efficient data handling and storage with Convex.
- **AI Integration**: Enhanced features powered by OpenAI.
- **Responsive Design**: Sleek and responsive UI using Shadcn.
- **Podcast Management**: Create, edit, and manage your podcasts with ease.

## Tech Stack
- **Frontend**: [Next.js](https://nextjs.org/)
- **UI Components**: [Shadcn](https://shadcn.dev/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Data Management**: [Convex](https://convex.dev/)
- **AI Features**: [OpenAI](https://openai.com/)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/podsynth.git
    cd podsynth
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Configuration
1. Create a `.env.local` file in the root directory and add your environment variables:
    ```env
    NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
    CLERK_API_KEY=your_clerk_api_key
    CONVEX_URL=your_convex_url
    OPENAI_API_KEY=your_openai_api_key
    ```

### Running the App
1. Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.
