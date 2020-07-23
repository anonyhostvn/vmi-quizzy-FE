import React from "react";
import './spinner.style.scss';
//
// const Spinner = () => {
//     return (
//         <div style={{
//             margin: 0,
//             padding: 0,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             height: "100vh",
//             width: "100%",
//         }}>
//             <div className="about">
//                 <a className="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
//                     <span className="icon"/>
//                 </a>
//                 <a className="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
//                     <span className="icon"/>
//                 </a>
//                 <a className="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/"
//                    target="_blank">
//                     <span className="icon"/>
//                 </a>
//                 <a className="bg_links logo"/>
//             </div>
//
//             <div className="content">
//                 <div className="planet">
//                     <div className="ring"/>
//                     <div className="cover-ring"/>
//                     <div className="spots">
//                         <span/>
//                         <span/>
//                         <span/>
//                         <span/>
//                         <span/>
//                         <span/>
//                         <span/>
//
//                     </div>
//                 </div>
//                 <p>loading</p>
//             </div>
//         </div>
//     )
// }

const Spinner = () => {
    return (
        <div className={'spinner-container'}>
            <div className="loader">
                <svg viewBox="0 0 80 80">
                    <circle id="test" cx="40" cy="40" r="32"/>
                </svg>
            </div>

            <div className="loader triangle">
                <svg viewBox="0 0 86 80">
                    <polygon points="43 8 79 72 7 72"/>
                </svg>
            </div>

            <div className="loader">
                <svg viewBox="0 0 80 80">
                    <rect x="8" y="8" width="64" height="64"/>
                </svg>
            </div>

        </div>
    )
}

export default Spinner;