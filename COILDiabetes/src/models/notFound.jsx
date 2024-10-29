import { Route, Routes } from "react-router-dom";

export const NotFound = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};

export default NotFound; 