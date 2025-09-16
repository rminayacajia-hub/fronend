import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../Interfaces/iusuario';
import { ReporteService } from '../../Services/reporte.service';
import { PdfService } from '../../Services/pdf.service';


@Component({
  selector: 'app-reportes.component',
  imports: [],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent implements OnInit {
  cargando=false;

  lista_usuarios:IUsuario[]=[];

  constructor(private reporteService:ReporteService, private pdfServicio:PdfService){}

  ngOnInit(): void {
    this.cargando=true

    try{
      this.reporteService.todos().then((lista)=> (this.lista_usuarios= lista))
    } catch (error){
        console.log(error);
    } finally{
      this.cargando=false;
    }
  }
async generarPDF() {
    this.cargando = true;
    try {
      if (this.lista_usuarios.length < 0) {
        this.reporteService.todos().then((lista) => (this.lista_usuarios = lista));
      }
      const blob = await this.pdfServicio.generarPDF(this.lista_usuarios);
      this.pdfServicio.descrgarBlob(blob);
    } catch (e) {
      console.log('error', e);
      alert('No se puedo generar el pdf');
    } finally {
      this.cargando = false;
    }
  }
}
