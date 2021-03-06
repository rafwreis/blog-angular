// importando dependencias do angular core
import { Component, OnInit } from '@angular/core';
// importando dependencias de rota
import { Router, ActivatedRoute } from '@angular/router';
// importando o provider do blog
import { BlogService } from '../../providers/blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  // declarando uma variável objeto do tipo any que irá armazenar o post assim que for resolvido pelo provider
  post: any = {};

  constructor(
    // instanciando a rota ativa
    public activatedRoute: ActivatedRoute,

    // instanciando o roteador
    public router: Router,

    // instanciando nosso provider de blog
    public blog: BlogService) {

    // chama a rota ativa
    this.activatedRoute
      .params
      // se inscreve para quando for resolvida
      .subscribe(
        // recebe os parametros
        params => {
          // declara uma variável id baseada no parametro id da url
          let id = params['id'];

          // pego o post em questão
          this.blog.post(id)
            // quando resolvido
            .then((post: any) => {
              // liga os dados na view (template)
              this.post = post;
            })
            // tratamento de erro
            .catch((e) => {
              console.error(e);
              // força navegação para página 404
              this.router.navigate(['/404']);
            })
        });
  }

  ngOnInit() {
  }

}