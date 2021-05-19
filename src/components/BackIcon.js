import React from "react";
import {Routes} from "../routes";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function BackIcon(props) {
    return (
        <Link to={props.path}>
            <div className="text-info">
                <FontAwesomeIcon icon={faAngleLeft} className="me-2"/> Quay lại
            </div>
        </Link>
    )
};

export default BackIcon;
