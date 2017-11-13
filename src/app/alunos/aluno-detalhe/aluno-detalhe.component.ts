import { AlunosModule } from './../alunos.module';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@Angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Aluno } from './../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: Aluno;
  incricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService

  ) { }

  ngOnInit() {
    // this.incricao = this.route.params.subscribe(
    //   (params: any) => {
    //     let id = params['id'];

    //     this.aluno = this.alunosService.getAluno(id);
    //   }
    // );

    console.log('ngOnInit: AlunoDetalheComponent');

    this.incricao = this.route.data.subscribe(
      (info: {aluno: Aluno}) => {
        console.log('Recebendo o objeto Aluno do resolver');
        this.aluno = info.aluno;
      }
    );
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy(){
    this.incricao.unsubscribe();
  }

}
