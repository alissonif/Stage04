function media(a, b) {
  return ((a + b) / 2)
}

let notasA = [6, 10, 9, 6]
let notasB = [6, 9, 9, 5]
let option;
let nomes = ['joao', 'leticia', 'diego', 'julia']

while(option!=6){

  option=Number(prompt(`Digite a o número da opção desejada: 
  1 - Cadastrar um novo aluno na lista
  2 - Mostrar os alunos cadastrados 
  3 - Remover /um aluno da lista
  4 - Mostrar alunos aprovados
  5 - Mostrar alunos e notas das provas já cadastrados
  6 - Sair do programa
  `))

  if (option==1){
    let nomeAluno=prompt('Digite o nome do novo aluno: ')
    nomes.push(nomeAluno)
    let n1=prompt('Digite a nota da primeira prova: ')
    notasA.push(Number(n1))
    let n2=prompt('Digite a nota da segunda prova: ')
    notasB.push(Number(n2))
  }
  else if(option==2){
    if (nomes.length==0){
      alert('Nao existe alunos cadastrados')
    }else{
      alert(nomes)
      
      }
    }
    else if(option==3){

      if (nomes.length==0){
        alert('Nao existe alunos cadastrados')
      }else{
      posicao=prompt('Digite a posição do nome do aluno para remover da lista: ')
      posicao=Number(posicao)
      nomes.splice(posicao,1)
    }
    }
  else if(option==5){
    for(var i in nomes){
      alert(`Nome: ${nomes[i]} - Nota1: ${notasA[i]} - Nota2: ${notasB[i]}`)
    }
  }
  else if(option==4){
    

     if (nomes.length==0){
      alert('Nao existe alunos cadastrados')
    }
    
    for (let i in nomes) {
      let a = (notasA[i])
      let b = (notasB[i])
      let m = media(a, b)
      if (m >= 7) {
    
        alert(`A média do(a) aluno(a) é: ${m} \nParabéns ${nomes[i]}! Você foi aprovado(a) no concurso!`)
      } else {
        alert(`A média do(a) aluno(a) é: ${m} \nNão foi dessa vez, ${nomes[i]}! Tente novamente!`)
      }
    }
  }
  else{
    alert('The End')
  }
}