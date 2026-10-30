import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaPizzas } from './pagina-pizzas';

describe('PaginaPizzas', () => {
  let component: PaginaPizzas;
  let fixture: ComponentFixture<PaginaPizzas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPizzas],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaPizzas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
