import {CdkTableModule} from '@angular/cdk/table';
import {CommonModule}   from '@angular/common';

import {NgModule}    from '@angular/core';
import {FormsModule} from '@angular/forms';

import {
	DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE,
	MAT_LABEL_GLOBAL_OPTIONS, MAT_NATIVE_DATE_FORMATS, MAT_SNACK_BAR_DEFAULT_OPTIONS,
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatDividerModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule, MatNativeDateModule, MatPaginatorIntl,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatStepperModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule, MatTreeModule, NativeDateAdapter
} from '@angular/material';

import {CRM_DATA_FORMATS, CrmDateFormatAdapter} from './crm-date-format-adapter';

const modules = [
	CommonModule,
	FormsModule,
	CdkTableModule,
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatDividerModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSlideToggleModule,
	MatSliderModule,
	MatSnackBarModule,
	MatSortModule,
	MatStepperModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	MatTreeModule
];

@NgModule({
	imports  : modules,
	providers: [
		{provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'auto'}},
		{provide: MatPaginatorIntl, useValue: MatPaginatorIntlCN()},
		{provide: MAT_DATE_LOCALE, useValue: 'zh-CN'},
		{provide: DateAdapter, useClass: CrmDateFormatAdapter},
		{provide: MAT_DATE_FORMATS, useValue: CRM_DATA_FORMATS}
	],
	exports  : modules
})
export class MaterialModule {}

/**
 * matPaginator中文配置
 * @returns {MatPaginatorIntl}
 * @constructor
 */
export function MatPaginatorIntlCN() {
	const dutchRangeLabel = (page: number, pageSize: number, length: number) => {
		if (length === 0 || pageSize === 0) { return `0 van ${length}`; }

		length = Math.max(length, 0);

		const startIndex = page * pageSize;

		// If the start index exceeds the list length, do not try and fix the end index to the end.
		const endIndex = startIndex < length ?
			Math.min(startIndex + pageSize, length) :
			startIndex + pageSize;

		return `${startIndex + 1} - ${endIndex} 共 ${length}条`;
	};

	const p = new MatPaginatorIntl();
	p.itemsPerPageLabel = '每页记录数';
	p.nextPageLabel = '下一页';
	p.previousPageLabel = '上一页';
	p.firstPageLabel = '首页';
	p.lastPageLabel = '末页';
	p.getRangeLabel = dutchRangeLabel;
	return p;
}
