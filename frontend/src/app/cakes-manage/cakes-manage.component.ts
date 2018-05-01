import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-cakes-manage',
    templateUrl: './cakes-manage.component.html',
    styleUrls: ['./cakes-manage.component.scss']
})
export class CakesManageComponent implements OnInit {

    public crumbs: any[] = [{

        path: '/dashboard',
        title: 'Home'

    }, {

        path: '/cakes',
        title: 'Cakes'

    }];

    public constructor() {
    }

    public ngOnInit() {
    }

}
