$(document).ready(function() {

	$.ajax({

		type: "POST",

		url: "ClienteController",

		dataType: "json"

	})

		.done(function(d) {

			$.each(d.data, function(index, value) {

				$("<tr></tr>").html("<td>" + value.cpf + "</td>" +

					"<td>" + value.nome + value.sobrenome+ "</td>" +

					"<td>" + value.telefone + "</td>" +

					"<td>" + value.endereco +

					"</td>").appendTo("#myTable");

			});

		})

		.fail(function() {

			alert("Ocorreu um erro durante o processamento.");

		});

});