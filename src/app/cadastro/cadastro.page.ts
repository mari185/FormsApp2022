import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  formCadastro: FormGroup;

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O campo deve ter pelo menos três caracteres.' }
    ],
    descricao: [
      { tipo: 'required', mensagem: 'O campo descrição é obrigatório.' }
    ],
    validade: [
      { tipo: 'required', mensagem: 'O campo validade é obrigatório.' }
    ],
    preco: [
      { tipo: 'required', mensagem: 'O campo preço é obrigatório.' }
    ],
  };

  constructor(private formBuilder: FormBuilder) {
    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      descricao: ['', Validators.compose([Validators.required])],
      validade: ['', Validators.compose([Validators.required])],
      preco: ['', Validators.compose([Validators.required])]
    });
   }

  ngOnInit() {
  }

  salvarRegistro() {
    console.log('Formulário: ', this.formCadastro.valid);
  }

}
