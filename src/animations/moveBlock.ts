import { trigger, state, style, animate, transition, keyframes, query, animateChild, group } from '@angular/animations';

export default [
  trigger('movedContent', [
    state('moving', style({
      zIndex: 3,
      right: 0,
      top: '{{top}}px',
      opacity: 0.6,
      margin: '0 0 0 auto',
      height: 'auto',
      width: '60%',
      fontSize: '9px'
    }),
      {params: {top: '0px'}}
    ),
    state('removing', style({
      zIndex: 0,
      right: 0,
      top: 0,
      opacity: 1,
      height: '100%',
      width: '100%',
      fontSize: 'initial',
      transform: 'initial'
    })),

    transition('removing => moving', [
      animate('0.5s',
        keyframes([
          style({
            zIndex: 0,
            opacity: 1,
            top: '{{top}}px',
            height: '100%',
            width: '100%',
            fontSize: 'initial'
          }),
          style({
            zIndex: 3,
            opacity: 0.6,
            top: '{{top}}px',
            height: 'auto',
            width: '60%',
            fontSize: '9px'
          }),
        ])
      )
    ]),

    transition('moving => removing', [
      animate('0.5s',
        keyframes([
          style({
            zIndex: 3,
            right: 0,
            opacity: 0.6,
            height: 'auto',
            width: '60%',
            fontSize: '9px'
          }),
          style({
            zIndex: 0,
            right: 0,
            opacity: 1,
            height: '100%',
            width: '100%',
            fontSize: 'initial'
          }),
        ])
      )
    ])
  ])
]
