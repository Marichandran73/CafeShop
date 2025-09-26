import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AdmindashboardComponent } from './Components/admindashboard/admindashboard.component';

import { UserListComponent } from './Components/userlist/userlist.component'
import { AddUserComponent } from './Components/userlist/adduser/adduser.component';
import { EditUserComponent } from './Components/userlist/edituser/edituser.component';
import { UserviewComponent } from './Components/userlist/userview/userview.component';

import { ProductsComponent } from './Components/products/products.component';
import { AllProductsComponent } from './Components/products/allproducts/allproducts.component';

import { SettingsComponent } from './Components/settings/settings.component';


import { authGuard } from './Components/login/guard/auth.guard';



export const routes: Routes = [
    {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
    },{
        path:'login',
        component:LoginComponent
    },{
        path:'dashboard',
        component:DashboardComponent
    },{
        path:'admindashboard',
        component:AdmindashboardComponent,
        canActivate: [authGuard],
        children:[
            {path:'userlist',
                component:UserListComponent,
                canActivate: [authGuard],
            },
            {path:'addUser',
                component:AddUserComponent,
                canActivate: [authGuard],
            },
            {path:'EditUser/:id',
                component:EditUserComponent,
                canActivate: [authGuard],
            },
            {path:'userView/:id',
                component:UserviewComponent,
                canActivate: [authGuard],
            },
            {path:'productList',
                component:ProductsComponent,
                canActivate: [authGuard],
            },
            {path:'allProduct',
                component:AllProductsComponent,
                canActivate: [authGuard],
            },{
                path:'settings',
                component:SettingsComponent,
                canActivate: [authGuard],
            }

        ]
    }
];
