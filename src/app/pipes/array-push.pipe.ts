import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'arrayPush'
})
export class ArrayPushPipe implements PipeTransform {

	transform(value: Array<any>, args?: any): any {
		let tmpArr = [];
		if (value && 0 < value.length) {
			tmpArr = value.slice();
		}
		tmpArr.push(args);
		return tmpArr;
	}

}
