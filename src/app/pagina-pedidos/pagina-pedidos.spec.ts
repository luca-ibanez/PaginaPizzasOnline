import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaPedidos } from './pagina-pedidos';

describe('PaginaPedidos', () => {
  let component: PaginaPedidos;
  let fixture: ComponentFixture<PaginaPedidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPedidos],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaPedidos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
