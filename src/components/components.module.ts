import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { TodosComponent } from './todos/todos';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
	declarations: [TodosComponent],
	imports: [
		CommonModule,
		IonicModule,
		NgPipesModule
	],
	exports: [TodosComponent]
})
export class ComponentsModule {}
