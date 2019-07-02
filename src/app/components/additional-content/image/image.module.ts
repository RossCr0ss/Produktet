import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { SharedModule } from "../../../shared/shared.module";
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        LazyLoadImageModule.forRoot({
            preset: intersectionObserverPreset
        })
    ],
    declarations: [ImageComponent],
    entryComponents: [ImageComponent]
})
export class ImageModule {
}

export function moduleName() {
    return 'ImageModule';
}

export function entryComponent() {
    return ImageComponent;
}
