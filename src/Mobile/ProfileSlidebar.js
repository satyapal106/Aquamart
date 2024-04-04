import React from "react";
import "./ProfileSlider.css";
import { motion } from "framer-motion";
import { logoutUser } from "../Redux/Action/UserAction";
import { useDispatch } from "react-redux";
import close from './CloseSquare.svg';

function ProfileSlidebar({ hide }) {
  const dispatch = useDispatch
  function hidess() {
    hide(false);
  }
  function logout() {
    window.localStorage.removeItem('currentUser')
    window.localStorage.removeItem('cartServiceItem')
    window.localStorage.removeItem('cartItems')
    // dispatch({ type: "USER_LOGOUT" })

    window.location.href = '/'
  }
  return (
    <>

      <div className="blurBackground">
        <motion.aside
          initial={{ opacity: 0, x: -600 }}
          animate={{ opacity: 5, x: 0 }}
          exit={{ opacity: 0, x: 600 }}
          className="header-sidebar show"
        >
          <div className="wrap">
          <div className="closes" onClick={hidess} style={{position:"relative",right:"6px",zIndex:"1000",textAlign:"right"}}>
                  <img src={close} alt="" />
                </div>
            <div className="user-panel">
              <div className="media">
                
                <a     >
                  {" "}
                  <img
                    src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
                    alt="avatar"
                  />
                </a>
                <div className="media-body">
                  <a className="title-color font-sm">
                    Navneet
                    <span className="content-color font-xs">
                      Neetxy@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* Navigation Start */}
            <nav className="navigation">
              <ul style={{ paddingLeft: "1px" }}>
                <li>
                  <a

                    className="nav-link title-color font-sm"
                  >
                    <i className="fa fa-home" aria-hidden="true" />

                    <span>Home</span>
                  </a>
                  <a className="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a

                    className="nav-link title-color font-sm"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.2855 2H19.5521C20.9036 2 22 3.1059 22 4.47018V7.7641C22 9.12735 20.9036 10.2343 19.5521 10.2343H16.2855C14.933 10.2343 13.8366 9.12735 13.8366 7.7641V4.47018C13.8366 3.1059 14.933 2 16.2855 2Z"
                        stroke="#200E32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.44892 2H7.71449C9.06703 2 10.1634 3.1059 10.1634 4.47018V7.7641C10.1634 9.12735 9.06703 10.2343 7.71449 10.2343H4.44892C3.09638 10.2343 2 9.12735 2 7.7641V4.47018C2 3.1059 3.09638 2 4.44892 2Z"
                        stroke="#200E32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.44892 13.7657H7.71449C9.06703 13.7657 10.1634 14.8716 10.1634 16.2369V19.5298C10.1634 20.8941 9.06703 22 7.71449 22H4.44892C3.09638 22 2 20.8941 2 19.5298V16.2369C2 14.8716 3.09638 13.7657 4.44892 13.7657Z"
                        stroke="#200E32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.2855 13.7657H19.5521C20.9036 13.7657 22 14.8716 22 16.2369V19.5298C22 20.8941 20.9036 22 19.5521 22H16.2855C14.933 22 13.8366 20.8941 13.8366 19.5298V16.2369C13.8366 14.8716 14.933 13.7657 16.2855 13.7657Z"
                        stroke="#200E32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Shop by Category</span>
                  </a>
                  <a className="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a

                    className="nav-link title-color font-sm"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.7162 16.2234H8.4962"
                        stroke="#200E32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.7162 12.0369H8.4962"
                        stroke="#200E32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.2513 7.86008H8.4963"
                        stroke="#200E32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.9086 2.74979C15.9086 2.74979 8.2316 2.75379 8.2196 2.75379C5.4596 2.77079 3.7506 4.58679 3.7506 7.35679V16.5528C3.7506 19.3368 5.4726 21.1598 8.2566 21.1598C8.2566 21.1598 15.9326 21.1568 15.9456 21.1568C18.7056 21.1398 20.4156 19.3228 20.4156 16.5528V7.35679C20.4156 4.57279 18.6926 2.74979 15.9086 2.74979Z"
                        stroke="#200E32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span>Orders</span>
                  </a>
                  <a className="arrow" >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a

                    className="nav-link title-color font-sm"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.87743 15.2062C6.03343 15.2062 2.75043 15.7872 2.75043 18.1152C2.75043 20.4422 6.01243 21.0452 9.87743 21.0452C13.7214 21.0452 17.0044 20.4632 17.0044 18.1362C17.0044 15.8092 13.7424 15.2062 9.87743 15.2062Z"
                        stroke="#200E32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.87745 11.8859C12.4134 11.8859 14.4454 9.85291 14.4454 7.31791C14.4454 4.78191 12.4134 2.74991 9.87745 2.74991C7.34245 2.74991 5.30945 4.78191 5.30945 7.31791C5.30945 9.85291 7.34245 11.8859 9.87745 11.8859Z"
                        stroke="#200E32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.2041 8.6691V12.6791"
                        stroke="#200E32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21.25 10.674H17.16"
                        stroke="#200E32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span>Your Account</span>
                  </a>
                  <a className="arrow"     >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a

                    className="nav-link title-color font-sm"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.8066 7.62358L20.1842 6.54349C19.6576 5.62957 18.4907 5.31429 17.5755 5.83869V5.83869C17.1399 6.09531 16.6201 6.16812 16.1307 6.04106C15.6413 5.91399 15.2226 5.59749 14.9668 5.16134C14.8023 4.88412 14.7139 4.56836 14.7105 4.24601V4.24601C14.7254 3.72919 14.5304 3.22837 14.17 2.85764C13.8096 2.48691 13.3145 2.27783 12.7975 2.27805H11.5435C11.037 2.27804 10.5513 2.47988 10.194 2.83891C9.83667 3.19795 9.63716 3.68456 9.63959 4.19109V4.19109C9.62458 5.23689 8.77246 6.07678 7.72655 6.07667C7.4042 6.07332 7.08844 5.98491 6.81122 5.82038V5.82038C5.89605 5.29598 4.7291 5.61126 4.20252 6.52519L3.53433 7.62358C3.00839 8.53636 3.31938 9.70258 4.22998 10.2323V10.2323C4.82189 10.574 5.18652 11.2056 5.18652 11.889C5.18652 12.5725 4.82189 13.204 4.22998 13.5458V13.5458C3.32054 14.0719 3.00921 15.2353 3.53433 16.1453V16.1453L4.16591 17.2346C4.41263 17.6798 4.82659 18.0083 5.31618 18.1474C5.80577 18.2866 6.33062 18.2249 6.77461 17.976V17.976C7.21106 17.7213 7.73117 17.6515 8.21932 17.7822C8.70748 17.9128 9.12322 18.233 9.37415 18.6716C9.53868 18.9489 9.62709 19.2646 9.63044 19.587V19.587C9.63044 20.6435 10.4869 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9089 18.6 15.2681 18.2407C15.6274 17.8814 16.1155 17.6806 16.6236 17.6831C16.9452 17.6917 17.2596 17.7797 17.5389 17.9394V17.9394C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8066 16.1453C21.0617 15.7075 21.1318 15.186 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6717 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8873 19.1602 11.3658 19.4153 10.9279C19.5812 10.6383 19.8214 10.3982 20.111 10.2323V10.2323C21.0161 9.70286 21.3264 8.54346 20.8066 7.63274V7.63274V7.62358Z"
                        stroke="#200E32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <circle
                        cx="12.1751"
                        cy="11.889"
                        r="2.63616"
                        stroke="#200E32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span>Settings</span>
                  </a>
                  <a className="arrow"     >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </li>
                <li onClick={logout}>
                  <a


                    className="nav-link title-color font-sm"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.016 7.38951V6.45651C15.016 4.42151 13.366 2.77151 11.331 2.77151H6.45597C4.42197 2.77151 2.77197 4.42151 2.77197 6.45651V17.5865C2.77197 19.6215 4.42197 21.2715 6.45597 21.2715H11.341C13.37 21.2715 15.016 19.6265 15.016 17.5975V16.6545" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M21.8095 12.0214H9.76849" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M18.8812 9.10632L21.8092 12.0213L18.8812 14.9373" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span>Sign Out</span>
                  </a>

                </li>
              </ul>
            </nav>
            {/* Navigation End */}
          </div>
          <div className="contact-us">
            <span className="title-color">Contact Support</span>
            <p className="content-color font-xs">
              If you have any problem,queries or questions feel free to reach
              out
            </p>
            <a href="javascript:void(0)" className="btn-solid">
              {" "}
              Contact Us{" "}
            </a>


          </div>
        </motion.aside>
      </div>
    </>
  );
}

export default ProfileSlidebar;
