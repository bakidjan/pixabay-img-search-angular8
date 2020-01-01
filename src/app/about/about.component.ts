import { Component, OnInit } from '@angular/core';
import {CommentaireService} from '../services/commentaire.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  comments =[];
  private commentaire :string;

  constructor( private commentService : CommentaireService) {
    this.comments = this.commentService.getComment();
  }

  ngOnInit() {
  }

  onAddComments(c) {
    c.date = new Date()
    this.commentaire = c.value;
    this.commentService.addComment(c);
    this.commentaire=""
  }

}
