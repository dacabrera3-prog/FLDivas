import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonCard,
  IonCardContent,
  IonFooter
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bagHandleOutline, searchOutline, heartOutline, arrowForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
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
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    
  ]
})
export class InicioPage implements OnInit {

  // Categorías de ejemplo para mostrar en el inicio
  categorias = [
    { id: 1, nombre: 'Vestidos', img: 'assets/img/cat-vestidos.jpg', color: 'var(--ion-color-tertiary)' },
    { id: 2, nombre: 'Blusas', img: 'assets/img/cat-blusas.jpg', color: 'var(--ion-color-secondary)' },
    { id: 3, nombre: 'Accesorios', img: 'assets/img/cat-accesorios.jpg', color: 'var(--ion-color-warning)' }
  ];

  constructor(private router: Router) { 
    // Registrar iconos a usar
    addIcons({ bagHandleOutline, searchOutline, heartOutline, arrowForwardOutline });
  }

  ngOnInit() {
  }

  irATienda() {
    this.router.navigate(['/tienda']);
  }

}