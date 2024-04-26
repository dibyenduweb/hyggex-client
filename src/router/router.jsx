import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../root/MainLayout";
import Home from "../components/Home/Home";
import Flashcards from "../components/HomePages/menus/Flashcard/Flashcards";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{
      path:"/",
      element:<Home/>
    },
    {
      path:"flashcard",
     element:<Flashcards/>
    }

  ],
  },
]);
