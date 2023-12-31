# FundamentosNodeJS


### Conceitos de Streams

 - Ler pequenas partes de algo e já conseguir trabalhar com aqueles dados, mesmo não tendo aquele algo por completo.

**Importação de clientes via CSV (Excel)**

Enviar uma certa quantidade de dados para dentro do servidor e ele ir lidando com esses dados.

Imagine que em um certo momento enviamos um arquivo com 1GB de tamanho e 1.000.000 de linhas.

Se não estivermos utilizando o conceito de streams, o usuário enviaria através de uma rota **POST /upload** o arquivo de nome fictício **import.csv**, o nosso servidor irá ler esse arquivo por completo e após ler esse grande arquivo ele vai começar a realizar as funcionalidades descritas na nossa rota. Imagine que o usuário que está enviando esse arquivo de 1gb estiver utilizando uma internet de 10mb/s de upload, ela irá ter de aguardar cerca de 13 minutos para assim o servidor começar a ler esse arquivo e ele começar a fazer as funcionalidades descritas.

Se utilizar-mos o conceito de streams, podemos imaginar que a cada segundo que passar, teremos cerca de 10.000 linhas do nosso arquivo já subidas para o servidor, podemos começar a realizar as funcionalidades descritas na nossa rota, então podemos começar a processar os dados antes de o arquivo se carregado completamente.

neste exemplo temos o conceito de **Readable Streams**, que é o que faz com que seja lido um arquivo aos pouco e já seja executado um processo enquanto carrega completamente este arquivo, temos também o conceito de **Writable Streams** que é o conceito de enviar aos poucos um arquivo e ele já ser processado pelo lado do cliente, neste caso um usuário de um serviço de streamings de video ou música. 