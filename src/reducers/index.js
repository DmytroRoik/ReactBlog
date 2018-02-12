import {combineReducers} from 'redux';
import posts from './posts';
import user from './user';
import categories from './category';

const allReducers=combineReducers({
  posts,
  user,
  categories
});

export default allReducers;
