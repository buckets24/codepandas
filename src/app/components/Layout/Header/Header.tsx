import { Button } from "@/shadcnui/ui/button";

interface HeaderProps {
  pathname: string;
}

const Header: React.FC<HeaderProps> = ({ pathname }) => {
  return (
    <header className="z-30 fixed w-full top-2 section-pattern">
      <div className="container">
        <nav className="bg-white/70 py-3 px-6 rounded-lg border-2 border-slate-200 relative flex flex-wrap items-center justify-between">
          <div className="order-0">
            <h4 className="text-slate-900">Logo</h4>
          </div>

          {/* <input id="nav-toggle" type="checkbox" className="hidden" />
          <label
            htmlFor="nav-toggle"
            className="order-3 cursor-pointer flex items-center lg:hidden text-dark dark:text-white lg:order-1"
          >
            <svg id="show-button" className="h-6 fill-current block" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
            </svg>
            <svg id="hide-button" className="h-6 fill-current hidden" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"></polygon>
            </svg>
          </label> */}

          {/* <ul
            id="nav-menu"
            className="navbar-nav order-3 hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8"
          >
            {
              main.map((menu) => (
                <li className="nav-item">
                    <a
                      href={menu.url}
                      className={`nav-link block text-slate-900 ${
                        (pathname === `${menu.url}/` || pathname === menu.url) &&
                        "active"
                      }`}
                    >
                      {menu.name}
                    </a>
                  </li>
              ))
            }
            {
              navigationButton.enable && (
                <li className="mt-4 inline-block lg:hidden">
                  <a
                    className="btn btn-outline-primary btn-sm text-slate-100"
                    href={navigationButton.link}
                  >
                    {navigationButton.label}
                  </a>
                </li>
              )
            }
          </ul>
           */}
          <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
            <Button className="max-w-auto text-lg p-6">
                Get Started
              </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;