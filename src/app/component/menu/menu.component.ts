import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation/navigation.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public navigationService: NavigationService) { }

  ngOnInit(): void {
  }

}
