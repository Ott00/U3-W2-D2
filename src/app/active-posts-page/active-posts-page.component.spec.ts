import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePostsPageComponent } from './active-posts-page.component';

describe('ActivePostsPageComponent', () => {
  let component: ActivePostsPageComponent;
  let fixture: ComponentFixture<ActivePostsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePostsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivePostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
