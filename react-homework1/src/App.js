import './App.css'

function App() {
  return (
    <div className="Wrapper">
      <header className="App-header">
        <div className="App-header-3round">тут будуть три кружечки</div>
        <div className="pagesName">Home page</div>
      </header>
      <nav className="nav">
        <div>
          <img className="nav-img" alt="logo"></img>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Catalog</li>
          <li>Cart</li>
        </ul>
      </nav>
      <content className="content-main">
        <div className="header-part">
          <div className="img-content-main">
            <img src="#" alt="logo"></img>
          </div>
          <div className="text-content-main">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </div>
        </div>
        <div className="bottom-part">
          <div className="card">
            <div>
              <img src="#" alt="card"></img>
              <h6>Title 1 heading</h6>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <img src="#" alt="card"></img>
              <h6>Title 1 heading</h6>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <img src="#" alt="card"></img>
              <h6>Title 1 heading</h6>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </div>
            </div>
          </div>
          <div>
            <button>View more</button>
          </div>
        </div>
      </content>
      <footer>
        <div className="top-part-footer">
          <div className="left-part-footer">
            <div className="left-part-footer-title">Branding stuff</div>
            <div className="left-part-footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
          </div>
        </div>
        <div className="footer-logo">
          <img src="#" alt="logo"></img>
        </div>
        <div className="footer-icons">
          <div>
            <img src="#" alt="icon"></img>
          </div>
          <div>
            <img src="#" alt="icon"></img>
          </div>
          <div>
            <img src="#" alt="icon"></img>
          </div>
          <div>
            <img src="#" alt="icon"></img>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
