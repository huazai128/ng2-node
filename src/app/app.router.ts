import { RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

const appRouter = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent}
];

export default RouterModule.forRoot(appRouter)
