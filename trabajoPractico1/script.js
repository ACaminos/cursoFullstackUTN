function mostrarInfo(){
   var valorSeguro = document.formContacto.tipoSeguros.value;

   var valorPlan = document.getElementById('valorPlan');

    valorPlan.value = valorSeguro
}