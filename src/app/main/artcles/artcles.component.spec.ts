import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtclesComponent } from './artcles.component';

describe('ArtclesComponent', () => {
  let component: ArtclesComponent;
  let fixture: ComponentFixture<ArtclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
