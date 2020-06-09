import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		CommonModule,
		FormsModule,
	],
})

export class SharedModule {}
