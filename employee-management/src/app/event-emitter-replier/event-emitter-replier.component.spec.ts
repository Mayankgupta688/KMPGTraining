import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterReplierComponent } from './event-emitter-replier.component';

describe('EventEmitterReplierComponent', () => {
  let component: EventEmitterReplierComponent;
  let fixture: ComponentFixture<EventEmitterReplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventEmitterReplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmitterReplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
