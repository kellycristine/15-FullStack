//7. Desenvolva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
let totalEleitoresTexto = window.prompt('Informe o total de eleitores: ');

if(totalEleitoresTexto !== null) {
    let totalBrancosTexto = window.prompt('Informe o total de votos brancos: ');

    if(totalBrancosTexto !== null) {
        let totalNulosTexto = window.prompt('Informe o total de votos nulos: ');
    
        if(totalNulosTexto !== null ) {
            let totalValidosTexto = window.prompt('Informe o total de votos válidos: ');

            if(totalValidosTexto !== null ) {
                let totalEleitores = Number(totalEleitoresTexto);
                let totalBrancos = Number(totalBrancosTexto);
                let totalNulos = Number(totalNulosTexto);
                let totalValidos = Number(totalValidosTexto);

                console.log(`Total eleitores: ${totalEleitores}`)
                console.log(`Total brancos: ${totalBrancos}`)
                console.log(`Total nulos: ${totalNulos}`)
                console.log(`Total validos: ${totalValidos}`)
        
            } else {
            document.write('Total de votos válidos não informado. Tente novamente')
           }
        } else {
        document.write('Total de votos nulos não informado. Tente novamente')
        }
    } else {
        document.write('Total de votos brancos não informado. Tente novamente')
    }
    } else {
   document.write('Total de eleitores não informado. Tente novamente')
}

 let totalEleitores = Number(window.prompt('Informe o total de eleitores: '));

 if(!totalEleitores) {
   document.write('Total de eleitores não é válido! Tente novamente');

 } else {
  
   let votosBrancos = Number(window.prompt('Informe o total de votos brancos: '));

   if(!votosBrancos) {
     document.write('Total de votos brancos não é válido! Tente novamente');
  
   } else {
     let totalNulos = Number(window.prompt('Informe o total de votos nulos: '));

     if(!totalNulos) {
       document.write('Total de votos nulos não é válido! Tente novamente');
    
     } else {
       let totalValidos = Number(window.prompt('Informe o total de votos válidos: '));

        if(!totalValidos) {
         document.write('Total de votos validos não é válido! Tente novamente');
        } else {
            let percentualBrancos = (votosBrancos * 100) / totalEleitores;
            let percentualNulos = (totalNulos * 100) / totalEleitores;
            let percentualValidos = (totalValidos * 100) / totalEleitores;

            document.write(`<p>Total de eleitores: ${totalEleitores.toFixed(2)}</p>`);
            document.write(`<p>Percentual de brancos: ${percentualBrancos.toFixed(2)}%</p>`);
            document.write(`<p>Percentual de nulos: ${percentualNulos.toFixed(2)}%</p>`);
            document.write(`<p>Percentual de validos: ${percentualValidos.toFixed(2)}%</p>`);

        }
    }
   }
 }


