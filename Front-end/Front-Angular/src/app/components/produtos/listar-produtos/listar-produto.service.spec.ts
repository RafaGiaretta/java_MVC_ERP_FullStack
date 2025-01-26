import { TestBed } from '@angular/core/testing';

import { ListarProdutoService } from './listar-produto.service';

describe('ListarProdutoService', () => {
  let service: ListarProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
