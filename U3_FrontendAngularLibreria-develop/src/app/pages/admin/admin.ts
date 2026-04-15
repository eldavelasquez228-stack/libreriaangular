import { Component, OnInit } from '@angular/core';
import { ApiConexService } from '../../../services/api-conex.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class AdminComponent implements OnInit {
  listaLibros: any[] = [];
  listaCategorias: any[] = [];

  constructor(private api: ApiConexService) {}

  ngOnInit(): void {
    this.obtenerDatosInciales();
  }

  obtenerDatosInciales() {
    this.api.ListarLibro().subscribe({
      next: (res) => {
        this.listaLibros = res.data ? res.data : res;
      },
      error: (e) => console.error('Error cargando libros', e)
    });

    this.api.ListarCategoria().subscribe({
      next: (res) => {
        this.listaCategorias = res.data ? res.data : res;
      },
      error: (e) => console.error('Error cargando categorías', e)
    });
  }
}