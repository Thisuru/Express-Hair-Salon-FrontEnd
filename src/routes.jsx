import { Route, withRouter, Switch } from "react-router-dom";

// layouts
import DefaultLayout from "./layouts/DefaultLayout";
import DetailLayout from "./layouts/DetailLayout";

// views
import Views from "./modules/Views";

const routes = [
  // ---------------Landing-------
  {
    path: "/",
    layout: DefaultLayout,
    exact: true,
    component: Views.HomeView,
  },
  // ---------------About---------
  {
    path: "/about",
    layout: DefaultLayout,
    exact: true,
    component: Views.AboutView,
  },
  // ---------------Services---------
  {
    path: "/services",
    layout: DetailLayout,
    exact: true,
    component: Views.ServicesView,
  },
  // ---------------Shop---------
  {
    path: "/shop",
    layout: DefaultLayout,
    exact: true,
    component: Views.ShopView,
  },
  // ---------------Booking---------
  {
    path: "/booking",
    layout: DefaultLayout,
    exact: true,
    component: Views.BookingView,
  },
  // ---------------ServiceDetails---------
  {
    path: "/serviceDetails",
    layout: DetailLayout,
    exact: true,
    component: Views.ServiceDetailsView,
  },
  //   //should be last one
  //   {
  //     layout: PageNotFoundLayout,
  //     component: Views.PageNotFoundView,
  //   },
];

// export default routes;

const RouterSwitch = ({ location }) => (
  <Switch>
    {routes
      .filter((route) => !route.isDeactive)
      .map((route) => {
        return (
          <Route
            key={location.pathname}
            exact={route.exact}
            path={route.path}
            component={route.layout(route.component)}
          />
        );
      })}
  </Switch>
);

export default withRouter(RouterSwitch);