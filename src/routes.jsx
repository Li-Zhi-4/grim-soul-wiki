import { HomePage } from "./components/HomePage/HomePage";
import { ItemIndexPage } from "./components/ItemIndexPage/ItemIndexPage";
import { ItemPage } from "./components/ItemPage/ItemPage";

import { items } from "./data/items";

/**
 * When we render all the item images as clickable Links, 
 * We will create dynamic links that with premade routes
 * <Link to={`/items/${item-name}`} className="navLink">
      <img of item>
    </Link>
    Then we will do that useParams thing (as seen in test) to grab the data 
    from our items data.
 */

const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/items', element: <ItemIndexPage />},
    { path: '/items/:itemID', element: <ItemPage />}
];

export default routes;