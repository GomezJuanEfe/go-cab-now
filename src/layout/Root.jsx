import { Outlet } from "react-router-dom"

const Root = () => {

  return (
    <>
      <header>HEADER</header>
        <main>
          <Outlet />
        </main>
      <footer>FOOTER</footer>
    </>
  )
}

export default Root