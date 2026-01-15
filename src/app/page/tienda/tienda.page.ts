import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonButton, 
  IonIcon,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonChip,
  IonLabel,
  IonBadge,
  IonFab,
  IonFabButton,
  IonBackButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cartOutline, filterOutline, heart, heartOutline, addOutline, star } from 'ionicons/icons';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonButton, 
    IonIcon,
    IonSearchbar,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonChip,
    IonLabel,
    IonBadge,
    IonBackButton
  ]
})
export class TiendaPage implements OnInit {

  categoriaSeleccionada: string = 'Todos';
  
  categorias = ['Todos', 'Vestidos', 'Blusas', 'Pantalones', 'Accesorios'];

  // Base de datos simulada con URLs de imágenes REALES y FUNCIONALES
  productos = [
    { 
      id: 1, 
      nombre: 'Vestido Floral Verano', 
      precio: 35.00, 
      categoria: 'Vestidos', 
      img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=400&q=80', 
      rating: 4.8 
    },
    { 
      id: 2, 
      nombre: 'Blusa Blanca Casual', 
      precio: 22.50, 
      categoria: 'Blusas', 
      // FOTO CORREGIDA: Blusa blanca
      img: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=400&q=80', 
      rating: 4.5 
    },
    { 
      id: 3, 
      nombre: 'Jeans Skinny High', 
      precio: 45.00, 
      categoria: 'Pantalones', 
      img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80', 
      rating: 4.7 
    },
    { 
      id: 4, 
      nombre: 'Collar Dorado', 
      precio: 15.00, 
      categoria: 'Accesorios', 
      // FOTO CORREGIDA: Joyería
      img: 'https://images.unsplash.com/photo-1602751584552-8ba43d5c38f4?auto=format&fit=crop&w=400&q=80', 
      rating: 4.2 
    },
    { 
      id: 5, 
      nombre: 'Vestido Noche Negro', 
      precio: 55.00, 
      categoria: 'Vestidos', 
      img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=400&q=80', 
      rating: 4.9 
    },
    { 
      id: 6, 
      nombre: 'Top Deportivo', 
      precio: 18.00, 
      categoria: 'Blusas', 
      img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=400&q=80', 
      rating: 4.4 
    },
  ];

  constructor() { 
    addIcons({ cartOutline, filterOutline, heart, heartOutline, addOutline, star });
  }

  ngOnInit() {
  }

  get productosFiltrados() {
    if (this.categoriaSeleccionada === 'Todos') {
      return this.productos;
    }
    return this.productos.filter(p => p.categoria === this.categoriaSeleccionada);
  }

  cambiarCategoria(cat: string) {
    this.categoriaSeleccionada = cat;
  }

  agregarAlCarrito(producto: any) {
    console.log('Agregado al carrito:', producto.nombre);
  }

}