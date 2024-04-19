import React from "react";
import '../styles/Home.css'

const Home = () =>{
    return(
        <div>  
            <div class="totalContainer">
                <div class="fotoPerfil_e_Dados">
                <div class="fotoPerfil">
                    <img src="https://marketplace.canva.com/EAFegYHtpE4/1/0/1600w/canva-foto-de-perfil-para-o-instagram-luxuosa-e-elegante-preto-e-bege-neon-rFVNtE4jncE.jpg"/>
                </div>

                <div class="containerDados">
                    <p>Nome:</p>
                    <p>Período:</p>
                </div>

                </div>

                <div class="links_Greed">
                    <div class="links_greed_container_a">
                        <a href="!">Meu Dashboard</a>
                        <a href="@">Minha Agenda</a>
                        <a href="#">Meu Calendário</a>
                    </div>

                    <div  class="links_greed_container_b">
                        <a href="$">Fórum Online</a>
                        <a href="%">Salas Virtuais</a>
                        <a href="&">Sair</a>
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default Home;