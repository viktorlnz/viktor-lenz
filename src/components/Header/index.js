import React from 'react';

import './styles.css';

function Header(props){
    return (
        <header>
                <div id='div-title'>
                    <h1>Portfólio de Viktor Lenz (em construção)</h1>
                </div>
                <nav id='nav-header'>
                    <ul>
                    <a href="#"><li id='li-selecionado'>home</li></a>
                    <a href="{% url 'linguagens' %}"><li> Linguagens</li></a>
                    <a href="{% url 'contato' %}"><li>Contato</li></a>
                    </ul>
                </nav>
            </header>
    );
}

export default Header;