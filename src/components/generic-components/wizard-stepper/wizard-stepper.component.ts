import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ComponentRef, EventEmitter, Input, OnDestroy, OnInit, Output, signal, ViewChild, ViewContainerRef } from '@angular/core';
  interface StepData {
    id: number;
    title: string;
    component?: any;
    completed?: boolean;
  }
@Component({
  selector: 'app-wizard-stepper',
  imports: [CommonModule],
  templateUrl: './wizard-stepper.component.html',
  styleUrl: './wizard-stepper.component.scss'
})
export class WizardStepperComponent implements OnInit, AfterViewInit, OnDestroy {
 @Input() steps: StepData[] = [
    { id: 1, title: 'Get Started' },
    { id: 2, title: 'Additional Details' },
    { id: 3, title: 'Documentation' },
    { id: 4, title: 'Confirm Your Details' }
  ];

  @Input() initialStep: number = 1;
  @Output() stepChanged = new EventEmitter<number>();

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) 
  dynamicComponentContainer!: ViewContainerRef;

  currentStep = signal(1);
  private currentComponentRef: ComponentRef<any> | null = null;

  ngOnInit() {
    this.currentStep.set(this.initialStep);
  }

  ngAfterViewInit() {
    // Use setTimeout to ensure ViewChild is fully initialized
    setTimeout(() => {
      this.loadCurrentStepComponent();
    }, 0);
  }

  // Add method to manually trigger component loading if needed
  loadStepComponent() {
    this.loadCurrentStepComponent();
  }

  ngOnDestroy() {
    this.destroyCurrentComponent();
  }

  private loadCurrentStepComponent() {
    // Clear any existing component first
    this.destroyCurrentComponent();
    
    // Ensure the container is available
    if (!this.dynamicComponentContainer) {
      console.warn('Dynamic component container not available yet');
      return;
    }
    
    const currentStepData = this.steps.find(step => step.id === this.currentStep());
    
    if (currentStepData?.component) {
      try {
        this.currentComponentRef = this.dynamicComponentContainer.createComponent(currentStepData.component);
        console.log(`Loaded component for step ${this.currentStep()}: ${currentStepData.title}`);
      } catch (error) {
        console.error('Error loading component:', error);
      }
    } else {
      console.log(`No component defined for step ${this.currentStep()}`);
    }
  }

  private destroyCurrentComponent() {
    if (this.currentComponentRef) {
      this.currentComponentRef.destroy();
      this.currentComponentRef = null;
    }
  }

  isActiveStep(stepId: number): boolean {
    return stepId === this.currentStep();
  }

  isCompletedStep(stepId: number): boolean {
    return stepId < this.currentStep();
  }

  isInactiveStep(stepId: number): boolean {
    return stepId > this.currentStep();
  }

  nextStep(): void {
    if (this.currentStep() < this.steps.length) {
      this.currentStep.update(step => step + 1);
      this.stepChanged.emit(this.currentStep());
      this.loadCurrentStepComponent();
    }
  }

  previousStep(): void {
    if (this.currentStep() > 1) {
      this.currentStep.update(step => step - 1);
      this.stepChanged.emit(this.currentStep());
      this.loadCurrentStepComponent();
    }
  }

  resetStepper(): void {
    this.currentStep.set(1);
    this.stepChanged.emit(this.currentStep());
    this.loadCurrentStepComponent();
  }

  goToStep(stepId: number): void {
    if (stepId >= 1 && stepId <= this.steps.length) {
      this.currentStep.set(stepId);
      this.stepChanged.emit(this.currentStep());
      this.loadCurrentStepComponent();
    }
  }
}
