import { Component } from '@angular/core';
import { ApiConexService } from '../../../services/api-conex.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  txt_correo: string = '';
  txt_password: string = '';

  constructor(private api: ApiConexService, private router: Router) {}

  onLogin() {
    const body = {
      "Correo": this.txt_correo,
      "Password": this.txt_password
    };

    this.api.login(body).subscribe({
      next: (res) => {
        if (res.success) {
          console.log('Acceso concedido');
          this.router.navigate(['/PanelAdmin']);
        } else {
          alert(res.message);
        }
      },
      error: (err) => {
        console.error('Error de conexión', err);
        alert('Credenciales incorrectas o error en el servidor');
      }
    });
  }
}