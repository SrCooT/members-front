import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-members-details',
  imports: [CommonModule],
templateUrl: './members-details.component.html',
  styleUrl: './members-details.component.css'
})
export class MembersDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadMember()
  }

  loadMember() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }
}
