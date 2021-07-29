import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  mensajes: string;
  numeroConcatenar: string;
  operacion ='';
  a ='';
  b ='';
  c ='';
  d ='';
  e ='';
  borrar: string;
  ceContador = 0;
  objectoArray: any[] = [];
  constructor(public toastController: ToastController) {
    this.operacion='';
    this.borrar='0';
  }


  entervalueNumeros(value: string){
    if ((this.b ==='+') || (this.b==='-') || (this.b==='*') || (this.b==='/') || (this.b==='%')){
      this.d=this.d+value;
      this.operacion = this.operacion+value;
      this.c=this.d;
    }else{
      this.operacion = this.operacion+value;
      this.a= this.operacion;
    }
  }
  condition(value: string){
    this.operacion = this.operacion+value;
    console.log('condition' + this.operacion);

    this.b =value;
    console.log('' + this.b);
  }


  clear(){
    this.operacion ='0';
    this.a ='0';
    this.b ='0';
    this.c ='0';
    this.d ='0';
    this.e ='0';
  }

  divicionParados(){
    if(this.operacion !== ''){
      this.operacion = (parseFloat(this.operacion)/2).toString();
    }
  }

  raizCuadrada(){
    if(this.operacion !== ''){
      this.operacion =  Math.sqrt(parseFloat(this.operacion)).toString();
    }
  }

  cuadradonumero(){
    if(this.operacion !== ''){
      this.operacion =  Math.pow(parseFloat(this.operacion),2).toString();
    }
  }

  eliminarUltimo(){
    if(this.operacion !== ''){
        const texto: string = this.operacion.toString();
        this.operacion = texto.substring(0, texto.length - 1);
    }
  }

  resultOperaciones(){
    if (this.b === '+'){
      this.operacion = `${this.operacion} = ${(parseFloat(this.a)+parseFloat(this.c)).toString()}`;
      this.operacion = (parseFloat(this.operacion)+parseFloat(this.c)).toString();

      this.objectoArray.push(parseFloat(this.operacion)+parseFloat(this.c));
      console.log(this.objectoArray);
    }
    if (this.b === '%'){
      this.operacion = `${this.operacion} = ${(parseFloat(this.a)%parseFloat(this.c)).toString()}`;
      console.log(parseFloat(this.operacion));
      console.log(parseFloat(this.c));

      this.operacion = (parseFloat(this.operacion)%parseFloat(this.c)).toString();

      this.objectoArray.push(parseFloat(this.operacion)%parseFloat(this.c));
    }
    if (this.b === '-'){
      this.operacion = `${this.operacion} = ${(parseFloat(this.a)-parseFloat(this.c)).toString()}`;
      this.operacion = (parseFloat(this.operacion)-parseFloat(this.c)).toString();

     this.objectoArray.push(parseFloat(this.operacion)+parseFloat(this.c));
    console.log(this.objectoArray);
    }
    if (this.b === '*'){
      this.operacion = `${this.operacion} = ${(parseFloat(this.a)*parseFloat(this.c)).toString()}`;
      this.operacion = (parseFloat(this.operacion)*parseFloat(this.c)).toString();

     this.objectoArray.push(parseFloat(this.operacion)+parseFloat(this.c));
     console.log(this.objectoArray);
    }
    if (this.b === '/'){
      if (this.c === '0'){
        this.operacion = 'no existe division para cero';
      }else{
        this.operacion = `${this.operacion} = ${(parseFloat(this.a)/parseFloat(this.c)).toString()}`;
        this.operacion = (parseFloat(this.operacion)/parseFloat(this.c)).toString();
      }


     this.objectoArray.push(parseFloat(this.operacion)+parseFloat(this.c));
     console.log(this.objectoArray);
    }
  }
}
