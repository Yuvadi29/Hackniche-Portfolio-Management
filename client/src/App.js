import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PaymentChange from "./pages/PaymentChange";
import Subcategories from "./components/Subcategories";
import Main from "./components/layout/Main";
import Orders from "./components/chart/OrderTable";
import Carts from "./components/Carts";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Product from "./pages/Product";
import SalesReportPage from "./pages/Sales";
import Category from "./pages/Category";
import HistoricalData from "./pages/HistoricalData";
import StockGraph from "./pages/StockGraph";
import NewsFeed from "./pages/NewsFeed";
import RiskParameters from "./pages/RiskParameters";
import PortfolioRebalancing from "./pages/PortfolioRebalancing";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/historicaldata" component={HistoricalData} />
          <Route exact path="/stockgraph" component={StockGraph} />
          <Route exact path="/newsfeed" component={NewsFeed} />
          <Route exact path="/riskparameters" component={RiskParameters} />
          <Route exact path="/portfoliorebalancing" component={PortfolioRebalancing} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/sales" component={SalesReportPage} />
          <Route exact path="/subcategories" component={Subcategories} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/payment" component={PaymentChange} />
          <Route exact path="/carts" component={Carts} />
          {/* <Redirect from="*" to="/dashboard" /> */}
        </Main>
      </Switch>
    </div>
  );
}

export default App;
