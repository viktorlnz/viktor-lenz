import React from 'react';

import './styles.css';

function Portfolio(props) {

    return (
        <>
            <section id='section-main'>
                <article>
                    <section id='section-apresentacao' >
                        <h2>Quem sou eu</h2>
                        <p>
                            Olá, você provavelmente caiu nesse site devido a uma postagem que fiz em uma das minhas redes sociais, caso contrário, meu nome é
						    <em>Viktor Lenz</em>, atualmente tenho 21 anos, sou <em>Técnico de informática</em> cursando tecnólogo de
						    <em> Análise e Desenvolvimento de sistemas</em>.
					    </p>
                        <h2>Por que?</h2>
                        <p>
                            Por que eu fiz esse portfólio? Basicamente, além de praticar desenvolvimento web e de me apresentar, poderei demonstrar na prática
						    um pouco do que posso fazer, pratica comum de desenvolvedores, o <b>GitHub</b> costuma abrigar muitos códigos de desenvolvedores
						    que os deixam a mostra, inclusive também tenho <a target='_blank' href='https://github.com/viktorlnz/triCodes'> o meu repositório</a>, apesar de não ter muitos
						    códigos, também <a target='_blank' href='https://www.sololearn.com/Profile/8334002#'>tenho uma conta na <b>SoloLearn</b></a>,
						    uma aplicação que além de poder aprender os fundamentos de programação, pode-se guardar códigos publicamente lá.
					    </p>
                    </section>

                    <section id='section-ficha'>
                        <h3>Viktor Lenz</h3>
                        <img src = '/eu.jpg' alt='Ilustração própria' className='section-foto' />
                        <ul id='ul-dados-base'>
                            <li><b>Nacionalidade:</b> Brasileiro</li>
                            <li><b>Estado Civil:</b> Solteiro</li>
                            <li><b>Idade:</b> 21 anos</li>
                            <li><b>Endereço:</b> São Paulo, Zona Sul</li>
                            <li><b>Linkedin:</b> <a href='https://www.linkedin.com/in/viktor-lenz-796a60113/' target='_blank'> Link Aqui</a></li>
                        </ul>
                    </section>
                    <section>
                        <ul id='ul-dados-tecnicos'>
                            <h4>Conhecimento técnico</h4>
                            <li>
                                <b>Formação acadêmica:</b> Técnico de informática formado no <em>Senai</em> e cursando Análise e Desenvolvimento de
								 Sistemas na <em>Fatec Zona Sul</em>, com previsão de término para o fim de 2020.
							</li>
                            <li>
                                <b>Produções: </b>Você pode conferir códigos desenvolvidos por mim no meu
								<a target='_blank' href='https://github.com/viktorlnz/triCodes'>GitHub</a> e no meu perfil da
								<a target='_blank' href='https://www.sololearn.com/Profile/8334002#'>SoloLearn</a>, por enquanto (digo isso no final
								de Julho de 2019) não há muitos códigos por lá, mas irei desenvolver mais coisas para exibição, aceito sugestões <b>:)</b>
                            </li>
                            <li>
                                <b>Idiomas: </b>
								Português nativo, inglês avançado (preciso de mais vivência para poder 'fixar' a fluência) e espanhol intermediário.
							</li>
                            <li>
                                <b>Prós: </b>
								Aprendizado ágil, lógica bem desenvolvida, ambição (não confundir com ganância), bom em encontrar soluções
								 para problemas individualmente e disciplinado
							</li>
                            <li>
                                <b>Contras(Sem 'mais' ou 'menos', aquele que não reconhece o própio defeito não vai adiante): </b>
								Dificuldades em lidar com equipes indisciplinadas, um pouco punitivo demais com as próprias falhas,
								necessidade de ter os máximos detalhes possíveis para agir e postergação (no entanto esse ultimo me parece
								que é incomum postergar).
							</li>
                        </ul>
                    </section>

                    <section id='section-dados-dev'>
                        <h4>Habilidades com informática</h4>
                        <div id='div-linguagens'>
                            <h5>Linguagens aprendidas:</h5>
                            <ul>
                                <li>
                                    <b>Principais linguagens (as quais tenho preferência)</b>
                                    <ul >
                                        <li>Python 3</li>
                                        <li>JavaScript (com ECMAScript)</li>
                                        <li>HTML 5</li>
                                        <li>CSS 3</li>
                                        <li>SQL</li>
                                    </ul>
                                </li>
                                <li>
                                    <b>Linguagens "secundárias" (diga-se de passagem, conheço mas não pretendo me aprofundar mais)</b>
                                    <ul >

                                        <li>PHP</li>
                                        <li>Java</li>
                                        <li>C++</li>
                                    </ul>
                                    <span class='span-nota'>* Por acaso PHP foi a linguagem que eu mais tive dominio, mas a deixei pois
											JavaScript e Python na minha opinião é superior a linguagem em muitos aspectos.</span>
                                </li>
                            </ul>
                        </div>
                        <div id='div-tecnologias'>
                            <h5>Tecnologias de programação</h5>
                            <ul >
                                <li>
                                    <b>Frameworks:</b>
                                    <ul>
                                        <li>Conhecimento em DJango</li>
                                        <li>Conhecimento em JQuery</li>
                                        <li>Noções de BootStrap</li>
                                        <li>Noções de Express</li>
                                        <li>Noções de Angular</li>
                                    </ul>
                                </li>
                                <li>
                                    Conhecimentos do AndroidStudio
									</li>
                                <li>
                                    <b>Banco de Dados</b>
                                    <ul >
                                        <li>MySQL</li>
                                        <li>SQL Server</li>
                                        <li>Noções de MongoDB</li>
                                    </ul>
                                </li>

                            </ul>

                        </div>
                        <div id='div-adicionais'>
                            <h5>Adicionais</h5>
                            <ul>
                                <li>Usos do Git</li>
                                <li>Conhecimentos do pacote Office</li>
                                <li>Usuário Linux e Windows</li>
                            </ul>
                        </div>
                    </section>
                    <section id='section-dados-informais' >
                        <h4>Informações informais</h4>

                        <ul>
                            <li><b>Hobbies: </b>Jogos, animes e música</li>
                            <li><b>Desgostos: </b>Funk, balada e atitudes estupidas ¬¬</li>
                            <li><b>Músicas favoritas: </b>Eu diria que se encaixa em JRock</li>
                            <li><b>Objetos que eu gosto: </b>Eletrônicos</li>
                            <li><b>Objetos que todo mundo se importa menos eu: </b>Automóveis, álcool, televisão, etc</li>
                            <li><b>Religião:</b> No</li>
                        </ul>

                        <span class='span-nota'>Por enquanto minha criatividade só permite isso</span>
                    </section>

                </article>
            </section>

            <footer>
            </footer>
        </>
    );
}

export default Portfolio;