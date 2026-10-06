import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SelecionarComponent } from './selecionar';

describe('SelecionarComponent', () => {
  let component: SelecionarComponent;
  let fixture: ComponentFixture<SelecionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecionarComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SelecionarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});