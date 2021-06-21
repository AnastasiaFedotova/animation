import { Component, HostListener, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import moveContent from './../../../animations/moveBlock';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  animations: moveContent
})
export class BlockComponent implements OnInit {
  @ViewChild('btn') moveBtn;
  @ViewChild('moveText') moveText;
  @ViewChild('movedBlock') movedBlock;
  @HostListener('window:mouseup', ['$event'])
  @Input() text: string = '';
  isMoved: string = 'removing';
  containerHeight: number = 0;
  moveBtnPosition;
  moveTextPosition;
  topPosition: number = 0;

  constructor() {
  }

  mouseUp(_event){
    this.reanimate();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.movedBlock = this.movedBlock.nativeElement;
    this.moveBtn = this.moveBtn.nativeElement;
    this.moveText = this.moveText.nativeElement;
  }

  animate() {
    this.isMoved = 'moving';
    this.moveBtnPosition = this.moveBtn.getBoundingClientRect();
    this.moveTextPosition = this.moveText.getBoundingClientRect();

    const y = this.moveBtnPosition.y - this.moveTextPosition.y - this.moveBtnPosition.height;
    this.topPosition = y;
  }

  reanimate() {
    this.isMoved = 'removing'
    this.movedBlock.setAttribute('style', 'transform: initial');
    this.topPosition = 0;
  }
}
