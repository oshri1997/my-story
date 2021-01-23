import { combineReducers } from "redux";
import posts from "./posts";
import auth from "./auth";

export default combineReducers({ posts, auth }); //if the key and the value are same we can transfer only one time
