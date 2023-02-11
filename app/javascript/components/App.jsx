import React from "react";
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
// import { Link} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Routes from "../routes";

// export default props => <>{Routes}</>;
// https://www.youtube.com/watch?v=uvB4cUi4RrI
// https://www.youtube.com/watch?v=59IXY5IDrBA
// https://www.youtube.com/watch?v=RVFAyFWO4go
// https://www.youtube.com/watch?v=oUZjO00NkhY
// function App() {
//   return <BrowserRouter>
//     <Routes>
//       <Route path="/"></Route>
//     </Routes>
//   </BrowserRouter>
// }
const Home = () => {
  return  (<div>
    <h1> this is Home</h1>
  </div>)
}

const About = () => {
  return (<div>
    <h1>this is About</h1>
  </div>)
}

// const App = () => {
//   return (
//   <Router>
//   <div>
//      <Link to="/">Home</Link>
//      <Link to="/about">About</Link>
//   </div>
//
//     <Routes>
//       <Route path="/" element={Home}>
//       </Route>
//       <Route path="/about" element={About}>
//       </Route>
//     </Routes>
//
//   </Router>
//   )
// }

function App() {
  const name = "Dave"

  return (
  <div>
    <Header/>
    <Content/>
    <Footer/>
  </div>
  )
}

export default App;
