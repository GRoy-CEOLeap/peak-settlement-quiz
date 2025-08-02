// Qualification Service for Peak Settlement Quiz
// Handles lead qualification logic and n8n webhook integration

const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://n8n-s08bs-u37698.vm.elestio.app/webhook/7abb810f-854b-4f3e-b6dd-0027dc2fec87';

export const qualifyLead = async (formData) => {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        zipcode: formData.zipcode,
        assessmentFor: formData.assessmentFor,
        injuryTypes: formData.injuryTypes,
        accidentDate: formData.accidentDate,
        medicalTreatment: formData.medicalTreatment,
        currentlyTreating: formData.currentlyTreating,
        missedWork: formData.missedWork,
        faultParty: formData.faultParty,
        insuranceClaim: formData.insuranceClaim,
        legalRepresentation: formData.legalRepresentation,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    // Qualification logic based on responses
    const qualificationScore = calculateQualificationScore(formData);
    
    return {
      qualified: qualificationScore >= 60,
      score: qualificationScore,
      webhookResponse: result
    };
  } catch (error) {
    console.error('Error in qualification service:', error);
    throw error;
  }
};

const calculateQualificationScore = (formData) => {
  let score = 0;
  
  // Injury type scoring
  if (formData.injuryTypes?.includes('Motor vehicle accident')) score += 25;
  if (formData.injuryTypes?.includes('Slip and fall')) score += 20;
  if (formData.injuryTypes?.includes('Medical malpractice')) score += 30;
  if (formData.injuryTypes?.includes('Product defect')) score += 25;
  if (formData.injuryTypes?.includes('Workplace injury')) score += 15;
  
  // Medical treatment scoring
  if (formData.medicalTreatment === 'Yes') score += 20;
  if (formData.currentlyTreating === 'Yes') score += 15;
  
  // Work impact scoring
  if (formData.missedWork === 'Yes') score += 10;
  
  // Legal status scoring
  if (formData.legalRepresentation === 'No') score += 10;
  
  // Fault party scoring
  if (formData.faultParty === 'Someone else') score += 15;
  
  return Math.min(score, 100); // Cap at 100
};

export default qualifyLead;

