import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import Postsla from "./components/Post/Postsla";
import Postxd from "./components/Post/Postxd";


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"Pedrinho"}
        fotoUsuario={"https://pbs.twimg.com/profile_images/1234652042318303237/-Q2etCVN_400x400.jpg"}
        fotoPost={"https://picsum.photos/200/150"}
      />
      <Postsla
      nomeUsuario={"Tony Tony"}
      fotoUsuario={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtyBF1U5Wiq0csHbRr3-Y03AS09_0VPMAEaw&usqp=CAU"}
      fotoPost={"https://picsum.photos/200/130"}/>

      <Postxd
      nomeUsuario={"Urubu do Pix"}
      fotoUsuario={"https://conteudo.imguol.com.br/c/noticias/20/2022/07/09/urubu-do-pix-e-novo-golpe-na-praca-1657379024808_v2_450x450.jpg"}
      fotoPost={"https://picsum.photos/200/120"}/>

    </MainContainer>
  );
}

export default App;
