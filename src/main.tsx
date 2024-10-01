import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.tsx'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import './index.css'
import ErrorPage from "./routes/ErrorPage.tsx";
import PlantPage from "./routes/PlantProfile.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "plants/:plantId",
        element: <PlantPage />
    },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
