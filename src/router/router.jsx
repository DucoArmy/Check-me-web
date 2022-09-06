import styled from "styled-components";
import { useState, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from '../common/NavBar'

import routes from './routes'

const Core = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  margin-top: 80px;
`
const Router = () => {
  const [getRoutes, setRoutes] = useState(routes)
  return (
    <>
      <NavBar></NavBar>
      <Core>
          <Routes>
              {
                getRoutes.map(element => {
                    return <Route
                        path={element.path}
                        element={element.component}
                        key={element.path}
                    />
                })
              }
          </Routes>
      </Core>
    </>
  )
}

export default Router;