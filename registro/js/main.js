// <!-- <div class="col-md-4" >
// <select for="validationDefault01" class="form-select" aria-label="Default select example" required>
//   <option selected>estado academico</option>
//   <option value="1">estudiante</option>
//   <option value="2">graduado</option>
//   <option value="3">no estudio</option>
// </select>
// </div> -->

/* <div class="col-md-4" >
<select for="validationDefault01" class="form-select" aria-label="Default select example" required>
  <option selected>estado laboral</option>
  <option value="1">desempleado</option>
  <option value="2">actualmente trabajando</option>
</select>
</div>
 */
// Crear un nuevo elemento de entrada (input)
// let main= document.getElementById("main")

// Establecer el tipo de entrada (input) a texto


// // Agregar el elemento de entrada (input) al documento

// var labelElement = document.createElement("label");

// // Establecer el contenido del label
// var inputElement = document.createElement("input");
// labelElement.textContent = "ingrese el nombre de la empresa";

// inputElement.setAttribute("type", "text");
// document.body.appendChild(labelElement);
// document.body.appendChild(inputElement);
/* <select  id="opccionRol"  for="validationDefault01" class="form-select" aria-label="Default select example" required>
<option selected>eliga su rol</option>
<option id="opcion1" value="1">postulante</option>
<option id="opcion2"  value="2">empleador comercial</option>
<option id="opcion3" value="3">empleador no cormecial</option>
</select> */


// let opcionRegitro=document.getElementById("opcionRol")
// opcionRegitro.addEventListener('change',()=>{



// let estadol=`
/* <select>
<option selected>estado laboral</option>
<option value="1">desempleado</option>
<option value="2">actualmente trabajando</option>
</select> */
// // `

// if (opcionRegitro == 1){
//     document.body.appendChild(estadoLaboral);
// }
// })
// let selectElement = document.createElement("select");

// let option1 = document.createElement("option");
// option1.text = "desempleado";
// selectElement.appendChild(option1);

// let option2 = document.createElement("option");
// option2.text = "actualmente trabajando";
// selectElement.appendChild(option2);

// // Agrega más opciones según sea necesario
// // Adjuntar el select a un elemento existente
// let container = document.getElementById("container");
// container.appendChild(selectElement);

// // Adjuntar el select al cuerpo (body) del documento
// document.body.appendChild(selectElement);
let opcionRegitro=document.getElementById("opccionRol")
 opcionRegitro.addEventListener('change',()=>{
 let valorSelect=document.getElementById("opccionRol").value
 if(valorSelect==1){
    let contenedor=document.getElementById("estadoLaboral");
    contenedor.innerHTML+=`<div class="col-md-4">
    <select for="validationDefault01" class="form-select" aria-label="Default select example" required>
    <option selected>estado laboral</option>
    <option value="1">desempleado</option>
    <option value="2">actualmente trabajando</option>
    </select>
    </div>`
 }else if(valorSelect==2){  
    let Rubro=document.getElementById("rubro");
    Rubro.innerHTML+=`<div class="col-md-4">
    <label for="validationDefault01" class="form-label">rubro</label>
    <input
      type="text"
      class="form-control"
      id="validationDefault01"
      placeholder="carniceria"
      value="carniceria"
      required
    />
  </div>`
 }else{
    
 }


});

