function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {  
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function registrar(){
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    
    if(usuario!="" && contraseña!=""){
        let token = getCookie('csrftoken');

        $.ajax({ 
            type: 'POST',
            url: 'register',
            data: {usuario:usuario, contraseña:contraseña, csrfmiddlewaretoken: token},
            success: function(data){
                alert(data);
            }
        });

    }else{
        alert("Favor de llenar los campos.");
    }

}

function iniciarSesion(){

    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    if(usuario!="" && contraseña!=""){
        let token = getCookie('csrftoken');

        $.ajax({ 
            type: 'POST',
            url: 'loginn',
            data: {usuario:usuario, contraseña:contraseña, csrfmiddlewaretoken: token},
            success: function(data){
                if (data == "True"){
                    window.location.href ="";
                }
                else{
                    alert("Favor de verificar tus datos");
                }
            }
        });
    }else{
        alert("Completa los campos primero");
    }
}

function getPreguntas(id){
    id = parseInt(id);
    if(id==1){
        string = '<div class="content bg-transparent">';
        string+= '<h4 class="py-3">Seccion de CSSLP</h4>';
        string+= '</div>'
        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Cual es la productividad actual?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value=150>25% o menos</option>';
        string+= '<option value=350>50% o menos</option>';
        string+= '<option value=450>75% o menos</option>';
        string+= '<option value=600>100%</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        string+ "";
        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Cuánto dinero será necesario invertir?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value=150>150K DLS o menos</option>';
        string+= '<option value=300>300k DLS o menos</option>';
        string+= '<option value=450>450k DLS o menos</option>';
        string+= '<option value=600>600 DLS o más</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        string+ "";
        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Como retorna la inversión en esta certificación CSSLP?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="600">En trabajo hora/hombre</option>';
        string+= '<option value="450">En productividad</option>';
        string+= '<option value="300">En personal operativo</option>';
        string+= '<option value="150">No retornará</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        string+ "";
        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Será necesario ofrecer preparación previa al área de Desarrollo?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="300">Si</option>';
        string+= '<option value="600">No</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        string+ "";
        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿El costo de la certificación correrá a cargo de la empresa o del usuario?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="300">Empresa</option>';
        string+= '<option value="600">Usuario</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        string+ "";
        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Cuantas áreas requeridas por la certificación dominan generalmente los programadores?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="150">1</option>';
        string+= '<option value="300">3</option>';
        string+= '<option value="450">5</option>';
        string+= '<option value="600">7</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        string+ "";
        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Cual es la productividad actual del departamento de desarrollo?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="150">25% o menos</option>';
        string+= '<option value="300">50% o menos</option>';
        string+= '<option value="450">75% o menos</option>';
        string+= '<option value="600">100%</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        string+ "";
        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Cuantos programadores se encuentran certificados en alguna certificación relacionada a seguridad?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="150">25 o menos</option>';
        string+= '<option value="300">50 o menos</option>';
        string+= '<option value="450">75 o menos</option>';
        string+= '<option value="600">100 o menos</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        string+ "";
        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Cuántas personas del área de Desarrollo conocen metodologías para el desarrollo de software seguro?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="150">25 o menos</option>';
        string+= '<option value="300">50 o menos</option>';
        string+= '<option value="450">75 o menos</option>';
        string+= '<option value="600">100 o menos</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        string+ "";
        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Las instalaciones se encuentran aseguradas de intrusos?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="600">Si</option>';
        string+= '<option value="300">No</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        string+ "";
        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Cuántos errores/amenazas de programación se encuentran en código por proyecto?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="600">5 o menos</option>';
        string+= '<option value="450">10 o menos</option>';
        string+= '<option value="300">15 o menos</option>';
        string+= '<option value="150">20 o menos</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        string+ "";
        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿El desarrollo incluye certificados digitales de seguridad?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="600">Si</option>';
        string+= '<option value="300">No</option>';
        string+= '</select>'
        string+= '</div>';
        string+= '</div>';

        string+ "";
        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Qué tan satisfecho se encuentra el cliente actualmente en una escala del 1 al 5?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="120">1</option>';
        string+= '<option value="240">2</option>';
        string+= '<option value="360">3</option>';
        string+= '<option value="480">4</option>';
        string+= '<option value="600">5</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        document.getElementsByClassName("content bg-transparent")[0].innerHTML=string;

    }else{
        string = '<div class="content bg-transparent">';
        string+= '<h4 class="py-3">Seccion de CMMI</h4>';
        string+= '</div>'
        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Es necesaria esta certificación para conseguir licitaciones?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="50">No</option>';
        string+= '<option value="100">Si</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Cual es la probabilidad de conseguir una licitación sin esta certificación?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="25">25% o menos</option>';
        string+= '<option value="50">50% o menos</option>';
        string+= '<option value="75">75% o menos</option>';
        string+= '<option value="100">100% o menos</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Será necesario ofrecer cursos de preparación al personal de Desarrollo?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="50">Si</option>';
        string+= '<option value="100">No</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Cuál se considera que es la madurez de los procesos de software?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="20">Inicial</option>';
        string+= '<option value="40">Gestionado</option>';
        string+= '<option value="60">Definido</option>';
        string+= '<option value="80">Muy gestionado</option>';
        string+= '<option value="100">Optimizar</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Con cuántos estándares/buenas prácticas cuenta la empresa?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="20">5 o menos</option>';
        string+= '<option value="40">10 o menos</option>';
        string+= '<option value="80">15 o menos</option>';
        string+= '<option value="60">25 o menos</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        

        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Cuantas KPI tiene actualmente la empresa?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="25">5 o menos</option>';
        string+= '<option value="50">10 o menos</option>';
        string+= '<option value="75">15 o menos</option>';
        string+= '<option value="100">20 o menos</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿La empresa cuenta con un proceso de procesamiento de datos?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="50">No</option>';
        string+= '<option value="100">Si</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Cuales son las estadísticas actuales de productividad por año?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="25">25% o menos</option>';
        string+= '<option value="50">50% o menos</option>';
        string+= '<option value="75">75% o menos</option>';
        string+= '<option value="100">100% o menos</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';

        string+= '<div class="hr-line-dashed"></div>';
        string+= '<div class="form-group row">';
        string+= '<label class="col-lg-8 col-form-label">¿Qué tan satisfecho se encuentra el cliente actualmente en una escala del 1 al 5?</label>';
        string+= '<div class="col-sm-4">';
        string+= '<select class="form-control m-b small form-control-sm" name="questions[]">';
        string+= '<option value="20">1</option>';
        string+= '<option value="40">2</option>';
        string+= '<option value="60">3</option>';
        string+= '<option value="80">4</option>';
        string+= '<option value="100">5</option>';
        string+= '</select>';
        string+= '</div>';
        string+= '</div>';


        document.getElementsByClassName("content bg-transparent")[0].innerHTML=string;

    }
}

function setMetricas(){
    let selects = document.getElementsByTagName("select");
    let valores = [];

    for(x=0; x<selects.length; x++){
        valores[x]=parseInt(selects[x].value)
    }

    valores = JSON.stringify(valores)

    localStorage.setItem("metricas", JSON.stringify(valores));
}