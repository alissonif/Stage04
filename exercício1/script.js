let result=prompt('Digite o número que estou pensando? está entre 0 e 10')
const randomNumber=Math.round(Math.random()*10)
let xAtempps=1
if (xAtempps==1){
	while (result!=randomNumber){
		result=prompt('Erro, tente novamente: ')
		xAtempps++
	}
	alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você adivinhou o número em ${xAtempps} tentativa`)
}
else{
	while (result!=randomNumber){
		result=prompt('Erro, tente novamente: ')
		xAtempps++
	}
	alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você adivinhou o número em ${xAtempps} tentativa`)
}