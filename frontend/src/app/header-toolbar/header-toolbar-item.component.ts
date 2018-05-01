import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({

    selector: 'app-header-toolbar-item',
    encapsulation: ViewEncapsulation.Emulated,
    template: `

        <li class="nav-item">

            <a class="nav-link" [routerLink]="[path]">

                <!--<i class="icon ion-ios-analytics-outline"></i>-->
                <span>{{ title }}</span>

            </a>

        </li>

    `,
    styles: []

})
export class HeaderToolbarItemComponent {

    @Input() public title: string;
    @Input() public path: string;

}
