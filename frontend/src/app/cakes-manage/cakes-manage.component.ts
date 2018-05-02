import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CakesService} from '../_lib/cakes.service';
import {Cake} from '../_lib/Cake';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-cakes-manage',
    templateUrl: './cakes-manage.component.html',
    styleUrls: ['./cakes-manage.component.scss']
})
export class CakesManageComponent implements OnInit {

    private cakeId: number;
    private cake: Cake;

    public crumbs: any[] = [{

        path: '/dashboard',
        title: 'Home'

    }, {

        path: '/cakes',
        title: 'Cakes'

    }];

    public formGroup: FormGroup = new FormGroup({

        title: new FormControl('', Validators.required),
        description: new FormControl(),
        image: new FormControl()

    }, {updateOn: 'blur'});

    public constructor(private router: Router,
                       private route: ActivatedRoute,
                       private cakesService: CakesService) {

        this.route.params.subscribe((params) => {

            if (params.cakeId) {

                this.cakesService.getById(params.cakeId).subscribe((cake: Cake) => {

                    this.cake = cake;

                    this.formGroup.controls['title'].setValue(cake.title);
                    this.formGroup.controls['description'].setValue(cake.description);
                    this.formGroup.controls['image'].setValue(cake.image);

                });

            }

        });

    }

    public ngOnInit() {
    }

    public onButtonDeleteClick(e: any): void {

        this.cakesService.deleteById(this.cake.id).subscribe(() => {

            this.router.navigate(['/cakes']);

        });

    }

    public onButtonSaveClick(e: any): void {

        if(this.cake && this.cake.id) {

            this.cakesService.updateById(this.cake.id, this.formGroup.value).subscribe((e: any) => {

                console.log(e);

            });

        } else {

            this.cakesService.create(this.formGroup.value).subscribe((cake: Cake) => {

                this.router.navigate([`/cakes/${cake.id}`]);

            });

        }

    }

}
