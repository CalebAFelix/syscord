import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from 'src/app/services/auth.service';
import { TiposDeAtividadeService } from '../../services/tipos-de-atividade.service';

import { TipoDeAtividade } from 'src/app/types/TipoDeAtividade';
import { Usuario } from 'src/app/types/Usuario';
import { Atividade } from '../../types/Atividade';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.scss']
})
export class AtividadeComponent implements OnInit {

  title: string = 'Adicionar Atividade';
  atividadeForm: FormGroup;
  tiposDeAtividade: TipoDeAtividade[] = [];
  triedToSubmit: boolean = false;
  usuario: Usuario | undefined;
  @Input()
  atividades: Atividade[] = [];
  @Input()
  atividade: Atividade | undefined;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private tiposDeAtividadeService: TiposDeAtividadeService,
    private authService: AuthService
  ) { 
    this.atividadeForm = this.formBuilder.group({
      horasTotais: [0, [Validators.required, Validators.min(1)]],
      tipoDeAtividade: ['', Validators.required],
      file: [null, Validators.required],
      horasValidas: [0]
    });
  }

  ngOnInit(): void {
    this.usuario = this.authService.getUser();
    if(this.usuario?.tipo === 'COORDENADOR' && this.atividade) {
      this.title = 'Validar Atividade';
    }
    if(this.atividade) this.popularFormulario(this.atividade);
    this.calcularHorasValidas();
    if(this.usuario?.id) {
      this.tiposDeAtividadeService.listAllByCursoId(this.usuario?.cursoId).subscribe(tiposDeAtividade => {
        this.tiposDeAtividade = tiposDeAtividade;
        if(this.atividade) {
          this.atividadeForm.patchValue({tipoDeAtividade: this.tiposDeAtividade.find(tp => tp.id === this.atividade?.tipoDeAtividade.id)});
        }
      });
    }
  }

  popularFormulario(atividade: Atividade) {
    this.atividadeForm.patchValue({
      horasTotais: atividade.horasTotais,
      file: atividade.file,
      horasValidas: this.calcularHorasValidas()
    });
  }

  onChangeFile(event: any) {
    this.atividadeForm.get('file')?.markAsTouched();
    const files = <FileList> event.srcElement.files;
    var label = document.getElementById('documento-label');
    if(files.length > 0) {
      label && (label.innerHTML = files[0].name);
      this.atividadeForm.patchValue({
        file: files[0]
      });
    }else{
      label && (label.innerHTML = 'Selecione um arquivo');
      this.atividadeForm.patchValue({
        file: null
      });
    }
  }

  async onSubmit() {
    this.triedToSubmit = true;
    if(this.atividadeForm.valid === false) return;
    let formData = this.atividadeForm.value;
    formData.fileName = formData.file.name;
    formData.file = await this.toBase64(formData.file);
    this.activeModal.close(formData);
  }

  toBase64 = (file: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  isValidField(field: string) {
    if(!this.atividadeForm.get(field)?.touched && !this.triedToSubmit) return;
    return this.atividadeForm.get(field)?.valid;
  }

  isInvalidField(field: string) {
    if(!this.atividadeForm.get(field)?.touched && !this.triedToSubmit) return;
    return !this.atividadeForm.get(field)?.valid;
  }

  getErrorField(field: string, validator: string) {
    let errors = this.atividadeForm.get(field)?.errors;
    if(!errors) return;
    return errors[validator];
  }

  touchedField(field: string) {
    this.atividadeForm.get(field)?.markAsTouched();
  }

  calcularHorasValidas () {
    let horas = 0;
    if(this.atividade && this.atividades) {
      let horasPorAtividade = this.atividade.tipoDeAtividade?.regraDeAtividade?.horasPorAtividade || 0;
      if(this.atividade.horasTotais > horasPorAtividade) {
        horas = horasPorAtividade;
      } else {
        horas = this.atividade.horasTotais;
      }
      let atividadesDoMesmoTipo = this.atividades.filter(a => a.tipoDeAtividade.id === this.atividade?.tipoDeAtividade.id);
      let qtdMaxAtividades: number = this.atividade.tipoDeAtividade.regraDeAtividade?.qtdMaxAtividades || 0;
      if(qtdMaxAtividades > 0 && atividadesDoMesmoTipo.length >= qtdMaxAtividades) {
        horas = 0;
      }
    }
    return horas;
  }
}
