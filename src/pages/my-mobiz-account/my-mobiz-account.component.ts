import { Component } from '@angular/core';
import { PageIntroComponent } from "../../components/generic-components/page-intro/page-intro.component";
import { WizardStepperComponent } from "../../components/generic-components/wizard-stepper/wizard-stepper.component";
import { AdditionalDetailsComponent } from './additional-details/additional-details.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ConfirmDetailsComponent } from './confirm-details/confirm-details.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
interface StepData {
  id: number;
  title: string;
  component?: any;
  completed?: boolean;
}
@Component({
  selector: 'app-my-mobiz-account',
  imports: [PageIntroComponent, WizardStepperComponent],
  templateUrl: './my-mobiz-account.component.html',
  styleUrl: './my-mobiz-account.component.scss'
})
export class MyMobizAccountComponent {

  currentStep = 1;

  stepData: StepData[] = [
    { id: 1, title: 'Get Started', component: GetstartedComponent },
    { id: 2, title: 'Additional Details', component: AdditionalDetailsComponent },
    { id: 3, title: 'Documentation', component: DocumentationComponent },
    { id: 4, title: 'Confirm Your Details', component: ConfirmDetailsComponent }
  ];

  onStepChanged(step: number): void {
    this.currentStep = step;
    console.log('Step changed to:', step);
  }

  getCurrentStepName(): string {
    const step = this.stepData.find(s => s.id === this.currentStep);
    return step ? step.title : '';
  }

}
