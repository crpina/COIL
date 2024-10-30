import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import store from "./redux/store";
import Nav_bar from "./componentes/Nav";
import Info from "./componentes/Info";
import Login from "./componentes/Login";
import Registro from "./componentes/Registro";
import InfoPaciente from "./componentes/InfoPaciente";
import Testweb from "./componentes/Testweb";
import InfoMedico from "./componentes/VistaMedico";
import NotFound from "./models/notFound";
import { PublicRoutes } from "./models/routes";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<></>}>
        <Provider store={store}>
          <BrowserRouter>
            <Nav_bar />
            <NotFound>
              <Route path="/" element={<Navigate to={PublicRoutes.INFO} />} />
              <Route path={PublicRoutes.INFO} element={<Info />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route path={PublicRoutes.REGISTRAR} element={<Registro />} />
              <Route path={PublicRoutes.INFOPAC} element={<InfoPaciente />} />
              <Route path={PublicRoutes.TEST} element={<Testweb />} />
              <Route path={PublicRoutes.MEDICO} element={<InfoMedico />} />
            </NotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
