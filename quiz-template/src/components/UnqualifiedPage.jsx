import React from 'react';
import { Info, Phone, Mail, ExternalLink } from 'lucide-react';

const UnqualifiedPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <img 
            src="/Logo with Navy Blue Accent 1.png" 
            alt="Peak Settlement" 
            className="h-12 mx-auto mb-6"
          />
          <div className="flex justify-center mb-4">
            <Info className="w-16 h-16 text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Thank You for Your Interest
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Based on your responses, your case may not meet our current criteria.
          </p>
          <p className="text-lg text-gray-500">
            However, this doesn't mean you don't have a valid claim.
          </p>
        </div>

        {/* Alternative Options */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            We Still Want to Help
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Free Consultation</h3>
                <p className="text-gray-600">
                  Every case is unique. We offer a free consultation to discuss your specific situation in detail.
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
                <h3 className="font-semibold text-gray-900 mb-1">Case Circumstances Change</h3>
                <p className="text-gray-600">
                  If your medical condition worsens or new information comes to light, your case may become viable.
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
                <h3 className="font-semibold text-gray-900 mb-1">Referral Network</h3>
                <p className="text-gray-600">
                  We can connect you with other qualified attorneys who may be able to assist with your specific case type.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Still Have Questions?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-blue-600 font-semibold text-lg">(555) 123-4567</p>
                <p className="text-gray-600 text-sm">Free consultation available</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email Us</h3>
                <p className="text-blue-600 font-semibold">info@peaksettlement.com</p>
                <p className="text-gray-600 text-sm">We respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Helpful Resources
          </h2>
          
          <div className="space-y-4">
            <a 
              href="#" 
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div>
                <h3 className="font-semibold text-gray-900">Know Your Rights</h3>
                <p className="text-gray-600 text-sm">Learn about personal injury law and your legal options</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400" />
            </a>

            <a 
              href="#" 
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div>
                <h3 className="font-semibold text-gray-900">Medical Documentation</h3>
                <p className="text-gray-600 text-sm">Tips for documenting your injuries and treatment</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400" />
            </a>

            <a 
              href="#" 
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div>
                <h3 className="font-semibold text-gray-900">Insurance Claims</h3>
                <p className="text-gray-600 text-sm">Understanding the insurance claim process</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400" />
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Schedule Free Consultation
          </button>
          <p className="text-gray-500 text-sm mt-2">
            No obligation • Completely confidential
          </p>
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

export default UnqualifiedPage;

