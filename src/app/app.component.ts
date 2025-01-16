import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'members-front';

  selectMember= { id:0, name:'', surname:''}

  members = [
    {
      name: 'Member 01',
      id: 1,
      surname: 'Ciclano',
      photo: 'https://www.minhaapp.com/photo1',
    },
    {
      name: 'Member 02',
      id: 2,
      surname: 'Beltrano',
      photo: 'https://www.minhaapp.com/photo2',
    },
    {
      name: 'Member 03',
      id: 3,
      surname: 'Fulano',
      photo: 'https://www.minhaapp.com/photo3',
    },
  ];

  constructor(private api: ApiService) {
    this.getMembers();
  }
  getMembers = () => {
    this.api.getAllMembers().subscribe({
      next: (data) => {
        this.members = data;
      },
      error: (error) => {
        console.log('aconteceu um erro', error.message);
      },
    });
  };

  memberClicked = (member: {id:number}) => {
    this.api.getMember(member.id).subscribe({
      next: (data) => {
        this.selectMember = data
        console.log(data);
      },
      error: (error) => {
        console.log('aconteceu um erro', error.message);
      },
    });
  };
}
