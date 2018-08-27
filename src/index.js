import ReactDOM from "react-dom";

// mdbreact package
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import registerServiceWorker from "./registerServiceWorker";
import routes from "./routes";

ReactDOM.render(routes, document.getElementById("root"));
registerServiceWorker();
