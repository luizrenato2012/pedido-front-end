import { TestBed, inject } from '@angular/core/testing';

import { ItemPedidoService } from './item-pedido.service';

describe('ItemPedidoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemPedidoService]
    });
  });

  it('should be created', inject([ItemPedidoService], (service: ItemPedidoService) => {
    expect(service).toBeTruthy();
  }));
});
