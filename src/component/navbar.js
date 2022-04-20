import React from 'react'
import '../stylling/navstyle.css';


function NavbarHeader() {
  return (
    <>
      <div className="navbar">
        <h1 className="navbar__header">BlogMania</h1>

        {/* <div className="blog__search">
          <input
            className="search"
            placeholder="Search for a blog"

          />
          <button className="submit">
            Search
          </button>
        </div> */}
        <div className="navbar__user__data">
          {/* <Avatar
            className="user"
            src={userData?.imageUrl}
            alt={userData?.name}
          /> */}
          {/* <h1 className="signedIn">{userData?.givenName}</h1> */}
          <button className="logout__button">
            Logout 😦
          </button>
      
        </div>




      </div>


    </>



  )
}

export default NavbarHeader