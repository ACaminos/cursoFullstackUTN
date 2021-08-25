function mueveReloj(){
    var momentoActual = new Date()
    var hora = momentoActual.getHours()
    var minutos = momentoActual.getMinutes()
    var segundos = momentoActual.getSeconds()

    var str_segundo = new String(segundos)
    if (str_segundo.length == 1){
        segundo = "0" + segundo
    }

    var str_minuto = new String(minutos)
    if (str_minuto.length == "0"){
        minuto = "0" + minuto
    }

    var str_hora = new String(hora)
    if (str_hora.length == 1){
        hora = "0" + hora
    }

    var horaImprimible = hora + " : " + minutos + " : " + segundos

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()",1000)
}