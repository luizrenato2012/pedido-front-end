import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPedidoGrupoComponent } from './item-pedido-grupo.component';

describe('ItemPedidoGrupoComponent', () => {
  let component: ItemPedidoGrupoComponent;
  let fixture: ComponentFixture<ItemPedidoGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPedidoGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPedidoGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
