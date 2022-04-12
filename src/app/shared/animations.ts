import { animate, animateChild, group, keyframes, query, state, style, transition, trigger } from '@angular/animations';

export const fallDownAnimation = trigger('fallDown', [
  state('void', style({ transform: 'translateY(-50px)' })),
  transition(':enter', [
    group([
      query('@fallDownDelayed', animateChild()),
      animate(400),
    ]),
  ]),
]);

export const fallDownDelayedAnimation = trigger('fallDownDelayed', [
  state('void', style({ transform: 'translateY(-50px)' })),
  transition(':enter', [
    animate(600, keyframes([
      style({ transform: 'translateY(-20px)', offset: 0 }),
      style({ transform: 'translateY(-20px)', offset: 0.5 }),
      style({ transform: 'translateY(0)', offset: 1 }),
    ]))
  ]),
]);

export const logoAnimation = trigger('logoAnimation', [
  state('void', style({ transform: 'scale(.5) translate(-50%, -50%)' })),
  transition(':enter', [
    animate(1000, keyframes([
      style({ transform: 'scale(.9) translate(20%, -20%)', opacity: 0, offset: 0 }),
      style({ transform: 'scale(.9) translate(20%, -20%)', opacity: 0, offset: 0.7 }),
      style({ transform: 'scale(.9) translate(20%, -20%)', opacity: 1, offset: 0.8 }),
      style({ transform: 'none', opacity: 1, offset: 1 }),
    ]))
  ]),
]);

export const fromHeight0TopToBottomAnimation = trigger('fromHeightZeroTopToBottom', [
  state('void', style({ clipPath: 'polygon(0 0, 100% 100%, 100% 100%, 0 0)' })),
  transition(':enter', [
    animate(1000, keyframes([
      style({ clipPath: 'polygon(0 0, 100% 100%, 100% 100%, 0 0)', offset: 0 }),
      style({ clipPath: 'polygon(0 0, 100% 100%, 100% 100%, 0 0)', offset: 0.7 }),
      style({ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', offset: 1 }),
    ]))
  ]),
]);

export const riseFromAboveAnimation1 = trigger('riseFromAbove1', [
  state('void', style({ transform: 'translateY(100%)' })),
  transition(':enter', [
    animate(1000, keyframes([
      style({ transform: 'translateY(100%)', offset: 0 }),
      style({ transform: 'translateY(100%)', offset: 0.7 }),
      style({ transform: 'translateY(0)', offset: 1 }),
    ])),
  ]),
]);

export const riseFromAboveAnimation2 = trigger('riseFromAbove2', [
  state('void', style({ transform: 'translateY(100%)' })),
  transition(':enter', [
    animate(1200, keyframes([
      style({ transform: 'translateY(100%)', offset: 0 }),
      style({ transform: 'translateY(100%)', offset: 0.7 }),
      style({ transform: 'translateY(0)', offset: 1 }),
    ])),
  ]),
]);
