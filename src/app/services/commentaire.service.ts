import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor() { }

  infos = {
    nom: 'Diallo',
    email: 'diallo@com',
    tel: 60504030201
  };

  comments = [
    {
      date: new Date(),
      message: 'A',
    },
    {
      date: new Date(),
      message: 'B',
    },
    {
      date: new Date(),
      message: 'C',
    }
  ];

  addComment(c){
    this.comments.push(c);
  }

  getComment(){
    return this.comments;
  }

  getInfos(){
    return this.infos;
  }
}
