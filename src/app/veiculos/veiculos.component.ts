import { VeiculosserviceService } from './../veiculosservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {
  /*consulta = [
    {
      id: '1',
      placa: 'rodrigo',
      chassi: 'grilo',
      renavem: 'lapo',
      modelo: 'model',
      marca: 'madasd',
      ano: '2020'
    }
  ];*/
  consulta: Array<any>;

  constructor(private consultaservice: VeiculosserviceService) { }

  ngOnInit(): void {
  }

  listarDados(){
    this.consultaservice.listar(Component.placa).subscribe(res => {
      console.log(res);
    });
  }
}
