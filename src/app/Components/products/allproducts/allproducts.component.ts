import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
// import { EmitDataService } from '../../setting/emit.service'
import { EmitService } from '../../settings/emit.service';

@Component({
  selector: 'app-all-products',
  imports: [NgForOf,CommonModule],
  templateUrl: './allproducts.component.html',
  styleUrl: './allproducts.component.css'
})
export class AllProductsComponent implements OnInit{
  constructor(private productService :ProductService,private emitService: EmitService){}
  products:any[]=[];

  ngOnInit():void{
    this.productService.getAllProducts().subscribe({
      next:(data)=>{
        console.log("product card",data);
        this.products=data.products;
        this.emitService.dataResiver(this.products);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe({
      next:(data)=>{
        this.products = this.products.filter(p => p.id !== id);
      },
      error:(err)=>{console.log(err)}
    })
  }
}
