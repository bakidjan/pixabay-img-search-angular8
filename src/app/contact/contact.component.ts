import { Component, OnInit } from '@angular/core';
import {CommentaireService} from '../services/commentaire.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  infos : any;
  constructor(private commentService : CommentaireService) {
    this.infos = this.commentService.getInfos();
  }

  ngOnInit() {
  }

}
