import {CommonModule}          from '@angular/common';
import {NgModule}              from '@angular/core';
import {PipesModule}           from '../pipes/pipes.module';
import {MaterialModule}        from '../shared/material/material.module';
import {OpenTreeItemComponent} from './open-tree/open-tree-item/open-tree-item.component';
import {OpenTreeComponent}     from './open-tree/open-tree.component';

const components = [
	OpenTreeComponent,
	OpenTreeItemComponent
];

@NgModule({
	imports        : [
		CommonModule,
		MaterialModule,
		PipesModule
	],
	declarations   : components,
	entryComponents: components,
	exports        : components
})
export class ComponentModule {}
