import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';
import { ImageComponent } from 'src/components/additional-content/image/image.component';
import { SharedModule } from 'src/modules/shared/shared.module';

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
