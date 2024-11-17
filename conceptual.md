### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  React Router is a library for managing and implementing routing in React applications. It allows for dynamic and declarative routing, enabling single-page applications (SPAs) to mimic multiple pages without refreshing, creating a seamless user experience when navigating between different views.

- What is a single page application?
  An SPA is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the app, without reloading the page. This approach provides faster, smoother navigation by using JavaScript to update the content and manage state transitions on the client side.

- What are some differences between client side and server side routing?
  Client-side routing, as seen in SPAs, updates the browser URL and renders components based on the route without a server request. Server-side routing, typical of traditional web apps, involves requesting and receiving new HTML pages from the server each time the URL changes. Client-side routing provides faster transitions, while server-side routing is beneficial for SEO and initial load performance.

- What are two ways of handling redirects with React Router? When would you use each?
  React Router handles redirects either through the <Navigate /> component or the useNavigate hook. <Navigate /> is typically used in the component tree to trigger redirects conditionally, while useNavigate allows redirects programmatically from within functions. The choice depends on whether the redirection is declarative (in JSX) or imperative (inside functions).

- What are two different ways to handle page-not-found user experiences using React Router?
  Two common methods are creating a 404 route with a path of "\*" to catch undefined routes or using conditional rendering to show a "not found" message when no routes match. A 404 route provides a consistent fallback, while conditional rendering is useful when a "not found" response depends on specific state or data.

- How do you grab URL parameters from within a component using React Router?
  URL parameters can be accessed within a React component using the useParams hook provided by React Router. This hook returns an object containing the route parameters as key-value pairs, allowing components to dynamically respond based on the current URL.

- What is context in React? When would you use it?
  Context in React provides a way to share data across components without passing props manually at every level. It’s ideal for global state, such as theme, user authentication, or language settings, especially in complex component trees.

- Describe some differences between class-based components and function
  components in React.
  Class-based components use ES6 classes and lifecycle methods, while function components rely on functions and hooks. Function components are simpler, and with hooks, they can manage state and side effects effectively, making them more efficient and preferred in modern React.

- What are some of the problems that hooks were designed to solve?
  Hooks address issues like complex component logic, excessive nesting, and repeated patterns in lifecycle methods. They allow function components to manage state, side effects, and lifecycle events, making React code more reusable, concise, and modular, which improves readability and testability.
