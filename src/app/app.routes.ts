import { Routes } from '@angular/router';
import { TemporadaComponent } from './pages/TemporadaP/temporada/temporada.component';
import { CatalogoComponent } from './pages/CatalogoP/catalogo/catalogo.component';

export const routes: Routes = [
    {path: "", component: TemporadaComponent},
    {path: "catalogo", component: CatalogoComponent},
    {path: '**', redirectTo: ""}
    
];
