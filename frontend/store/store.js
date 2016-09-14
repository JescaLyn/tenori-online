import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

export default function configureStore() {
  return createStore(rootReducer);
}
