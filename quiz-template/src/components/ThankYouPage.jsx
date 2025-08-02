import React from 'react';
import { CheckCircle, Phone, Mail, Clock } from 'lucide-react';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <img 
            src="/Logo with Navy Blue Accent 1.png" 
            alt="Peak Settlement" 
            className="h-12 mx-auto mb-6"
          />
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Congratulations!
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Based on your responses, you may be eligible for compensation.
          </p>
          <p className="text-lg text-gray-500">
            A legal expert will contact you shortly to discuss your case.
          </p>
        </div>

        {/* What Happens Next */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            What Happens Next?
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Case Review</h3>
                <p className="text-gray-600">
                  Our legal experts will review your case details and assess your potential for compensation.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Expert Consultation</h3>
                <p className="text-gray-600">
                  A qualified attorney will contact you within 24 hours to discuss your case and next steps.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">No Upfront Costs</h3>
                <p className="text-gray-600">
                  We work on a contingency basis - you don't pay unless we win your case.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Need Immediate Assistance?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-blue-600 font-semibold text-lg">(555) 123-4567</p>
                <p className="text-gray-600 text-sm">Available 24/7</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email Us</h3>
                <p className="text-blue-600 font-semibold">info@peaksettlement.com</p>
                <p className="text-gray-600 text-sm">We respond within 2 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <Clock className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Time-Sensitive Information</h3>
              <p className="text-yellow-700 text-sm">
                Personal injury cases have statute of limitations. It's important to act quickly to preserve your rights and ensure the best possible outcome for your case.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            This assessment does not constitute legal advice. Individual results may vary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;

