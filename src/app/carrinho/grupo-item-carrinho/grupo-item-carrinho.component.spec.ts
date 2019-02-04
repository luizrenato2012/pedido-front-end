import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoItemCarrinhoComponent } from './grupo-item-carrinho.component';

describe('GrupoItemCarrinhoComponent', () => {
  let component: GrupoItemCarrinhoComponent;
  let fixture: ComponentFixture<GrupoItemCarrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoItemCarrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoItemCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
