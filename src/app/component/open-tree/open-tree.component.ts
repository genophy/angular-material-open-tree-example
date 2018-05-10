import {Component, OnInit} from '@angular/core';
import {OpenTreeHandler}   from './open-tree-item/open-tree-handler';
import {OpenTreeObj}       from './open-tree-item/open-tree-obj';

@Component({
	selector   : 'crm-open-tree',
	templateUrl: './open-tree.component.html',
	styleUrls  : ['./open-tree.component.scss']
})
export class OpenTreeComponent implements OpenTreeHandler {

	treeList: Array<OpenTreeObj> = [
		OpenTreeObj.newInstance('江苏省', null, [
			OpenTreeObj.newInstance('南京', null, [
				OpenTreeObj.newInstance('秦淮区', null, []),
				OpenTreeObj.newInstance('鼓楼区', null, []),
				OpenTreeObj.newInstance('栖霞区', null, [])
			]),
			OpenTreeObj.newInstance('无锡', null, []),
			OpenTreeObj.newInstance('苏州', null, []),
			OpenTreeObj.newInstance('常州', null, [])
		]),
		OpenTreeObj.newInstance('浙江省', null, [
			OpenTreeObj.newInstance('杭州', null, []),
			OpenTreeObj.newInstance('景德镇', null, [])
		])
	];

	constructor() {}

	treeListChanged(list: Array<OpenTreeObj>) {
		console.log('列表变更:', list);
	}

	handlerAdd(parents: Array<OpenTreeObj>, name: string): boolean {
		console.log('增加:', name);
		return true;
	}

	handlerModify(parents: Array<OpenTreeObj>, item: OpenTreeObj): boolean {

		console.log('修改:', item);
		return true;
	}

	handlerRemove(parents: Array<OpenTreeObj>, item: OpenTreeObj): boolean {
		console.log('删除:', item);
		return true;
	}

	handlerItemClick(parents: Array<OpenTreeObj>, item: OpenTreeObj): void {
		console.log(parents, item);
	}

}
