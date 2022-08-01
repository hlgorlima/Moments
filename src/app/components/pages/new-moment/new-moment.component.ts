import { MomentService } from './../../../services/moment.service';
import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moments';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  btText = "COMPARTILHAR";

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment) {
    const formData = new FormData();
    formData.append("title", moment.title);
    formData.append("description", moment.description);

    if (moment.image) {
      formData.append("image", moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

    //exibir mensagem

    //redirecionar
  }
}
