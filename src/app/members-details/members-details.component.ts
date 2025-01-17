import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-members-details',
  imports: [CommonModule],
  templateUrl: './members-details.component.html',
  styleUrls: ['./members-details.component.css'],
})
export class MembersDetailsComponent implements OnInit {
  select_Member = { name: '', surname: '' };

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    console.log('MembersDetailsComponent initialized');
    this.loadMember();
  }

  loadMember() {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Conversão para número
    if (!id) {
      console.error('ID inválido ou não fornecido.');
      return;
    }

    this.api.getMember(id).subscribe({
      next: (data) => {
        console.log(data);
        this.select_Member = data;
      },
      error: (error) => {
        console.error('Aconteceu um erro:', error.message);
      },
    });
  }
}