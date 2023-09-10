import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage implements OnInit {

  public correo: string ='';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public ingresarPaginaValidarRespuestaSecreta():void{
    const usuario = new usuario('','','','','')
    const usuarioEncontrado = usuario.buscarUsuarioPorCorreo(this.correo);
    if(!usuarioEncontrado){
      alert('El correo no existe dentro de as cuentas ')
    }
    this.router.navigate(['/respuesta']);
  }
}
