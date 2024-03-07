import { Route, Routes } from "react-router-dom";
import { Home, Paper } from "./routes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Paper />} />
      </Route>
    </Routes >
  )
}
