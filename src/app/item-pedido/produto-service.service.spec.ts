import { TestBed, inject } from '@angular/core/testing';

import { ProdutoServiceService } from './produto-service.service';

describe('ProdutoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdutoServiceService]
    });
  });

  it('should be created', inject([ProdutoServiceService], (service: ProdutoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
