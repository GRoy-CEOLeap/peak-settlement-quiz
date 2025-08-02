# Peak Settlement Quiz Template

A standalone quiz application for lead generation and qualification. This template provides a complete 8-question assessment flow with qualification logic and lead submission capabilities.

## Features

- 8-question assessment flow with progress tracking
- Dynamic question types (text, radio, checkbox, date)
- Lead qualification logic with scoring
- Integration with n8n webhooks and Supabase
- Responsive design optimized for mobile
- Thank you and unqualified result pages
- Environment variable configuration
- Configured for `/quiz` subpath deployment

## Quick Start

1. **Clone or Import Repository**
   ```bash
   git clone [your-repo-url]
   cd peak-settlement-quiz
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual values
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# n8n Webhook Configuration
VITE_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-webhook-id

# TrustedForm Configuration (optional)
VITE_TRUSTEDFORM_CERT=your_trustedform_certificate
```

## Deployment

### Netlify Deployment

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy

The quiz will be accessible at `yourdomain.com/quiz`

### Integration with Landing Page

To integrate with a separate landing page:

1. Deploy the quiz to its own Netlify site
2. Note the deployment URL (e.g., `https://quiz-app.netlify.app`)
3. Update the landing page's `_redirects` file:
   ```
   /quiz/* https://quiz-app.netlify.app/:splat 200
   ```

## Customization

### Quiz Questions

Edit `src/components/QuizSection.jsx` to modify:
- Question text and options
- Validation rules
- Question flow and logic

### Qualification Logic

Edit `src/services/qualificationService.js` to adjust:
- Scoring weights for different answers
- Qualification threshold
- Custom qualification rules

### Styling

The template uses Tailwind CSS. Customize:
- Colors in `tailwind.config.js`
- Component styles in individual `.jsx` files
- Global styles in `src/index.css`

### Branding

Replace the following assets:
- Logo: `public/Logo with Navy Blue Accent 1.png`
- Favicon: `public/favicon.ico`
- Update company information in components

## File Structure

```
src/
├── components/
│   ├── QuizSection.jsx          # Main quiz interface
│   ├── ThankYouPage.jsx         # Qualified lead page
│   ├── UnqualifiedPage.jsx      # Non-qualified lead page
│   └── MonthYearSelector.jsx    # Date input component
├── services/
│   ├── qualificationService.js  # Lead qualification logic
│   └── leadSubmissionService.js # Data submission handling
├── App.jsx                      # Main app with routing
├── main.jsx                     # Application entry point
└── index.css                    # Global styles
```

## API Integration

### n8n Webhook

The quiz sends qualification data to an n8n webhook for processing. The webhook receives:

```json
{
  "zipcode": "12345",
  "assessmentFor": "Myself",
  "injuryTypes": ["Motor vehicle accident"],
  "accidentDate": {"month": "01", "year": "2024"},
  "medicalTreatment": "Yes",
  "currentlyTreating": "Yes",
  "missedWork": "Yes",
  "faultParty": "Someone else",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Supabase Integration

Lead data is submitted to a Supabase Edge Function with the following structure:

```json
{
  "zipcode": "12345",
  "assessment_for": "Myself",
  "injury_types": "Motor vehicle accident",
  "qualified": true,
  "qualification_score": 85,
  "submission_timestamp": "2024-01-01T00:00:00.000Z",
  "trusted_form_cert": "certificate_url",
  "utm_source": "google",
  // ... additional tracking data
}
```

## Support

For questions or issues with this template, please refer to the main documentation or contact the development team.

## License

This template is proprietary and intended for use within Peak Settlement projects only.

