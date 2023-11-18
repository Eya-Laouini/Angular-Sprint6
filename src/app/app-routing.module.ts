import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { foodComponent } from './food/food.component';
import { AadFoodComponent } from './aad-food/aad-food.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { RechercheParChoixComponent } from './recherche-par-choix/recherche-par-choix.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeChoixComponent } from './liste-choix/liste-choix.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FoodGuard } from './food.guard';
import { AllUsersComponent } from './all-users/all-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { VerificationcodeComponent } from './verificationcode/verificationcode.component';

const routes: Routes = [
  {path: "FOOD", component : foodComponent},
  {path: "aad-food", component : AadFoodComponent,canActivate:[FoodGuard]},
  {path: "", redirectTo: "FOOD", pathMatch: "full"},
  {path: "updatefood/:id", component: UpdateFoodComponent},
  {path: "rechercheParChoix", component : RechercheParChoixComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeChoix", component : ListeChoixComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: 'all-users', component: AllUsersComponent},
  {path:'updateUser/:id',component:EditUserComponent},
  {path:'addusers',component:AddUsersComponent},
  {path:'verificationcode',component:VerificationcodeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
