import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [NgIf],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
  mostrarModal: boolean = false

  loginFeito() {
    this.mostrarModal = !this.mostrarModal
  }
}
