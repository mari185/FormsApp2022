import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro: FormGroup;

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O campo deve ter pelo menos três caracteres.' }
    ],
    cpf: [
      { tipo: 'required', mensagem: 'O campo cpf é obrigatório.' }
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo email é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail inválido' }
    ],
    senha: [
      { tipo: 'required', mensagem: 'O campo senha é obrigatório.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos seis caracteres.' },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo oito caracteres.' }
    ],
    confirmaSenha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar sua senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos seis caracteres.' },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo oito caracteres.' }
    ],
  };

  constructor(private formBuilder: FormBuilder) {
    this.formRegistro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])],
      confirmaSenha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])]
    });
  }

  ngOnInit() {
  }

  salvarRegistro() {
    console.log('Formulário: ', this.formRegistro.valid);
  }

}
