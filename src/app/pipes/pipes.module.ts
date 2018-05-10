import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {ArrayPushPipe} from './array-push.pipe';

const pipes = [
	ArrayPushPipe
];

@NgModule({
	imports     : [
		CommonModule
	],
	declarations: pipes,
	exports     : pipes
})
export class PipesModule {}
