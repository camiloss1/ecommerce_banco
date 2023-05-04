import { Component, OnInit } from '@angular/core';
import { ProductUseCase } from 'src/app/domain/usecases/product';
import { Userusecase } from 'src/app/domain/usecases/userusecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _productUseCase: ProductUseCase) { }
  ngOnInit(): void {
    this.getImagenes();

  }
  imagenes: any[] | undefined;
  // opcionSeleccionada: string = 'opcion2';
  getImagenes() {
    /// ir a la base de dtaos por mis imagenes
    this._productUseCase.getProductImagenes().subscribe((data: any) => {
      console.log(data);
      this.imagenes = data.imagenes;
    })
  }
}
