/* TEST 01
function henryParking(arr) {
  // Tu código aquí:
  let filaParking= new Queue();
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "string") filaParking.enqueue(arr[i]);
    if(arr[i] === "OUT") {
    if (filaParking.size()=== 0) return false;
    filaParking.dequeue();
}
  }
      return filaParking;
}
  
  */

/* TEST 02
const calcularIndice = (n) => {
  // Tu código aquí:
 if (n<0){ return false;
  }else if (n === 0){ return 15;
    }else if (n === 1){ 
      return 25;
 } else{
          return calcularIndice(n-1) + calcularIndice(n-2);
}
};
*/

/*TEST 03
function apilarCajas(arr) {
  // Tu código aquí

      let pilasDeCajas= new Stack();
      let pesoTotal = 0;
      if(arr.length === 0)
         return "Error";
      arr.forEach(objeto => {
          pesoTotal += objeto.peso;
          pilasDeCajas.push(objeto.nombre);
        });
     if (pesoTotal> 50) return "No se puede crear la pila";
          return pilasDeCajas;
    }
*/
/*TEST 04
function devuelveMayores(lista, valor) {
  // Tu código aquí:  
    let cantidadAEvaluar = 0;
    let nodoActual = lista.head;
    while(nodoActual){ if(nodoActual.value > valor) {
      cantidadAEvaluar++;      
  }
    nodoActual = nodoActual.next;
}
    if (cantidadAEvaluar === 0) return "Sin precios";
      
      return cantidadAEvaluar;
};
*/
//TEST 05
/*function cobrarClientes(clientes) {
  // Tu código aquí:
    let filaDeClientes = [];
    
    while(clientes.array[0]['dinero'] >= clientes.array[0]['precioProductos']) {    
      filaDeClientes.push(clientes.array[0]['nombre']);
      clientes.dequeue();
      if(clientes.size() === 0) return false;
    }
        return filaDeClientes;
    }
  */

    //TEST 06
    /*
   BinarySearchTree.prototype.agregarProductos = function (nombreProducto, productos) {
  // Tu código aquí:
 
  let newTree = new BinarySearchTree(nombreProducto);
  if (productos[nombreProducto] === undefined){
    return "Producto inexistente"}
   if(nombreProducto === this.value){
    return "Ya existe el producto"};
   if(productos[nombreProducto] <productos[this.value]){                       
    if(this.left){
      return this.left.agregarProductos(nombreProducto, productos);
    }else{
       this.left = newTree;
    }
      } else if(this.right){
         return this.right.agregarProductos(nombreProducto, productos); 
      }else{ 
         this.right = newTree;
        }     
        return newTree;    
      };
 */

    
      /*TEST 07
function ordenarPrecios(arr) {
  // Tu código aquí:
  if (arr.length <2) return arr;

  let equal = [];
  let right = [];
  let left =  [];
  let pivot = arr[Math.floor((Math.random()*(arr.length)))];
                                         //if(arr.includes(0)) return false;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) return false;  
    if(arr[i] > pivot){
          right.push(arr[i]);
        }else if(arr[i]< pivot){
            left.push(arr[i])
          }else{
            equal.push(arr[i]);
          }
        }
      return ordenarPrecios(left).concat(equal).concat(ordenarPrecios(right));
  }
*/

//TEST 08  (ERROR: DEVUELVE UN ARRAY CON EL NRO MAXIMO Y DEBERIA RETORNAR SOLO EL VALOR)
/*let nodosAVisitar = [];      // nodos a visitar
        let nodosVisitados = []; // nodos visitados
        let nodoActual = this;
        nodosAVisitar.push(nodoActual);
          
        while(nodosAVisitar.length != 0) {
          nodoActual = nodosAVisitar.pop();
          // Agrego el nodo a la lista de nodos visitados
          nodosVisitados.push(nodoActual.value);
          // Si hay hijo izquierdo, lo agrego a la pila para visitar
          if (nodoActual.right) nodosAVisitar.push(nodoActual.right);
          // Idem para derecho
          if (nodoActual.left) nodosAVisitar.push(nodoActual.left);
        }
        // Ordeno el array de mayor a menor
        nodosVisitados.sort((a, b) => (a < b ? 1 : -1));
        // Dejo solo los dos primeros items del array
        let numMaximo = nodosVisitados.splice(0,1);
         return numMaximo;
        //o

          //return nodosVisitados(0);
          */

          //TEST 09
          /*
          if(precio <= 0) return 'Error';
    if(this.value === precio) return true;
            if (this.value < precio && this.right !== null) {
      
       return this.right.searchPrice(precio)
      } else if (this.value > precio && this.left !== null){
      
        return this.left.searchPrice(precio);
      }
        return false;
       }
          */

       //TEST 10
       /*
       function ingresoEmpleado(horario) {
// Tu código aquí:
    return function ingresosHorario(empleados){
        var arrNombres = [];
        for (let i = 0; i<empleados.length; i++) {
            if(empleados[i]['ingresoA'] < horario){
                arrNombres.push(empleados[i]['nombre']);
            }
        }
        return arrNombres;
    }
}
       */