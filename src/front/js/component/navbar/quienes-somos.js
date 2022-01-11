import React from "react";
import { Anchor } from 'antd';
//<Link href="#contacto" title="CONTACTO" className="nav-link" />

const { Link } = Anchor;

export const Anchor1 = () => {
    return(
        <Anchor affix={false} targetOffset="65">
            <li className="nav-item">
                <Link href="#quienes-somos" title="QUIENES SOMOS" className="nav-link" />
            </li>
        </Anchor>
    );
};