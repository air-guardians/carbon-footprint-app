import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/challenge', title: 'Challenge', icon: 'dashboard', class: '' },
  { path: '/maps', title: 'Map CO2', icon: 'public', class: '' },
  { path: '/ecuador', title: 'Ecuador Footprint', icon: 'equalizer', class: '' },
  { path: '/me-footprint', title: 'Calculate Your Footprint', icon: 'fingerprint', class: '' },
  { path: '/team', title: 'Team', icon: 'groups', class: '' },
  { path: '/code', title: 'GitHub Code', icon: 'code', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
