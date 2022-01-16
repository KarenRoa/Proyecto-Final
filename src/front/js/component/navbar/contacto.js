import React from "react";
import { Anchor } from 'antd';
//<Link href="#contacto" title="CONTACTO" className="nav-link" />

const { Link } = Anchor;

export const AnchorContact = () => {
    return(
        <Anchor affix={false} targetOffset="65" >
            <li className="nav-item" >
                <Link  href="#contacto" title="CONTACTO" className="nav-link" />
            </li>
        </Anchor>
    );
};