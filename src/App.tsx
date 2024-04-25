import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="text-3xl text-center my-24 font-bold">App</div>
    </Provider>
  );
};

export default App;
