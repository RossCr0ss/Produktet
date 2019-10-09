/*
import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeAnimation =

  trigger('routeAnimations', [

    transition( '* => *', [

      query(':enter',
        [
          style({ opacity: 0 })
        ],
        { optional: true }
      ),

      query(':leave',
        [
          style({ opacity: 1 }),
          animate('2s', style({ opacity: 0 }))
        ],
        { optional: true }
      ),

      query(':enter',
        [
          style({ opacity: 0 }),
          animate('1s', style({ opacity: 1 }))
        ],
        { optional: true }
      )

    ])

  ]);
*/


import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

export const slideAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      // During a transition, a new view is inserted directly after the old one and both elements appear on screen at the same time. To prevent this, apply additional styling to the host view, and to the removed and inserted child views. The host view must use relative positioning, and the child views must use absolute positioning. Adding styling to the views animates the containers in place, without the DOM moving things around.
      query(':leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),

      query(':self', [
        style({ 
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%' })
      ], { optional: true }),

      query(':leave', animate('000ms ease-out', style({ left: '100%'})), { optional: true }),
      query(':self', animate('2000ms ease-out', style({ left: '0%'})), { optional: true }),

      // query(':self', animateChild(), { optional: true }),
      // group([
      //   query(':self', [
      //     animate('2000ms ease-out', style({ left: '0%'}))
      //   ], { optional: true })
      // ]),
      
    ])
  ]);

