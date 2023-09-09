import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { EditNewProductComponent } from './edit-new-product/edit-new-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductComponent } from './product.component';

const routes: Routes = [{
  path: '',
  component: ProductComponent,
  children:[
    {
      path: 'crear-producto',
      component: AddNewProductComponent,
    },
    {
      path: 'editar-producto/:id',
      component: EditNewProductComponent,
    },
    {
      path: 'lista-productos',
      component: ListProductsComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
