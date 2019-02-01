import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
icon;
  constructor() { }

  ngOnInit() {
    this.icon =[{
name: 'Home',
icon: 'home'
    },
    {
      name: 'Wallet',
      icon: 'wallet'
          },
          {
            name: 'Asterisk',
            icon: 'asterisk'
                },
                {
                  name: 'Pencil',
                  icon: 'pencil'
                      },
                      {
                        name: 'Lightbulb',
                        icon: 'lightbulb'
                            },
                      {
                        name: 'Filter',
                        icon: 'filter'
                            },
                      {
                        name: 'Trash',
                        icon: 'trash'
                            },
                      {
                        name: 'Copy',
                        icon: 'copy'
                            },
                      {
                        name: 'World',
                        icon: 'world'
                            },
                      {
                        name: 'Zoom-in',
                        icon: 'zoom-in'
                            },

  ]
  }

}
