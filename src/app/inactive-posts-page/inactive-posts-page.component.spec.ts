import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivePostsPageComponent } from './inactive-posts-page.component';

describe('InactivePostsPageComponent', () => {
  let component: InactivePostsPageComponent;
  let fixture: ComponentFixture<InactivePostsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactivePostsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InactivePostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
