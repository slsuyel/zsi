import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home/Home/Home";
import Contact from "@/pages/Contact/Contact";
import Services from "@/pages/Services/Services";
import Technology from "@/pages/Technology/Technology";
import About from "@/pages/About/About";
import Career from "@/pages/Career/Career";
import MainLayout from "@/components/layouts/MainLayout";
import Errorpage from "@/components/ui/Errorpage";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import News from "@/pages/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
      {
        path: "/who-we-are",
        element: <About />,
      },
      {
        path: "/careers",
        element: <Career />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },

  // {
  //   path: "user",
  //   element: (
  //     <UserPrivate>
  //       <UserLoggedLayout />
  //     </UserPrivate>
  //   ),
  //   errorElement: <Errorpage />,
  //   children: [
  //     {
  //       path: "profile",
  //       element: <UserDashboard />,
  //     },
  //     {
  //       path: "cart/:id",
  //       element: <Cart />,
  //     },
  //     {
  //       path: "profile/messages",
  //       element: <MessageLayout />,
  //     },
  //     {
  //       path: "profile/notifications",
  //       element: <Notification />,
  //     },
  //     {
  //       path: "profile/my-profile",
  //       element: <LoggedProfile />,
  //     },
  //     {
  //       path: "profile/edit/",
  //       element: <EditProfileInfo />,
  //     },
  //     {
  //       path: "profile/dashboard",
  //       element: <UserDashboard />,
  //     },
  //     {
  //       path: "profile/photos",
  //       element: <UserPhoto />,
  //     },
  //     {
  //       path: "profile/acc-settings",
  //       element: <AccountSetting />,
  //     },
  //     {
  //       path: "profile/partner-preferences",
  //       element: <PartnerPre />,
  //     },
  //     {
  //       path: "search-res",
  //       element: <SearchPage />,
  //     },

  //     {
  //       path: "search-res/:id",
  //       element: <SingleProfile />,
  //     },

  //     {
  //       path: "matches/new-matches",
  //       element: <NewMatches />,
  //     },
  //     {
  //       path: "matches/todays-matches",
  //       element: <TodayMatches />,
  //     },

  //     {
  //       path: "matches/my-matches",
  //       element: <MyMatches />,
  //     },
  //     {
  //       path: "matches/near-me",
  //       element: <NearMe />,
  //     },
  //     {
  //       path: "matches/recently-viewed",
  //       element: <RecentlyViewed />,
  //     },
  //     {
  //       path: "matches/more-matches",
  //       element: <MoreMatches />,
  //     },
  //   ],
  // },

  // {
  //   path: "/dashboard",
  //   element: <App />,
  //   children: routeGenerator(userPaths),
  // },
]);

export default router;
