import React, { useState } from 'react';
import './DesignMock.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'


const DesignMock = () => {

    const [left, setLeft] = useState(-12);

    function showSidebar() {
        if (left < 0) {
            setLeft(0);
        }
        else {
            setLeft(-12);
        }
    }
    // header - 
    //      menu - 
    //  logout, quiz-creation, quiz-edit, see older quizes, edit-profile, go to profile
    //      logo
    //      search - other users
    // main body - full body [no magin], actual display of current page/component
    // footer - copyrights, back to top

    return (
        <div>

            <header>
                <div className="menu-box" onClick={showSidebar}>
                    <FontAwesomeIcon className="bars" icon={faBars} />
                </div>
                <h1>Kahoot Hoot Hoot</h1>
                <div className="search-box">
                    <input type="text" placeholder="Seacrh" />
                    <FontAwesomeIcon className="search" icon={faSearch} />
                </div>
            </header>

            <aside className="sidebar"
                style={{ left: left + 'em' }}>
                <ul>

                    <li className="item"><a href="#">Profile</a></li>
                    <li className="item"><a href="#">All Quizes</a></li>
                    <li className="item"><a href="#">Create quiz</a></li>
                    <li className="item"><a href="#">Settings</a></li>
                    <li className="item"><a href="#">Logout</a></li>

                </ul>
            </aside>


        </div >
    );
}

export default DesignMock;
