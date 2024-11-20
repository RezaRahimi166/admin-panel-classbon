import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "./features/identity/components/login";
import Register, {
  registerAction,
} from "./features/identity/components/register";
import IdentityLayout from "./layouts/identity-layout";
import Courses, { coursesLoader } from "./pages/courses";
import MainLayout from "./layouts/mainLayout/main-layout";
import CourseCategories from "./pages/course-categories";
import CourseDetails, {
  courseDetailLoader,
} from "./features/coursers/components/course-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <Courses />,
        index: true,
        loader: coursesLoader,
      },
      {
        path: "/course-categories",
        element: <CourseCategories />,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
        loader: courseDetailLoader,
      },
    ],
  },

  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        errorElement: <Login />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />,
      },
    ],
  },
]);

export default router;
