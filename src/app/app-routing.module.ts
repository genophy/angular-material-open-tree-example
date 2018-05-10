import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {HomeComponent}         from './page/home/home.component';
import {OpenTreeDemoComponent} from './page/home/open-tree-demo/open-tree-demo.component';

const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{
		path: 'home', component: HomeComponent, children: [
			{path: '', redirectTo: 'open-tree-demo', pathMatch: 'full'},
			{path: 'open-tree-demo', component: OpenTreeDemoComponent}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
