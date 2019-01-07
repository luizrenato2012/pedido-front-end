import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPedidoDetalheComponent } from './item-pedido-detalhe.component';

describe('ItemPedidoDetalheComponent', () => {
  let component: ItemPedidoDetalheComponent;
  let fixture: ComponentFixture<ItemPedidoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPedidoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPedidoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
