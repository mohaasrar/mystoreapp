import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { CheckoutFormComponent } from './components/cart/checkout-form/checkout-form.component';
import { AddtocartComponent } from './components/addtocart/addtocart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ConfirmationComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductItemDetailComponent,
    HeaderComponent,
    CartItemComponent,
    CheckoutFormComponent,
    AddtocartComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
