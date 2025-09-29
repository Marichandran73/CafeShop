import { Component ,OnInit } from '@angular/core';
import { ProductService, Product } from './service/product.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  form!: FormGroup;
  selectedFile!: File;

onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}

  constructor(private productService: ProductService, private fb: FormBuilder, private route:Router) {}

  AddProducts() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],    
      category: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.AddProducts();
    
  }

  SubmitProduct() {
    const product: Product =this.form.value;

    this.productService.addProduct(product, this.selectedFile).subscribe({   
      next: (data:Product) => {
        console.log('Product added successfully', data);
        this.form.reset();
      },
      error: (error: HttpErrorResponse) => {
        console.error("Product adding error:", error);
        alert('Adding product failed');
      }
    });
  }

  getProducts(){
    this.route.navigate(['/admindashboard/allProduct']);
  }
}
