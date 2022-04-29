import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img className="sidebarImgC" src="https://newbluefx.com/wp-content/uploads/2016/01/gaming-montage-tutorial-image.jpg" 
                alt="" 
            />
        <p>"All games, all free" is our motto here at Games4Us. We believe that all gamers should have the right to 'try before you buy' a game, or maybe just not buy it at all.</p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">ACTION</li>
            <li className="sidebarListItem">RPG</li>
            <li className="sidebarListItem">RACING</li>
            <li className="sidebarListItem">SANDBOX</li>


          </ul>
        </div>
    </div>
  )
}
