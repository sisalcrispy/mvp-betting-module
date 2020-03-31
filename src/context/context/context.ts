import Sisal from "sisal-mvp-betting-library";
import mutations from "./mutations";
import actions from "./actions";

const initialState = {
};

const {createStore} = Sisal.Store();
const {createContext, addToContext} = createStore({initialState, mutations, actions});
createContext();

const trans = Sisal.Translations().store;
const context = addToContext(trans.initialState, trans.mutations, trans.actions);


export default context;