import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.getImagenes();
    this.imagenes = [
      { url: 'https://images2.alphacoders.com/792/792609.jpg', stock: 5, active: false },
      { url: 'https://cdn.wallpapersafari.com/83/53/bnjZ5w.jpg', stock: 0, active: false },
      { url: 'https://cdn.wallpapersafari.com/72/25/pZEl2N.jpg', stock: 15, active: true }
    ]
  }
  imagenes: any[] | undefined;
  opcionSeleccionada: string = 'opcion2';
  getImagenes() {
    /// ir a la base de dtaos por mis imagenes
    this.imagenes = [];
  }
}
