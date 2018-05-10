import {NgModule}                from '@angular/core';
import {FlexLayoutModule}        from '@angular/flex-layout';
import {BrowserModule}           from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule}      from './app-routing.module';
import {AppComponent}          from './app.component';
import {ComponentModule}       from './component/component.module';
import {HomeComponent}         from './page/home/home.component';
import {OpenTreeDemoComponent} from './page/home/open-tree-demo/open-tree-demo.component';
import {PipesModule}           from './pipes/pipes.module';
import {MaterialModule}        from './shared/material/material.module';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		OpenTreeDemoComponent
	],
	imports     : [
		BrowserModule,
		ComponentModule,
		PipesModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		FlexLayoutModule
	],
	providers   : [],
	bootstrap   : [AppComponent]
})
export class AppModule {}
