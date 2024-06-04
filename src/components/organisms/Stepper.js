import React from "react";
import Step from "../atoms/Step";
import StepLine from "../molecules/StepLine";
const Stepper = ({ steps, currentStep }) => {
    return (
      <div className="flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Step
              stepNumber={index + 1}
              isActive={index === currentStep}
              isCompleted={index < currentStep}
            >
              {step}
            </Step>
            {index < steps.length - 1 && (
              <StepLine isCompleted={index < currentStep} />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };
  
  export default Stepper;