import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    // this.route.paramMap.subscribe(params => {
    //   const
    // })

  }

}
