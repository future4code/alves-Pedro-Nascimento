console.log("bem vindo ao black jack!!!")

if (confirm(" vamos jogar?")=== true){
   const carta= comprarCarta()
   const cartas= comprarCarta()
   const pontuacao = carta.valor+cartas.valor
   console.log(`sua carta inicial é${carta.texto}e seu valor é ${carta.valor}`)
   console.log(`sua carta secundaria é${cartas.texto}e seu valor é ${cartas.valor}`)
  console.log (`seus pontos ${pontuacao} `)
  
  const cartacpu= comprarCarta()
  const cartaspc= comprarCarta()
  const pontuacaocpu = cartacpu.valor+cartaspc.valor
  console.log(`sua carta inicial é${cartacpu.texto}e seu valor é ${cartacpu.valor}`)
  console.log(`sua carta secundaria é${cartaspc.texto}e seu valor é ${cartaspc.valor}`)
 console.log (`seus pontos ${pontuacaocpu} `)

if (pontuacao>pontuacaocpu){
   console.log("you win")
   }
   else if(pontuacao<pontuacaocpu){
   console.log("Perdeu...")
   }

   else if (pontuacao===pontuacaocpu){
      console.log("empate")
      
   }else {
      console.log("end game")
   }
}