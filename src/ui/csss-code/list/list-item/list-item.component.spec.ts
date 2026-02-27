import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeListItemComponent } from './list-item.component';

interface TestCodeListItem extends CodeListItemComponent<TestCodeListItem> {
  key: string;
  label: string;
  children?: TestCodeListItem[];
  isDisabled?: boolean;
}

describe('NavbarItemItemComponent', () => {
  let component: CodeListItemComponent<TestCodeListItem>;
  let fixture: ComponentFixture<CodeListItemComponent<TestCodeListItem>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //using imports instead of declarations in testbed because component is standalone
      imports: [CodeListItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeListItemComponent<TestCodeListItem>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
