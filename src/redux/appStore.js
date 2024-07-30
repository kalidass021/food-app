import { configureStore } from "@reduxjs/toolkit";

// Step1. Create a store with configure store function
const appStore = configureStore({
    reducer: {},
});

export default appStore;