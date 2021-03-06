import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormGroup, FormArray, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PromptComponent } from './prompt.component';

const dialogRefSpy = jasmine.createSpyObj<MatDialogRef<PromptComponent, string>>(['close']);

describe('PromptComponent', () => {
  let component: PromptComponent;
  let fixture: ComponentFixture<PromptComponent>;
  let dialogRef: MatDialogRef<PromptComponent, string>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PromptComponent
      ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptComponent);
    component = fixture.componentInstance;
    dialogRef = TestBed.get(MatDialogRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('form submit', () => {
    it('should close dialog with a string if there is just one input', () => {
      component.inputForm = new FormGroup({
        values: new FormArray([
          new FormControl('test input')
        ])
      });
      component.respond();
      expect(dialogRef.close).toHaveBeenCalledWith('test input');
    });
    it('should close dialog with an array if there are multiple inputs', () => {
      component.inputForm = new FormGroup({
        values: new FormArray([
          new FormControl('test input 1'),
          new FormControl('test input 2'),
          new FormControl('test input 3')
        ])
      });
      component.respond();
      expect(dialogRef.close).toHaveBeenCalledWith([
        'test input 1',
        'test input 2',
        'test input 3'
      ]);
    });
  });
});
