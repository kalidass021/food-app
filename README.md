# React


# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File watching algorithm - written in C++
- Caching - Faster builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error handling
- Supports HTTPs
- Tree Shaking - Remove unused code
- Different dev and prod bundles




# Food app


/*
 * Header
 * - logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *   - Restaurant card
 *       - Img
 *       - Name of the res, Star rating, cusine, delivery time,
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */


Two types of import/ export

- Default export/ import
    export default Component;
    import Component from "path";
- Named export/ import
    export const Component;
    import {Component} fromm "path";



# React Hooks

    - Normal JavaScript utility functions
    - useState() - Super powerful state variables.
    - useEffect() -

# useState

    - Never use useState outside the component
    - It is used to create local state variables inside the functional component
    - Try to call hooks on the top
    - Never use useState inside the if/else statements
    - Never use useState inside the for loops
    - Never use useState inside the functions

# useEffect

    - If no dependency array => useEffect is called on every render
    - If dependency array is empty - [] => useEffect is called on initial render(just once)
    - If dependency array is [state] => useEffect is called everytime state is updated.  