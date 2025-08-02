// Lead Submission Service for Peak Settlement Quiz
// Handles lead data submission to Supabase

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const submitLead = async (formData, qualificationResult) => {
  try {
    const edgeFunctionUrl = `${supabaseUrl}/functions/v1/submit-lead`;
    
    // Get TrustedForm certificate if available
    const trustedFormCert = getTrustedFormCertificate();
    
    const leadData = {
      // Personal Information
      zipcode: formData.zipcode,
      assessment_for: formData.assessmentFor,
      
      // Injury Details
      injury_types: Array.isArray(formData.injuryTypes) ? formData.injuryTypes.join(', ') : formData.injuryTypes,
      accident_date: formData.accidentDate,
      
      // Medical Information
      medical_treatment: formData.medicalTreatment,
      currently_treating: formData.currentlyTreating,
      
      // Impact Information
      missed_work: formData.missedWork,
      fault_party: formData.faultParty,
      insurance_claim: formData.insuranceClaim,
      legal_representation: formData.legalRepresentation,
      
      // Qualification Results
      qualified: qualificationResult.qualified,
      qualification_score: qualificationResult.score,
      
      // Tracking Information
      trusted_form_cert: trustedFormCert,
      submission_timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      referrer: document.referrer,
      
      // Source Tracking
      utm_source: getUrlParameter('utm_source'),
      utm_medium: getUrlParameter('utm_medium'),
      utm_campaign: getUrlParameter('utm_campaign'),
      utm_term: getUrlParameter('utm_term'),
      utm_content: getUrlParameter('utm_content'),
    };

    const response = await fetch(edgeFunctionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseKey}`,
        'apikey': supabaseKey,
      },
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting lead:', error);
    throw error;
  }
};

// Helper function to get TrustedForm certificate
const getTrustedFormCertificate = () => {
  try {
    // Check if TrustedForm is available
    if (typeof window !== 'undefined' && window.trustedform && window.trustedform.getCertificateUrl) {
      return window.trustedform.getCertificateUrl();
    }
    return null;
  } catch (error) {
    console.warn('TrustedForm certificate not available:', error);
    return null;
  }
};

// Helper function to get URL parameters
const getUrlParameter = (name) => {
  if (typeof window === 'undefined') return null;
  
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

export default submitLead;

