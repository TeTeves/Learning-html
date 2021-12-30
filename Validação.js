<script type="text/javascript">
         function validar(){
			var nome = formAcesso.nome.value
		    var senha = formAcesso.senha.value
			if (nome ==""){
			    alert("Nome não informado. Digite o nome para ter acesso.");
				formAcesso.nome.focus();
				return false;	
			}
			if (senha ==""){
			alert("Senha não informada. Digite a senha para ter acesso.");
			formAcesso.senha.focus();
			return false;
			}
			 if (senha != 123) {
    alert("Senha inválida. A senha deve ser 123");
    return false;
  } else {
    alert("Acesso autorizado.");

			}
			}
			</script>
