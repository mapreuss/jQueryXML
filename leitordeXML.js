/*
				Script para ler XML por Marta Preuss
				Feito em 11/12/11
				Versão 1.0
				Lembre-se de chamar o jQuery e ter uma div com a id "content"
				
			*/
			$(document).ready(function(){
			
				saidaHTML="";
				
				$.get("news.xml",{},function(xml){ //endereço do XML
					$('item',xml).each(function(i) { //nome do nó que agrupa cada item
					noticiaDia = $(this).find("date").attr("day"); //nome do nó data e atributo dia
					noticiaMes = $(this).find("date").attr("month"); //nome do nó do data e atributo mês
					noticiaTitulo = $(this).find("title").text(); //nó do título
					noticiaConteudo = $(this).find("description").text();//nó do conteúdo
					
					dados=itemLista(); //chama a função itemLista abaixo para fazer o HTML
					saidaHTML=saidaHTML+dados; //soma o HTML existente aos dados
					})
					
					$("#content").append(saidaHTML); //div onde tudo será escrito

				})
								
				function itemLista(){
					itemEvento=""; //é necessário começar com um espaço em branco
					itemEvento="<div id='news_data'>"+noticiaDia +"/"+ noticiaMes+"</div>"; //saída dia e mês
					itemEvento+="<div id='news_titulo'>"+noticiaTitulo+"</div>"; //saída do título
					itemEvento+="<div id='news_conteudo'>"+noticiaConteudo+"</div>"; //saída do conteúdo
					return itemEvento; //retorno de todos os dados.
				}
			})