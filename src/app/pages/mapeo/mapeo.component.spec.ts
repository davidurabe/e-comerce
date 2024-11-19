import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapeoComponent } from './mapeo.component';

describe('MapeoComponent', () => {
  let component: MapeoComponent;
  let fixture: ComponentFixture<MapeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapeoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
