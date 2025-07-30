import { Card } from "../Card";

export const ExplanationCard = () => (
  <Card>
    <h3 className="font-semibold text-gray-900 dark:text-gray-50">
      Energy Consumption in the Zilkha Center
    </h3>
    <p className="mt-2 text-sm leading-6 text-gray-900 dark:text-gray-50">
      The top graph displays 
      yesterday's total energy use compared to today, and the 
      lower graph shows each device separately. Use the checkboxes on the side 
      to set which items are visible. The top bar shows the percentage 
      of yesterday's total energy used today.
    </p>
  </Card> 
);