import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MirceaComponent } from './mircea.component';

describe('MirceaComponent', () => {
  let component: MirceaComponent;
  let fixture: ComponentFixture<MirceaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirceaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MirceaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
