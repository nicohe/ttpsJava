import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NewMenu } from '../../../models/new-menu/new-menu';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MenusService } from '../../../services/menus-service/menus-service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './menu-create.component.html',
  styleUrl: './menu-create.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MenusService],
})
export class MenuCreateComponent implements OnInit {
  menuForm: FormGroup;
  createSuccessMessage: string = '';
  createErrorMessage: string = '';
  selectedFile: File | null = null;

  constructor(private menuService: MenusService, private router: Router) {
    this.menuForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
      ]),
      precio: new FormControl('', [Validators.required, Validators.min(0)]),
      foto: new FormControl(''),
    });
  }

  ngOnInit() {}

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append(
      'menu',
      new Blob(
        [
          JSON.stringify({
            nombre: this.menuForm.get('nombre')?.value,
            precio: this.menuForm.get('precio')?.value,
          }),
        ],
        { type: 'application/json' }
      )
    );

    if (this.selectedFile) {
      formData.append('foto', this.selectedFile);
    }

    this.menuService.createMenu(formData).subscribe(
      (response) => {
        let id = response;
        this.createSuccessMessage = 'Menú creado exitosamente!';
        console.log('Menú creado exitosamente:', id);
        this.router.navigate(['/menus/', id]);
      },
      (error) => {
        this.createErrorMessage = 'Error al crear el menú.';
        console.error('Error al crear el menú:', error);
      }
    );
  }
}
