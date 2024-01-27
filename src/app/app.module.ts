import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './service/product.service';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/product/product.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
