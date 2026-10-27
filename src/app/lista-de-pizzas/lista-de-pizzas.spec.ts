import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaDePizzas } from './lista-de-pizzas';

describe('ListaDePizzas', () => {
  let component: ListaDePizzas;
  let fixture: ComponentFixture<ListaDePizzas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDePizzas],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaDePizzas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
